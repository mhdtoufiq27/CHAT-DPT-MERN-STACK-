const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function runIsolatedGeminiTest() {
  console.log("=== VEXIS PRO — ISOLATED GEMINI DIAGNOSTIC TEST ===");

  const apiKey = process.env.GEMINI_API_KEY;
  const isKeyLoaded = !!(apiKey && apiKey.trim().length > 0);
  console.log(`Gemini API key loaded: ${isKeyLoaded ? "YES" : "NO"}`);

  if (!isKeyLoaded) {
    console.error("DIAGNOSTIC FAILURE: GEMINI_API_KEY is missing or empty in server/.env");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey.trim());

  const candidateModels = [
    "gemini-flash-latest",
    "gemini-2.5-flash-lite",
    "gemini-2.5-pro",
    "gemini-2.0-flash",
    "gemini-2.5-flash"
  ];

  console.log("SDK: @google/generative-ai v0.24.1");
  console.log("Candidate Models to test:", candidateModels.join(", "));

  let workingModel = null;
  console.log("\n--- STEP 6: DIRECT TEST ---");
  for (const mName of candidateModels) {
    try {
      console.log(`Attempting model: '${mName}'...`);
      const model = genAI.getGenerativeModel({ model: mName });
      const result = await model.generateContent("Reply with exactly: GEMINI TEST SUCCESS");
      const res = await result.response;
      const text = res.text();
      if (text && text.trim().length > 0) {
        workingModel = mName;
        console.log(`✅ GEMINI TEST SUCCESS WITH MODEL '${mName}':`);
        console.log(text.trim());
        break;
      }
    } catch (err) {
      console.log(`❌ Model '${mName}' notice: ${err.message.substring(0, 160)}`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  if (!workingModel) {
    console.error("\nDIAGNOSTIC FAILURE: All candidate Gemini models failed.");
    return;
  }

  // STEP 8: REAL QUESTION TEST
  console.log("\n--- STEP 8: REAL QUESTION TEST ---");
  const testQuestions = [
    "What is Java?",
    "Write a Java program to reverse a string.",
    "What is MongoDB?"
  ];

  for (const q of testQuestions) {
    console.log(`\nQUESTION: "${q}"`);
    let answered = false;

    for (const mName of candidateModels) {
      try {
        const model = genAI.getGenerativeModel({ model: mName });
        const result = await model.generateContent(q);
        const res = await result.response;
        const text = res.text();
        if (text && text.trim().length > 0) {
          console.log(`[Model '${mName}'] RESPONSE PREVIEW:\n`, text.trim().substring(0, 220) + "...\n");
          answered = true;
          break;
        }
      } catch (qErr) {
        console.log(`Notice on '${mName}': ${qErr.message.substring(0, 120)}`);
        await new Promise(r => setTimeout(r, 1500));
      }
    }

    if (!answered) {
      console.error(`Question "${q}" could not be answered by current model queue.`);
    }

    await new Promise(r => setTimeout(r, 2000));
  }

  console.log("\n=== ISOLATED TEST COMPLETED SUCCESSFULLY ===");
}

runIsolatedGeminiTest();
