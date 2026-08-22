const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function runMinimalTest() {
  console.log("=== MINIMAL GEMINI API KEY RESPONSE TEST ===");

  const rawKey = process.env.GEMINI_API_KEY;
  const isKeyLoaded = !!(rawKey && rawKey.trim().length > 0);

  console.log(`GEMINI_API_KEY detected: ${isKeyLoaded ? "YES" : "NO"}`);

  if (!isKeyLoaded) {
    console.log("GEMINI API = NOT WORKING");
    console.log("Reason: GEMINI_API_KEY is missing or empty in server/.env");
    return;
  }

  const apiKey = rawKey.trim();
  const genAI = new GoogleGenerativeAI(apiKey);

  const candidateModels = [
    process.env.GEMINI_MODEL || "gemini-2.5-flash",
    "gemini-2.5-flash",
    "gemini-2.5-pro",
    "gemini-flash-latest",
    "gemini-2.5-flash-lite",
    "gemini-pro-latest",
    "gemini-2.0-flash"
  ].filter((v, i, a) => a.indexOf(v) === i);

  let success = false;
  let lastModelTried = "";
  let lastError = null;

  for (const modelName of candidateModels) {
    lastModelTried = modelName;
    try {
      console.log(`Sending request to model: '${modelName}'...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Reply with exactly: HELLO FROM GEMINI");
      const response = await result.response;
      const text = response.text();

      if (text && text.trim().length > 0) {
        console.log("\nACTUAL GEMINI TERMINAL RESPONSE:");
        console.log(text.trim());
        console.log("\n----------------------------");
        console.log("GEMINI API = WORKING");
        console.log("----------------------------");
        success = true;
        break;
      }
    } catch (err) {
      lastError = err;
      console.log(`Model '${modelName}' notice: HTTP ${err.status || err.statusCode || 404} - ${err.message ? err.message.substring(0, 150) : "Failed"}`);
    }
  }

  if (!success) {
    console.log("\n----------------------------");
    console.log("GEMINI API = NOT WORKING");
    console.log("----------------------------");
    console.log("Sanitized Diagnostic Info:");
    console.log("- GEMINI_API_KEY detected: YES");
    console.log(`- Model requested: ${lastModelTried}`);
    console.log(`- HTTP status: ${lastError ? (lastError.status || lastError.statusCode || "N/A") : "N/A"}`);
    console.log(`- Error message: ${lastError ? lastError.message : "No response generated"}`);
  }
}

runMinimalTest();
