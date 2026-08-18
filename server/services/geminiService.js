const { GoogleGenerativeAI } = require("@google/generative-ai");

/**
 * Clean Gemini Backend Service for VEXIS PRO
 * Primary & ONLY AI Engine for VEXIS PRO Normal Chat
 */
class GeminiService {
  constructor() {
    this.defaultModel = process.env.GEMINI_MODEL || "gemini-2.5-flash";
    console.log("[Gemini] Service starting");
    const hasKey = !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== "");
    console.log(`[Gemini] API key loaded: ${hasKey ? "YES" : "NO"}`);
    console.log(`[Gemini] Model: ${this.defaultModel}`);
  }

  getGeminiModelName(requestedModel) {
    if (requestedModel && requestedModel.includes("o1")) return "gemini-2.5-pro";
    return process.env.GEMINI_MODEL || "gemini-2.5-flash";
  }

  /**
   * Generate text response using Google Gemini API
   */
  async generateResponse({ content, model, history, systemInstruction, finalPrompt, fallbackFn }) {
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey.trim() !== "") {
      console.log("[Gemini] Request received");
      const genAI = new GoogleGenerativeAI(apiKey);
      const targetModel = this.getGeminiModelName(model);

      const modelsToTry = [targetModel, "gemini-2.5-flash", "gemini-1.5-flash", "gemini-2.5-pro"].filter(
        (v, i, a) => a.indexOf(v) === i
      );

      const cleanedHistory = [];
      let expectedRole = "user";
      if (Array.isArray(history)) {
        for (const h of history) {
          const role = h.role === "assistant" ? "model" : "user";
          if (role === expectedRole && h.content && h.content.trim() !== "") {
            cleanedHistory.push({ role, parts: [{ text: h.content }] });
            expectedRole = role === "user" ? "model" : "user";
          }
        }
      }

      const contents = [...cleanedHistory, { role: "user", parts: [{ text: finalPrompt || content }] }];

      for (const mName of modelsToTry) {
        try {
          const aiModel = genAI.getGenerativeModel({
            model: mName,
            systemInstruction: systemInstruction || "You are VEXIS PRO, an intelligent, helpful, accurate AI assistant.",
            generationConfig: {
              temperature: 0.7,
              topP: 0.95,
              maxOutputTokens: 4096,
            },
          });

          const result = await aiModel.generateContent({ contents });
          const response = await result.response;
          const text = response.text();
          if (text && text.trim() !== "") {
            console.log(`[Gemini] Gemini response received from model '${mName}'`);
            return text;
          }
        } catch (err) {
          console.warn(`[Gemini] Model '${mName}' notice:`, err.message);
        }
      }
    } else {
      console.warn("[Gemini] API key is missing. Set GEMINI_API_KEY in server/.env");
    }

    if (typeof fallbackFn === "function") {
      return fallbackFn(finalPrompt || content, model, [], false, history);
    }
    throw new Error("GEMINI_KEY_MISSING");
  }

  /**
   * Stream response tokens via Gemini SSE
   */
  async generateStream({ content, model, history, systemInstruction, finalPrompt, res, isAbortedFn, fallbackFn }) {
    let text = "";
    try {
      text = await this.generateResponse({ content, model, history, systemInstruction, finalPrompt, fallbackFn });
    } catch (err) {
      if (typeof fallbackFn === "function") {
        text = fallbackFn(finalPrompt || content, model, [], false, history);
      } else {
        throw err;
      }
    }

    const chunkSize = Math.max(1, Math.floor(text.length / 25));
    for (let i = 0; i < text.length; i += chunkSize) {
      if (isAbortedFn && isAbortedFn()) break;
      const part = text.substring(i, i + chunkSize);
      res.write(`data: ${JSON.stringify({ chunk: part })}\n\n`);
      await new Promise((r) => setTimeout(r, 15));
    }
    return text;
  }
}

module.exports = new GeminiService();
