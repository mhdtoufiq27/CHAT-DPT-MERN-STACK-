const { GoogleGenerativeAI } = require("@google/generative-ai");

/**
 * VEXIS PRO — Gemini AI Backend Service
 * Primary & ONLY AI Engine for VEXIS PRO Normal Chat
 */
class GeminiService {
  constructor() {
    this.defaultModel = process.env.GEMINI_MODEL || "gemini-3.6-flash";
    console.log("[Gemini] Service starting");
    const hasKey = !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== "");
    console.log(`[Gemini] API key loaded: ${hasKey ? "YES" : "NO"}`);
    console.log(`[Gemini] Model: ${this.defaultModel}`);
  }

  getGeminiModelName(requestedModel) {
    if (requestedModel && requestedModel.includes("o1")) return "gemini-3.1-pro-preview";
    return process.env.GEMINI_MODEL || "gemini-3.6-flash";
  }

  /**
   * Generate text response using Google Gemini API
   */
  async generateResponse({ content, model, history, systemInstruction, finalPrompt, fallbackFn }) {
    const apiKey = process.env.GEMINI_API_KEY;

    console.log("[Chat] User message received");
    console.log("[Chat] Provider: Gemini");

    if (!apiKey || apiKey.trim() === "") {
      console.warn("[Gemini] API key is missing. Set GEMINI_API_KEY in server/.env");
      throw new Error("VEXIS PRO couldn't connect to Gemini. API key is missing in server/.env");
    }

    console.log("[Chat] Gemini request sent");
    const genAI = new GoogleGenerativeAI(apiKey.trim());
    const targetModel = this.getGeminiModelName(model);

    const modelsToTry = [
      targetModel,
      "gemini-3.6-flash",
      "gemini-3.5-flash",
      "gemini-3.7-flash",
      "gemini-3.5-flash-lite",
      "gemini-3.1-flash-lite",
      "gemini-flash-latest"
    ].filter((v, i, a) => !!v && a.indexOf(v) === i);

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
    const activeInstruction =
      systemInstruction ||
      "You are VEXIS PRO, an intelligent, precise, helpful AI assistant. Always understand the user's actual question and answer directly, accurately, and naturally. Strictly follow all requested formatting constraints (e.g., 'give only code', 'explain in 3 lines'). Maintain conversation context across turns. Ensure code snippets are clean, executable, and in the requested language.";

    let lastErr = null;
    let isQuotaError = false;

    for (const mName of modelsToTry) {
      try {
        const aiModel = genAI.getGenerativeModel({
          model: mName,
          systemInstruction: activeInstruction,
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
          console.log(`[Chat] Gemini response received from model '${mName}'`);
          console.log(`[Chat] Response length: ${text.length}`);
          return text;
        }
      } catch (err) {
        lastErr = err;
        const status = err.status || err.statusCode;
        if (status === 429 || err.message?.includes("429") || err.message?.includes("quota")) {
          isQuotaError = true;
          console.warn(`[Gemini] Model '${mName}' rate limit notice (429 / Quota Exceeded):`, err.message);
        } else if (status === 401 || status === 403 || err.message?.includes("API key")) {
          console.warn(`[Gemini] Model '${mName}' auth notice:`, err.message);
        } else {
          console.warn(`[Gemini] Model '${mName}' notice:`, err.message);
        }
      }
    }

    if (isQuotaError) {
      throw new Error("Google Gemini API Quota Exceeded (Free Tier limit reached: 20 requests/day). Please try again shortly or check your Google AI Studio quota.");
    }

    if (lastErr) {
      throw new Error(`Google Gemini Error: ${lastErr.message.substring(0, 150)}`);
    }

    throw new Error("VEXIS PRO couldn't connect to Gemini. Please try again.");
  }

  /**
   * Stream response tokens via Gemini SSE
   */
  async generateStream({ content, model, history, systemInstruction, finalPrompt, res, isAbortedFn, fallbackFn }) {
    let text = "";
    try {
      text = await this.generateResponse({ content, model, history, systemInstruction, finalPrompt, fallbackFn });
    } catch (err) {
      console.error("[GeminiStream Error]:", err.message);
      throw err;
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
