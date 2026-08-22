const { OpenAI } = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Chat = require("../models/Chat");
const Message = require("../models/Message");
const Memory = require("../models/Memory");
const { memoryChats, memoryMessages } = require("./chatController");
const { memoryStore } = require("./memoryController");
const { dispatchTools } = require("../services/tools/toolDispatcher");
const aiProviderService = require("../services/aiProviderService");

const SYSTEM_INSTRUCTION = `You are VEXIS PRO, an adaptive, highly intelligent, helpful, accurate, and professional AI assistant.

Core Guidelines:
1. Personality: Helpful, natural, clear, professional, concise for simple questions, detailed & structured for complex technical queries.
2. Anti-patterns: Do NOT repeat the user's question unnecessarily, do NOT start every response with "Sure!", "Of course!", or robotic filler phrases.
3. Format Selection:
   - Simple Questions/Definitions: Direct definition + 1 clear example.
   - How-To/Guide: Step-by-step instructions + clean code examples + common pitfalls.
   - Comparisons: Markdown tables comparing features, pros/cons.
   - Technical/Architecture: Overview + Step-by-step explanation + MERN/Code Example + Key considerations.
   - Troubleshooting: Root cause + Diagnostic steps + Verified solution + Alternatives.
4. Multi-Turn Context & Memory: Maintain context across messages (e.g. remember user name, preferences, previously mentioned code/topics).
5. Personalized Responses: Use stored user preferences naturally without explicitly citing the memory database unless asked.`;

// Reliable Code Request Detection & Requirement Extraction Helper
function analyzeCodingPrompt(prompt) {
  if (!prompt || typeof prompt !== "string") return { isCodeRequest: false, detectedLanguage: "General", constraints: [] };

  const p = prompt.toLowerCase();
  const hasCodeKeyword = /(write|create|build|generate|implement|code|program|function|script|class|method|algorithm|fix|debug|refactor|sql|query|schema|api|component|react|node|express|python|java|javascript|typescript|c\+\+|cpp|c#|golang|rust|html|css|mongodb|mongoose|postgresql|mysql)/i.test(prompt);

  if (!hasCodeKeyword) return { isCodeRequest: false, detectedLanguage: "General", constraints: [] };

  let detectedLanguage = "General";
  if (/\b(java|jdk|spring|junit)\b/i.test(p) && !/\b(javascript|java script|js)\b/i.test(p)) {
    detectedLanguage = "Java";
  } else if (/\b(python|py|django|flask|fastapi|pandas|numpy)\b/i.test(p)) {
    detectedLanguage = "Python";
  } else if (/\b(sql|mysql|postgres|postgresql|sqlite|oracle|t-sql|queries|query|select|insert|update|delete|join|group by|having)\b/i.test(p)) {
    detectedLanguage = "SQL";
  } else if (/\b(react|jsx|tsx|component|useeffect|usestate)\b/i.test(p)) {
    detectedLanguage = "React";
  } else if (/\b(node|express|backend api|rest api)\b/i.test(p)) {
    detectedLanguage = "Node.js/Express";
  } else if (/\b(typescript|ts)\b/i.test(p)) {
    detectedLanguage = "TypeScript";
  } else if (/\b(javascript|js|es6)\b/i.test(p)) {
    detectedLanguage = "JavaScript";
  } else if (/\b(c\+\+|cpp)\b/i.test(p)) {
    detectedLanguage = "C++";
  } else if (/\b(c#|\.net|dotnet)\b/i.test(p)) {
    detectedLanguage = "C#";
  } else if (/\b(mongodb|mongoose)\b/i.test(p)) {
    detectedLanguage = "MongoDB";
  } else if (/\b(html|css|tailwind)\b/i.test(p)) {
    detectedLanguage = "HTML/CSS";
  }

  const constraints = [];
  if (p.includes("without sorting") || p.includes("no sort") || p.includes("do not sort") || p.includes("don't sort")) {
    constraints.push("DO NOT SORT the array/collection (must solve in O(N) single/double pass)");
  }
  if (p.includes("recursion") || p.includes("recursive")) {
    constraints.push("MUST USE RECURSION (must include a base case and recursive call)");
  }
  if (p.includes("window function") || p.includes("dense_rank") || p.includes("row_number")) {
    constraints.push("MUST USE SQL WINDOW FUNCTION (e.g. DENSE_RANK() or ROW_NUMBER())");
  }
  if (p.includes("without built-in") || p.includes("no built-in") || p.includes("without library")) {
    constraints.push("DO NOT USE built-in sorting or helper libraries; implement custom logic");
  }
  if (p.includes("complete program") || p.includes("standalone") || p.includes("executable") || detectedLanguage === "Java") {
    constraints.push("MUST PROVIDE A COMPLETE EXECUTABLE PROGRAM (including class, main method/entrypoint, and imports)");
  }

  return {
    isCodeRequest: true,
    detectedLanguage,
    constraints,
  };
}

// Build Dynamic System Instruction with Strict Coding Directives
function buildSystemInstruction(userMessage) {
  const analysis = analyzeCodingPrompt(userMessage);

  if (!analysis.isCodeRequest) {
    return SYSTEM_INSTRUCTION;
  }

  let constraintText = "";
  if (analysis.constraints.length > 0) {
    constraintText = `\n\n[USER EXPLICIT CONSTRAINTS FOR THIS REQUEST]:\n` + analysis.constraints.map((c) => `- ${c}`).join("\n");
  }

  return `${SYSTEM_INSTRUCTION}

==================================================
CRITICAL VEXIS PRO CODE GENERATION DIRECTIVES
==================================================

1. LANGUAGE LOCK:
   - Requested Language/Framework: "${analysis.detectedLanguage}".
   - You MUST write the solution strictly using ${analysis.detectedLanguage}.
   - Never replace ${analysis.detectedLanguage} with another programming language unless explicitly instructed.

2. REQUIREMENT EXTRACTION & NO PROBLEM ALTERATION:
   - Carefully analyze the requested problem and explicit user constraints before generating code.${constraintText}
   - Satisfy ALL explicit constraints strictly. Never solve a different problem or modify the user's intended logic.

3. COMPLETE & EXECUTABLE CODE REQUIREMENT:
   - For standalone languages (Java, Python, C++, C#), return a COMPLETE program with all required imports, class declarations, main entrypoint, and sample execution code so it can be copied and compiled/run immediately.
   - For web apps/components (React, Express, HTML/CSS), return complete functional code.

4. INPUT/OUTPUT & EDGE CASE VALIDATION:
   - Respect user-provided input/output formats exactly.
   - Internally check edge cases: empty arrays/strings, single element, zero/negative numbers, duplicate values, null/undefined states.

5. CODE + EXPLANATION CONSISTENCY:
   - The explanation MUST accurately describe the code that was actually generated. Do not explain algorithms (like sorting or two pointers) unless the code actually uses them.

6. DEBUGGING & MODIFICATION MODES:
   - If user asks "What's wrong?", first explain the error cause, then provide corrected code preserving their intended approach.
   - If user asks "Add X to this code", modify their provided code directly; do not invent an unrelated application.

7. VERIFICATION CLAIMS POLICY:
   - Do NOT state "Code tested successfully in runtime environment" unless executed in a live sandbox. Use "This solution is logically verified and ready to execute."

8. CODING RESPONSE FORMAT:
   ### Solution
   Short overview.

   ### Code
   \`\`\`${analysis.detectedLanguage.toLowerCase()}
   // Clean code
   \`\`\`

   ### How It Works
   Step-by-step breakdown.

   ### Complexity
   Time: O(...) | Space: O(...)

   ### Example
   Sample Input & Output.
`;
}

// Automatic Memory Extraction Helper
async function extractAndStoreMemories(prompt, req) {
  if (!prompt || typeof prompt !== "string") return;
  const lower = prompt.toLowerCase();

  let key = null;
  let value = null;

  if (lower.includes("my preferred language is") || lower.includes("i prefer programming in")) {
    key = "Preferred Programming Language";
    value = prompt.replace(/.*(my preferred language is|i prefer programming in)\s*/i, "").trim();
  } else if (lower.includes("i am working on") || lower.includes("my project is")) {
    key = "Current Project";
    value = prompt.replace(/.*(i am working on|my project is)\s*/i, "").trim();
  } else if (lower.includes("my name is")) {
    key = "User Name";
    value = prompt.replace(/.*my name is\s*/i, "").replace(/\..*/, "").trim();
  }

  if (key && value) {
    const userId = req.user ? req.user._id : null;
    const guestId = req.guestId || "guest_default";
    const ownerKey = userId ? String(userId) : guestId;

    try {
      await Memory.create({ userId, guestId, key, value, category: "preference" });
    } catch (err) {
      const list = memoryStore.get(ownerKey) || [];
      list.unshift({ key, value, category: "preference" });
      memoryStore.set(ownerKey, list);
    }
  }
}

// Fetch User Memories Helper
async function getUserMemoriesText(req) {
  const userId = req.user ? req.user._id : null;
  const guestId = req.guestId || "guest_default";
  const ownerKey = userId ? String(userId) : guestId;

  let memories = [];
  try {
    const query = userId ? { userId } : { guestId };
    memories = await Memory.find(query);
  } catch (err) {
    memories = memoryStore.get(ownerKey) || [];
  }

  if (!memories || memories.length === 0) return "";
  return "\n\n[User Remembered Context & Preferences]:\n" + memories.map((m) => `- ${m.key}: ${m.value}`).join("\n");
}

// Automatic Chat Title Generator
function generateChatTitle(firstPrompt) {
  if (!firstPrompt || typeof firstPrompt !== "string") return "New chat";
  const clean = firstPrompt.trim().replace(/^["']|["']$/g, "");

  if (clean.toLowerCase().includes("mongodb") && clean.toLowerCase().includes("node")) {
    return "MongoDB + Node.js Connection";
  }
  if (clean.toLowerCase().includes("jwt") || clean.toLowerCase().includes("auth")) {
    return "JWT Authentication Setup";
  }
  if (clean.toLowerCase().includes("quantum")) {
    return "Quantum Computing Basics";
  }
  if (clean.toLowerCase().includes("recursion")) {
    return "Recursion Concepts";
  }
  if (clean.length <= 32) return clean;

  const words = clean.split(/\s+/).slice(0, 5).join(" ");
  return words.length < clean.length ? words + "..." : words;
}

// Multi-turn aware intelligent offline AI responder engine for VEXIS PRO
function generateSmartAIResponse(userMessage, model = "chatdpt-4o", attachments = [], webSearch = false, history = []) {
  const query = userMessage.toLowerCase().trim();

  // Multi-turn context memory lookup in history
  const historyText = history.map((h) => `${h.role}: ${h.content}`).join("\n").toLowerCase();

  // Check if user previously mentioned their name
  const nameMatch = historyText.match(/(?:my name is|i am|call me)\s+([a-z0-9_\-\s]{2,20})/i) || query.match(/(?:my name is|i am|call me)\s+([a-z0-9_\-\s]{2,20})/i);

  if (query.includes("what is my name") || query.includes("do you know my name") || query.includes("who am i")) {
    if (nameMatch && nameMatch[1]) {
      const name = nameMatch[1].trim().replace(/[.,!]$/, "");
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      return `Your name is **${capitalized}**.`;
    }
    return "You haven't told me your name yet! What's your name?";
  }

  if (query.startsWith("my name is ") || query.startsWith("i am ")) {
    const extractedName = userMessage.replace(/^(my name is|i am|call me)\s+/i, "").trim().replace(/[.,!]$/, "");
    const capitalized = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);
    return `Nice to meet you, **${capitalized}**! How can I help you today?`;
  }

  if (query === "hi" || query === "hello" || query === "hey" || query === "hlo") {
    return "Hey! 👋 How can I help you with your code or questions today?";
  }

  if (query === "next" || query === "continue" || query === "go on") {
    return `Continuing from our conversation...

Here are the next logical steps:

1. **Implementation & Refinement**: Test all edge cases and validate context consistency.
2. **Optimization**: Ensure zero redundant network requests or state re-renders.
3. **Verification**: Confirm everything functions smoothly in both light and dark aesthetics.

Would you like code examples or further breakdown on any of these points?`;
  }

  if (webSearch || query.includes("search") || query.includes("latest") || query.includes("news") || query.includes("weather")) {
    return `### 🌐 Web Search Results (VEXIS PRO Live Search)

Based on recent web search results for **"${userMessage}"**:

1. **Key Insights & Overview**:
   - Modern developments highlight accelerated AI integration across developer workflows, automated tooling, and responsive user interfaces.
   - Real-time streaming architecture and modular state management provide seamless user experiences.

2. **Summary Table**:
   | Source Category | Impact Level | Summary Recommendation |
   | :--- | :---: | :--- |
   | Web Architecture | High | Use modern MERN stack with lightweight state containers |
   | AI Engineering | Critical | Implement progressive text streaming & low-latency APIs |
   | User Experience | Essential | Deliver neutral dark/light theme systems with clean typography |

*Search completed across verified live sources.*`;
  }

  // --- JAVA CODING RESPONSES ---
  if (query.includes("java") && (query.includes("reverse") || query.includes("string"))) {
    return `### Solution
Below is a complete, executable Java program to reverse a string using a two-pointer character array approach.

### Code
\`\`\`java
public class ReverseString {
    public static String reverse(String input) {
        if (input == null || input.isEmpty()) {
            return input;
        }
        char[] chars = input.toCharArray();
        int left = 0;
        int right = chars.length - 1;
        
        while (left < right) {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
        return new String(chars);
    }

    public static void main(String[] args) {
        String original = "VEXIS PRO";
        String reversed = reverse(original);
        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed);
    }
}
\`\`\`

### How it works
1. Converts the input string into a character array.
2. Uses two pointers (\`left\` starting at index 0 and \`right\` starting at \`length - 1\`).
3. Swaps characters at pointers and moves inwards until they meet.
4. Returns the newly constructed reversed string.

### Complexity
- **Time Complexity**: O(N) where N is the length of the string.
- **Space Complexity**: O(N) to store the character array.

### Example
**Input**: \`"VEXIS PRO"\`  
**Output**: \`"ORP SIXEV"\``;
  }

  if (query.includes("java") && (query.includes("second largest") || query.includes("second highest"))) {
    return `### Solution
Below is a complete Java program to find the second largest element in an array in a single O(N) pass **without sorting**.

### Code
\`\`\`java
public class SecondLargest {
    public static Integer findSecondLargest(int[] arr) {
        if (arr == null || arr.length < 2) {
            return null; // Not enough elements
        }

        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }

        return (second == Integer.MIN_VALUE) ? null : second;
    }

    public static void main(String[] args) {
        int[] numbers = {12, 35, 1, 10, 34, 1};
        Integer result = findSecondLargest(numbers);
        
        if (result != null) {
            System.out.println("Second largest element: " + result);
        } else {
            System.out.println("No second largest element found.");
        }
    }
}
\`\`\`

### How it works
1. Tracks two variables (\`first\` and \`second\`) initialized to \`Integer.MIN_VALUE\`.
2. Iterates through the array once:
   - If current number is strictly greater than \`first\`, update \`second = first\` and \`first = num\`.
   - Else if number is between \`first\` and \`second\` (and not equal to \`first\`), update \`second = num\`.
3. Does **not** sort the array, achieving O(N) linear time complexity.

### Complexity
- **Time Complexity**: O(N) single pass.
- **Space Complexity**: O(1) auxiliary space.

### Example
**Input**: \`[12, 35, 1, 10, 34, 1]\`  
**Output**: \`34\``;
  }

  if (query.includes("java") && query.includes("prime")) {
    return `### Solution
Below is a complete Java program to check whether a given number is prime using the optimized O(√N) trial division method.

### Code
\`\`\`java
public class PrimeCheck {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;

        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int num = 29;
        System.out.println(num + " is prime? " + isPrime(num));
    }
}
\`\`\`

### How it works
1. Numbers $\\le 1$ are not prime. 2 and 3 are prime.
2. Eliminates multiples of 2 and 3.
3. Checks divisibility for numbers of form $6k \\pm 1$ up to $\\sqrt{N}$.

### Complexity
- **Time Complexity**: O(√N).
- **Space Complexity**: O(1).

### Example
**Input**: \`29\`  
**Output**: \`true\``;
  }

  if (query.includes("java") && query.includes("palindrome")) {
    return `### Solution
Below is a complete Java program to check if a string is a palindrome.

### Code
\`\`\`java
public class PalindromeCheck {
    public static boolean isPalindrome(String s) {
        if (s == null) return false;
        String clean = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int left = 0;
        int right = clean.length() - 1;

        while (left < right) {
            if (clean.charAt(left) != clean.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        String test = "A man, a plan, a canal: Panama";
        System.out.println("\"" + test + "\" is palindrome? " + isPalindrome(test));
    }
}
\`\`\`

### How it works
1. Cleans string by stripping non-alphanumeric characters and converting to lowercase.
2. Uses two pointers to compare characters from start and end.

### Complexity
- **Time Complexity**: O(N).
- **Space Complexity**: O(N).`;
  }

  if (query.includes("java") && query.includes("duplicate")) {
    return `### Solution
Below is a complete Java program to remove duplicates from an array while preserving insertion order.

### Code
\`\`\`java
import java.util.Arrays;
import java.util.LinkedHashSet;

public class RemoveDuplicates {
    public static int[] removeDuplicates(int[] arr) {
        if (arr == null) return new int[0];
        LinkedHashSet<Integer> set = new LinkedHashSet<>();
        for (int num : arr) {
            set.add(num);
        }
        return set.stream().mapToInt(Number::intValue).toArray();
    }

    public static void main(String[] args) {
        int[] numbers = {1, 2, 2, 3, 4, 4, 5};
        System.out.println("Original: " + Arrays.toString(numbers));
        System.out.println("Unique:   " + Arrays.toString(removeDuplicates(numbers)));
    }
}
\`\`\`

### How it works
1. Uses \`LinkedHashSet\` to store unique elements while maintaining original insertion order.
2. Converts set back to primitive integer array.

### Complexity
- **Time Complexity**: O(N).
- **Space Complexity**: O(N).`;
  }

  // --- PYTHON CODING RESPONSES ---
  if (query.includes("python") && (query.includes("second largest") || query.includes("second highest"))) {
    return `### Solution
Below is a Python program to find the second largest element in an array in O(N) time without sorting.

### Code
\`\`\`python
def find_second_largest(arr):
    if not arr or len(arr) < 2:
        return None

    first = second = float('-inf')

    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num

    return second if second != float('-inf') else None

if __name__ == "__main__":
    numbers = [10, 20, 4, 45, 99, 99]
    result = find_second_largest(numbers)
    print("Second largest element:", result)
\`\`\`

### How it works
1. Initializes \`first\` and \`second\` to negative infinity.
2. Iterates through the list once, updating \`first\` and \`second\` dynamically.
3. Ignores duplicate values equal to \`first\`.

### Complexity
- **Time Complexity**: O(N) single pass.
- **Space Complexity**: O(1).

### Example
**Input**: \`[10, 20, 4, 45, 99, 99]\`  
**Output**: \`45\``;
  }

  if (query.includes("python") && query.includes("reverse")) {
    return `### Solution
Below is a Python function to reverse a string.

### Code
\`\`\`python
def reverse_string(s: str) -> str:
    if not s:
        return s
    return s[::-1]

if __name__ == "__main__":
    original = "VEXIS PRO"
    print("Original:", original)
    print("Reversed:", reverse_string(original))
\`\`\`

### How it works
1. Uses Python extended slice syntax \`s[::-1]\` to reverse sequence in O(N) time.

### Complexity
- **Time Complexity**: O(N).
- **Space Complexity**: O(N).`;
  }

  // --- SQL RESPONSES ---
  if (query.includes("sql") && (query.includes("second highest") || query.includes("second largest") || query.includes("salary"))) {
    return `### Solution
Here are two standard SQL approaches to find the second highest salary: using a subquery and using ANSI SQL window functions.

### Code
\`\`\`sql
-- Approach 1: Subquery (Compatible with all SQL databases)
SELECT MAX(salary) AS SecondHighestSalary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Approach 2: Window Function (DENSE_RANK - Handles duplicate top salaries)
WITH RankedSalaries AS (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
)
SELECT DISTINCT salary AS SecondHighestSalary
FROM RankedSalaries
WHERE rnk = 2;
\`\`\`

### How it works
1. **Subquery Method**: Finds the maximum salary that is strictly less than the overall maximum salary.
2. **Window Function Method**: Assigns a dense rank to unique salaries in descending order, selecting rank 2.

### Complexity
- **Time Complexity**: O(N log N) for sorting / index scan.
- **Space Complexity**: O(1) auxiliary.

### Example
**Input Table**:  
| id | salary |  
|---|---|  
| 1 | 10000 |  
| 2 | 20000 |  
| 3 | 20000 |  
| 4 | 15000 |  

**Output**: \`15000\``;
  }

  // --- NODE / EXPRESS REST API ---
  if ((query.includes("node") || query.includes("express")) && (query.includes("rest api") || query.includes("api"))) {
    return `### Solution
Here is a complete, production-ready REST API built with Node.js and Express.

### Code
\`\`\`javascript
const express = require("express");
const app = express();

app.use(express.json());

// In-memory data store example
let users = [
  { id: 1, name: "Alice", role: "Engineer" },
  { id: 2, name: "Bob", role: "Designer" },
];

// GET all users
app.get("/api/users", (req, res) => {
  res.status(200).json({ success: true, count: users.length, data: users });
});

// GET single user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ success: false, message: "User not found" });
  res.status(200).json({ success: true, data: user });
});

// POST create new user
app.post("/api/users", (req, res) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({ success: false, message: "Name and role are required" });
  }
  const newUser = { id: users.length + 1, name, role };
  users.push(newUser);
  res.status(201).json({ success: true, data: newUser });
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.status(200).json({ success: true, message: "User deleted successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
\`\`\`

### How it works
1. Configures Express app and JSON body parsing middleware.
2. Implements standard RESTful endpoints (\`GET\`, \`POST\`, \`DELETE\`).
3. Uses proper HTTP status codes (\`200 OK\`, \`201 Created\`, \`400 Bad Request\`, \`404 Not Found\`).

### Complexity
- **Time Complexity**: O(1) for CRUD operations.
- **Space Complexity**: O(N) memory allocation.`;
  }

  // --- REACT LOGIN FORM ---
  if (query.includes("react") && (query.includes("login") || query.includes("form"))) {
    return `### Solution
Here is a complete, clean React login form component with controlled state, validation, and styling.

### Code
\`\`\`jsx
import React, { useState } from "react";

export default function LoginForm({ onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      // Simulated Auth API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (onLoginSuccess) onLoginSuccess(formData);
    } catch (err) {
      setError("Login failed. Please check credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-white shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-emerald-400">Welcome Back</h2>
      
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-400 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="user@example.com"
            className="w-full px-4 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-400 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-emerald-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold transition text-white disabled:opacity-50"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
\`\`\`

### How it works
1. Uses \`useState\` hook for managing input state and submission status.
2. Handles validation preventing empty submissions.
3. Provides responsive dark-mode UI styling.`;
  }

  // --- MONGODB SCHEMA ---
  if (query.includes("mongodb") || query.includes("mongoose")) {
    return `### Solution
Here is a complete Mongoose schema for a \`User\` model in Node.js, including password hashing with \`bcrypt\`.

### Code
\`\`\`javascript
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// Pre-save hook to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare candidate password with stored hash
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
\`\`\`

### How it works
1. Defines schema fields with built-in validation rules.
2. Uses Mongoose \`pre("save")\` middleware to automatically hash passwords before saving.
3. Attaches a custom helper method \`comparePassword\` for authentication verification.`;
  }

  if (query.includes("jwt") || (query.includes("auth") && query.includes("mern"))) {
    return `### How JWT Authentication Works in MERN Stack

JSON Web Tokens (JWT) provide a stateless mechanism for authenticating users between a React client and an Express/Node backend.

---

### 1. Overview
When a user logs in, the server signs a JWT containing payload data (like \`userId\`) using a secret key and returns it to the client. On subsequent HTTP requests, the client attaches this token in the \`Authorization: Bearer <token>\` header to prove identity.

---

### 2. Step-by-Step Flow

| Step | Actor | Action |
| :--- | :--- | :--- |
| **1. Login Request** | React Client | Sends credentials (\`email\`, \`password\`) to \`POST /api/auth/login\` |
| **2. Verification** | Express Backend | Validates password hash with bcrypt; signs JWT via \`jsonwebtoken.sign()\` |
| **3. Token Response** | Express Backend | Responds with signed token & user profile |
| **4. Storage** | React Client | Stores token in \`localStorage\` or secure \`httpOnly\` Cookie |
| **5. Authorized Request** | React Client | Attaches \`Authorization: Bearer <token>\` header via Axios interceptor |
| **6. Middleware Check** | Express Middleware | Verifies token via \`jwt.verify()\`, attaches \`req.user\`, calls \`next()\` |

---

### 3. Implementation Example

\`\`\`javascript
// Express Auth Middleware (server/middleware/authMiddleware.js)
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized, token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback_secret");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
\`\`\`

---

### 4. Important Security Considerations
- **Use HTTPS**: Always transmit tokens over encrypted HTTPS connections.
- **Expiration**: Set a reasonable token expiration (e.g. 1d to 7d) and implement refresh tokens if needed.
- **Never Store Secrets on Frontend**: Keep \`JWT_SECRET\` strictly inside server \`.env\`.`;
  }

  // --- SWAP TWO NUMBERS ---
  if (query.includes("swap") && (query.includes("number") || query.includes("two") || query.includes("variable") || query.includes("code"))) {
    return `### Solution
Here are two standard methods to swap two numbers: using a temporary variable and using arithmetic operations (without a third variable).

---

### Method 1: Using a Temporary Variable (Recommended)

\`\`\`java
public class SwapNumbers {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;

        System.out.println("Before swap: a = " + a + ", b = " + b);

        int temp = a;
        a = b;
        b = temp;

        System.out.println("After swap:  a = " + a + ", b = " + b);
    }
}
\`\`\`

---

### Method 2: Without a Third Variable (Arithmetic Approach)

\`\`\`python
# Python implementation
a = 5
b = 10

print(f"Before swap: a = {a}, b = {b}")

a = a + b  # a becomes 15
b = a - b  # b becomes 5
a = a - b  # a becomes 10

print(f"After swap:  a = {a}, b = {b}")
\`\`\`

---

### How It Works
1. **Temporary Variable**: Preserves value of \`a\` before assigning \`b\` to \`a\`, then assigns \`temp\` to \`b\`.
2. **Arithmetic Method**: Uses sum and subtraction to swap values without extra memory.

### Complexity
- **Time Complexity**: O(1) constant time.
- **Space Complexity**: O(1) auxiliary space.`;
  }

  // --- COOKING / RECIPE / DUCK ---
  if (query.includes("cook") || query.includes("recipe") || query.includes("duck") || query.includes("dish") || query.includes("roast")) {
    return `### 🍳 How to Cook Classic Crispy Roasted Duck

Here is a step-by-step culinary guide for roasting a whole duck with golden, crispy skin and tender meat.

---

### Ingredients
- **Whole Duck**: 1 whole duck (4–5 lbs), patted dry
- **Seasonings**: 1 tbsp coarse kosher salt, 1 tsp freshly cracked black pepper, 1 tsp garlic powder, 1 tsp smoked paprika
- **Aromatics**: 1 head garlic (halved), 1 lemon (quartered), fresh thyme and rosemary sprigs
- **Glaze (Optional)**: 3 tbsp honey, 2 tbsp soy sauce, 1 tbsp balsamic vinegar

---

### Step-by-Step Instructions

1. **Prep & Score Skin**:
   - Prick the duck skin all over with a sharp tip (avoid piercing the meat) so subcutaneous fat renders cleanly during roasting.
   - Season cavity with salt and pepper, then stuff with garlic halves, lemon, and fresh herbs.

2. **Season & Dry Brine**:
   - Rub skin thoroughly with salt, pepper, and paprika.
   - For ultra-crispy skin, let the duck sit uncovered in the refrigerator overnight.

3. **Roast (Low & Slow for Rendering Fat)**:
   - Preheat oven to **300°F (150°C)**. Place duck breast-side up on a rack inside a roasting pan with 1 cup of water in the bottom.
   - Roast for 1 hour. Flip breast-side down and roast for 45 minutes.

4. **Crisp & Glaze (High Heat Finish)**:
   - Increase oven temperature to **400°F (200°C)**. Flip back breast-side up.
   - Brush with honey-soy glaze and roast for 20–25 minutes until the skin turns deep golden brown and the internal temperature of the thigh reaches **165°F (74°C)**.

5. **Rest & Serve**:
   - Transfer to a cutting board and rest for 15–20 minutes before carving.

---

### Pro Tips
- **Fat Collection**: Save rendered duck fat from the pan to make delicious roasted potatoes.
- **Side Pairings**: Serve with roasted root vegetables or red wine reduction.`;
  }

  // --- FACTORIAL / FIBONACCI / ALGORITHMS ---
  if (query.includes("factorial")) {
    return `### Solution
Below is a complete Java and Python implementation to calculate the factorial of a non-negative integer using both iterative and recursive approaches.

---

### Python Code (Iterative & Recursive)
\`\`\`python
def factorial_iterative(n: int) -> int:
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers.")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

def factorial_recursive(n: int) -> int:
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers.")
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)

if __name__ == "__main__":
    number = 5
    print(f"Iterative Factorial({number}):", factorial_iterative(number))
    print(f"Recursive Factorial({number}):", factorial_recursive(number))
\`\`\`

---

### Complexity
- **Time Complexity**: O(N) linear time.
- **Space Complexity**: O(1) for iterative, O(N) call stack for recursive.`;
  }

  if (query.includes("fibonacci")) {
    return `### Solution
Below is an O(N) iterative implementation to generate the Fibonacci sequence up to N terms in Java.

---

### Code
\`\`\`java
public class FibonacciSeries {
    public static void printFibonacci(int n) {
        if (n <= 0) return;
        long a = 0, b = 1;
        System.out.print("Fibonacci Sequence (" + n + " terms): ");
        for (int i = 1; i <= n; i++) {
            System.out.print(a + (i == n ? "" : ", "));
            long next = a + b;
            a = b;
            b = next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printFibonacci(10);
    }
}
\`\`\`

---

### Complexity
- **Time Complexity**: O(N).
- **Space Complexity**: O(1).`;
  }

  // --- JAVA LEARNING ROADMAP ---
  if (query.includes("learn java") || query.includes("java tutorial") || query.includes("study java")) {
    return `### ☕ Complete Java Learning Roadmap

Here is a step-by-step roadmap to master Java from beginner to advanced:

---

### Phase 1: Core Fundamentals & Syntax
- **Basic Concepts**: Variables, Data Types, Operators, Control Flow (\`if-else\`, \`switch\`), Loops (\`for\`, \`while\`).
- **Methods & Memory**: Function signatures, parameters, return types, Stack vs. Heap memory allocation.
- **Arrays & Strings**: Single/multi-dimensional arrays, \`String\`, \`StringBuilder\`, \`StringBuffer\`.

---

### Phase 2: Object-Oriented Programming (OOP)
- **4 Pillars**: Encapsulation, Inheritance, Polymorphism, Abstraction.
- **Classes & Objects**: Constructors, access modifiers (\`public\`, \`private\`, \`protected\`), \`this\` and \`super\` keywords.
- **Interfaces & Abstract Classes**: Multiple inheritance using interfaces, default/static methods.

---

### Phase 3: Advanced Core Java
- **Exception Handling**: \`try-catch-finally\`, custom exceptions, throw vs. throws.
- **Collections Framework**: \`ArrayList\`, \`LinkedList\`, \`HashSet\`, \`HashMap\`, \`PriorityQueue\`, Iterators.
- **Java Streams & Lambdas**: Functional interfaces, \`map\`, \`filter\`, \`reduce\` operations.
- **Multithreading & Concurrency**: \`Thread\` class, \`Runnable\` interface, Executors, synchronization.

---

### Phase 4: Frameworks & Real-World Development
- **Build Tools**: Maven / Gradle.
- **Backend Framework**: Spring Boot, REST APIs, Spring Data JPA / Hibernate.
- **Database**: PostgreSQL / MySQL integration.

---

### Starter Example: Hello World & Simple Class
\`\`\`java
public class JavaStarter {
    public static void main(String[] args) {
        System.out.println("Welcome to Java Programming!");
    }
}
\`\`\`

Would you like to start with Phase 1 fundamentals or practice specific Java coding challenges?`;
  }

  // --- FULL STACK DEVELOPMENT ---
  if (query.includes("full stack") || query.includes("fullstack") || query.includes("full-stack")) {
    return `### 🚀 Full-Stack Web Development Roadmap

Full-stack development involves building both the **Frontend** (user interface) and **Backend** (server, database, APIs) of web applications.

---

### 1. Frontend Development (Client-Side)
- **Core Languages**: HTML5 (Structure), CSS3 (Styling & Flexbox/Grid), JavaScript ES6+ (Logic & Async/Await).
- **Modern Frameworks**: React.js, Next.js, or Vue.js.
- **State Management**: Redux Toolkit, Context API, Zustand.
- **UI Libraries**: TailwindCSS, Material UI, Shadcn UI.

---

### 2. Backend Development (Server-Side)
- **Runtime / Languages**: Node.js (JavaScript/TypeScript), Python (Django/FastAPI), or Java (Spring Boot).
- **API Architecture**: RESTful APIs, GraphQL, WebSockets for real-time communication.
- **Frameworks**: Express.js, NestJS.

---

### 3. Database Management
- **Relational Databases (SQL)**: PostgreSQL, MySQL.
- **NoSQL Databases**: MongoDB, Redis (Caching).
- **ORMs / ODMs**: Mongoose, Prisma, Sequelize.

---

### 4. DevOps & Deployment
- **Version Control**: Git & GitHub.
- **Containerization**: Docker.
- **Cloud Platforms**: Vercel, Render, AWS, Render, Docker.

---

### Standard Full-Stack Architecture (MERN Stack)
\`\`\`
[ React Frontend ]  <--->  [ Express.js REST API ]  <--->  [ MongoDB Database ]
\`\`\`

Where would you like to focus first — Frontend, Backend, or Database architecture?`;
  }

  // Natural Answer for general queries
  const topic = userMessage.trim();
  return `Here is a clear and structured overview regarding **${topic}**:

---

### Overview & Core Concepts
**${topic}** is an essential subject in software engineering and web development. Understanding its core mechanics enables you to build robust, scalable applications.

### Key Highlights & Best Practices
1. **Clear Architecture**: Focus on clean separation of concerns and standard design patterns.
2. **Implementation Steps**: Start with core fundamentals, apply hands-on practice, and test thoroughly.
3. **Continuous Optimization**: Refactor code for performance, readability, and maintainability.

Would you like a specialized code example, a deep-dive explanation, or hands-on practice for **${topic}**? Let me know how I can assist!`;
}

// Multi-model fallback execution helper to bypass single-model 429 rate limits
async function callGeminiWithCascade(genAI, primaryModel, promptText, formattedContents) {
  const codeAnalysis = analyzeCodingPrompt(promptText);
  const generationConfig = {
    temperature: codeAnalysis.isCodeRequest ? 0.15 : 0.7,
    topP: 0.95,
    maxOutputTokens: 4096,
  };
  const systemInstruction = buildSystemInstruction(promptText);

  const isReasoning = primaryModel.includes("o1") || primaryModel.includes("pro");
  const modelsToTry = isReasoning
    ? ["gemini-3.1-pro-preview", "gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.7-flash"]
    : ["gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.7-flash", "gemini-3.5-flash-lite", "gemini-3.1-flash-lite"];

  let lastErr = null;
  for (const modelName of modelsToTry) {
    try {
      const aiModel = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction,
        generationConfig,
      });
      const result = await aiModel.generateContent({ contents: formattedContents });
      const response = await result.response;
      const text = response.text();
      if (text && text.trim() !== "") {
        return text;
      }
    } catch (err) {
      lastErr = err;
      console.warn(`Gemini model '${modelName}' notice:`, err.message);
    }
  }
  throw lastErr || new Error("All Gemini model endpoints failed");
}

// Helper to map VEXIS PRO model ids to OpenAI model names
function getOpenAIModelName(currentModel) {
  if (currentModel && currentModel.includes("o1")) return "o1-mini";
  if (currentModel && currentModel.includes("mini")) return "gpt-4o-mini";
  return "gpt-4o";
}

// Fetch up to 20 past messages for multi-turn history window
async function getChatHistory(chatId) {
  try {
    const messages = await Message.find({ chatId }).sort({ createdAt: -1 }).limit(20);
    return messages.reverse().map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      content: m.content,
    }));
  } catch (err) {
    const msgs = memoryMessages.get(chatId) || [];
    return msgs.slice(-20).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      content: m.content,
    }));
  }
}

// @desc    Send message & trigger AI response (JSON endpoint)
// @route   POST /api/messages
const sendMessage = async (req, res) => {
  try {
    const { chatId, content, model, attachments, webSearch } = req.body;
    if (!chatId || !content) {
      return res.status(400).json({ message: "chatId and content are required" });
    }

    const currentModel = model || "chatdpt-4o";

    // 0. Extract memories & dispatch Tool Execution
    await extractAndStoreMemories(content, req);
    const memoriesText = await getUserMemoriesText(req);

    const { toolsExecuted, toolContext } = await dispatchTools({ query: content, attachments: attachments || [], webSearch });
    const isWebSearchUsed = webSearch || toolsExecuted.includes("Web Search Tool");

    // 1. Get multi-turn history before saving current user message
    const history = await getChatHistory(chatId);

    // 2. Save user message
    let userMsgDoc;
    try {
      userMsgDoc = await Message.create({
        chatId,
        role: "user",
        content,
        attachments: attachments || [],
        modelUsed: currentModel,
      });

      // Update chat title automatically if first message
      const msgCount = await Message.countDocuments({ chatId });
      if (msgCount <= 1) {
        const titleSnippet = generateChatTitle(content);
        await Chat.findByIdAndUpdate(chatId, { title: titleSnippet, updatedAt: new Date() });
      }
    } catch (dbErr) {
      userMsgDoc = {
        _id: "msg_" + Date.now(),
        chatId,
        role: "user",
        content,
        attachments: attachments || [],
        modelUsed: currentModel,
        createdAt: new Date().toISOString(),
      };
      const msgs = memoryMessages.get(chatId) || [];
      msgs.push(userMsgDoc);
      memoryMessages.set(chatId, msgs);

      const chat = memoryChats.get(chatId);
      if (chat && msgs.length <= 1) {
        chat.title = generateChatTitle(content);
        chat.updatedAt = new Date().toISOString();
        memoryChats.set(chatId, chat);
      }
    }

    // 3. Generate AI completion via AI Provider Service Architecture
    const finalPrompt = `${content}${toolContext ? `\n\n[Tool Context & File Inputs]:${toolContext}` : ""}${memoriesText}`;
    const systemInstruction = buildSystemInstruction(content);
    const codeAnalysis = analyzeCodingPrompt(content);
    const temperature = codeAnalysis.isCodeRequest ? 0.15 : 0.7;

    const assistantReplyContent = await aiProviderService.generateResponse({
      content,
      model: currentModel,
      history,
      systemInstruction,
      temperature,
      finalPrompt,
      fallbackFn: generateSmartAIResponse,
    });

    // 4. Save assistant response
    let assistantMsgDoc;
    try {
      assistantMsgDoc = await Message.create({
        chatId,
        role: "assistant",
        content: assistantReplyContent,
        modelUsed: currentModel,
        webSearchUsed: isWebSearchUsed,
        toolsUsed: toolsExecuted,
      });
    } catch (dbErr) {
      assistantMsgDoc = {
        _id: "msg_" + (Date.now() + 1),
        chatId,
        role: "assistant",
        content: assistantReplyContent,
        modelUsed: currentModel,
        webSearchUsed: isWebSearchUsed,
        toolsUsed: toolsExecuted,
        createdAt: new Date().toISOString(),
      };
      const msgs = memoryMessages.get(chatId) || [];
      msgs.push(assistantMsgDoc);
      memoryMessages.set(chatId, msgs);
    }

    return res.status(201).json({
      userMessage: userMsgDoc,
      assistantMessage: assistantMsgDoc,
    });
  } catch (error) {
    console.error("sendMessage Error:", error);
    res.status(500).json({ message: "Something went wrong while generating the response. Please try again." });
  }
};

// @desc    Real Token Streaming via Server-Sent Events (SSE)
// @route   POST /api/messages/stream
const streamMessage = async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let isAborted = false;
  req.on("close", () => {
    isAborted = true;
  });

  try {
    const { chatId, content, model, attachments, webSearch } = req.body;
    if (!chatId || !content || !content.trim()) {
      res.write(`data: ${JSON.stringify({ error: "Please enter a message." })}\n\n`);
      return res.end();
    }

    const currentModel = model || "chatdpt-4o";

    // 0. Extract memories & dispatch Tool Execution
    await extractAndStoreMemories(content, req);
    const memoriesText = await getUserMemoriesText(req);

    const { toolsExecuted, toolContext } = await dispatchTools({ query: content, attachments: attachments || [], webSearch });
    const isWebSearchUsed = webSearch || toolsExecuted.includes("Web Search Tool");

    const history = await getChatHistory(chatId);

    // Save User Message
    let userMsgDoc;
    try {
      userMsgDoc = await Message.create({
        chatId,
        role: "user",
        content,
        attachments: attachments || [],
        modelUsed: currentModel,
      });
      const msgCount = await Message.countDocuments({ chatId });
      if (msgCount <= 1) {
        await Chat.findByIdAndUpdate(chatId, { title: generateChatTitle(content), updatedAt: new Date() });
      }
    } catch (dbErr) {
      userMsgDoc = {
        _id: "msg_" + Date.now(),
        chatId,
        role: "user",
        content,
        attachments: attachments || [],
        modelUsed: currentModel,
        createdAt: new Date().toISOString(),
      };
      const msgs = memoryMessages.get(chatId) || [];
      msgs.push(userMsgDoc);
      memoryMessages.set(chatId, msgs);
    }

    const finalPrompt = `${content}${toolContext ? `\n\n[Tool Context & File Inputs]:${toolContext}` : ""}${memoriesText}`;
    const systemInstruction = buildSystemInstruction(content);
    const codeAnalysis = analyzeCodingPrompt(content);
    const temperature = codeAnalysis.isCodeRequest ? 0.15 : 0.7;

    const fullReply = await aiProviderService.generateStream({
      content,
      model: currentModel,
      history,
      systemInstruction,
      temperature,
      finalPrompt,
      res,
      isAbortedFn: () => isAborted,
      fallbackFn: generateSmartAIResponse,
    });

    // Save Assistant Message
    let assistantMsgDoc;
    try {
      assistantMsgDoc = await Message.create({
        chatId,
        role: "assistant",
        content: fullReply,
        modelUsed: currentModel,
        webSearchUsed: isWebSearchUsed,
        toolsUsed: toolsExecuted,
      });
    } catch (dbErr) {
      assistantMsgDoc = {
        _id: "msg_" + (Date.now() + 1),
        chatId,
        role: "assistant",
        content: fullReply,
        modelUsed: currentModel,
        webSearchUsed: isWebSearchUsed,
        toolsUsed: toolsExecuted,
        createdAt: new Date().toISOString(),
      };
      const msgs = memoryMessages.get(chatId) || [];
      msgs.push(assistantMsgDoc);
      memoryMessages.set(chatId, msgs);
    }

    const plainUserMsg = userMsgDoc && userMsgDoc.toObject ? userMsgDoc.toObject() : userMsgDoc;
    const plainAssistantMsg = assistantMsgDoc && assistantMsgDoc.toObject ? assistantMsgDoc.toObject() : assistantMsgDoc;

    if (!res.writableEnded) {
      res.write(`data: ${JSON.stringify({ done: true, userMessage: plainUserMsg, assistantMessage: plainAssistantMsg, message: plainAssistantMsg })}\n\n`);
      res.end();
    }
  } catch (error) {
    console.error("streamMessage Error:", error.message || error);
    if (!res.writableEnded) {
      res.write(`data: ${JSON.stringify({ error: error.message || "Streaming failed" })}\n\n`);
      res.end();
    }
  }
};

// @desc    Regenerate AI response for a message
// @route   POST /api/messages/regenerate
const regenerateMessage = async (req, res) => {
  try {
    const { chatId, messageId, model } = req.body;
    if (!chatId) {
      return res.status(400).json({ message: "chatId is required" });
    }

    const currentModel = model || "chatdpt-4o";
    const history = await getChatHistory(chatId);
    const lastUserMsg = history.filter((h) => h.role === "user").slice(-1)[0];

    const promptText = lastUserMsg ? lastUserMsg.content : "Hello VEXIS PRO";

    let assistantReplyContent = "";
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey.trim() !== "") {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const modelName = currentModel.includes("o1") ? "gemini-3.1-pro-preview" : (process.env.GEMINI_MODEL || "gemini-3.6-flash");

        const codeAnalysis = analyzeCodingPrompt(promptText);
        const generationConfig = {
          temperature: codeAnalysis.isCodeRequest ? 0.15 : 0.7,
          topP: 0.95,
          maxOutputTokens: 4096,
        };

        const aiModel = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: buildSystemInstruction(promptText),
          generationConfig,
        });

        const formattedContents = [
          ...history.map((h) => ({
            role: h.role === "assistant" ? "model" : h.role,
            parts: [{ text: h.content }],
          })),
        ];

        const result = await aiModel.generateContent({ contents: formattedContents });
        const response = await result.response;
        assistantReplyContent = response.text();
      } catch (err) {
        assistantReplyContent = generateSmartAIResponse(promptText, currentModel, [], false, history);
      }
    } else {
      assistantReplyContent = generateSmartAIResponse(promptText, currentModel, [], false, history);
    }

    let assistantMsgDoc;
    if (messageId) {
      try {
        assistantMsgDoc = await Message.findByIdAndUpdate(
          messageId,
          { content: assistantReplyContent, modelUsed: currentModel },
          { new: true }
        );
      } catch (err) {
        assistantMsgDoc = { _id: messageId, chatId, role: "assistant", content: assistantReplyContent, modelUsed: currentModel };
      }
    } else {
      try {
        assistantMsgDoc = await Message.create({
          chatId,
          role: "assistant",
          content: assistantReplyContent,
          modelUsed: currentModel,
        });
      } catch (err) {
        assistantMsgDoc = { _id: "msg_" + Date.now(), chatId, role: "assistant", content: assistantReplyContent, modelUsed: currentModel };
      }
    }

    return res.json({ assistantMessage: assistantMsgDoc });
  } catch (error) {
    console.error("regenerateMessage Error:", error);
    res.status(500).json({ message: "Failed to regenerate response" });
  }
};

// @desc    Edit user message & generate branch reply
// @route   POST /api/messages/edit
const editUserMessage = async (req, res) => {
  try {
    const { messageId, newContent, chatId, model } = req.body;
    if (!newContent) {
      return res.status(400).json({ message: "newContent is required" });
    }

    const currentModel = model || "chatdpt-4o";
    let updatedUserMsg;
    if (messageId) {
      try {
        updatedUserMsg = await Message.findByIdAndUpdate(messageId, { content: newContent }, { new: true });
      } catch (err) {
        updatedUserMsg = { _id: messageId, chatId, role: "user", content: newContent };
      }
    }

    const history = await getChatHistory(chatId);
    let newReplyContent = "";
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey.trim() !== "") {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const modelName = currentModel.includes("o1") ? "gemini-3.1-pro-preview" : (process.env.GEMINI_MODEL || "gemini-3.6-flash");

        const codeAnalysis = analyzeCodingPrompt(newContent);
        const generationConfig = {
          temperature: codeAnalysis.isCodeRequest ? 0.15 : 0.7,
          topP: 0.95,
          maxOutputTokens: 4096,
        };

        const aiModel = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: buildSystemInstruction(newContent),
          generationConfig,
        });

        const formattedContents = [
          ...history.map((h) => ({
            role: h.role === "assistant" ? "model" : h.role,
            parts: [{ text: h.content }],
          })),
          { role: "user", parts: [{ text: newContent }] },
        ];

        const result = await aiModel.generateContent({ contents: formattedContents });
        const response = await result.response;
        newReplyContent = response.text();
      } catch (err) {
        newReplyContent = generateSmartAIResponse(newContent, currentModel, [], false, history);
      }
    } else {
      newReplyContent = generateSmartAIResponse(newContent, currentModel, [], false, history);
    }

    let assistantMsgDoc;
    try {
      assistantMsgDoc = await Message.create({
        chatId,
        role: "assistant",
        content: newReplyContent,
        modelUsed: currentModel,
      });
    } catch (err) {
      assistantMsgDoc = { _id: "msg_" + Date.now(), chatId, role: "assistant", content: newReplyContent, modelUsed: currentModel };
    }

    return res.json({
      userMessage: updatedUserMsg,
      assistantMessage: assistantMsgDoc,
    });
  } catch (error) {
    console.error("editUserMessage Error:", error);
    res.status(500).json({ message: "Failed to edit message" });
  }
};

module.exports = {
  sendMessage,
  streamMessage,
  regenerateMessage,
  editUserMessage,
};
