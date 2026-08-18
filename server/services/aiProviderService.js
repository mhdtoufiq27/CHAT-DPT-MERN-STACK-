const { OpenAI } = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");

/**
 * Clean AI Provider Architecture for VEXIS PRO
 * Abstraction layer managing OpenAI, Gemini, and Smart Dynamic Fallbacks
 */
class AIProviderService {
  constructor() {
    this.provider = process.env.AI_PROVIDER || "openai";
    this.defaultOpenAIModel = process.env.OPENAI_MODEL || "gpt-4o-mini";
  }

  getOpenAIModel(requestedModel) {
    if (requestedModel && requestedModel.includes("o1")) return "o1-mini";
    if (requestedModel && requestedModel.includes("mini")) return "gpt-4o-mini";
    return process.env.OPENAI_MODEL || "gpt-4o-mini";
  }

  /**
   * Generate standard complete text response
   */
  async generateResponse({ content, model, history, systemInstruction, temperature, finalPrompt, fallbackFn }) {
    const openaiKey = process.env.OPENAI_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;

    // 1. Try OpenAI API if key is present
    if (openaiKey && openaiKey.trim() !== "") {
      try {
        const openai = new OpenAI({ apiKey: openaiKey });
        const targetModel = this.getOpenAIModel(model);

        const formattedMessages = [
          { role: "system", content: systemInstruction },
          ...history.map((h) => ({
            role: h.role === "model" ? "assistant" : h.role,
            content: h.content,
          })),
          { role: "user", content: finalPrompt },
        ];

        const completion = await openai.chat.completions.create({
          model: targetModel,
          messages: formattedMessages,
          temperature,
        });

        const text = completion.choices[0]?.message?.content;
        if (text && text.trim() !== "") {
          return text;
        }
      } catch (err) {
        console.warn(`[VEXIS PRO AI Engine] OpenAI notice (${err.status || err.code || 'API_ERR'}): ${err.message}`);
      }
    }

    // 2. Fallback to Gemini API if key is present
    if (geminiKey && geminiKey.trim() !== "") {
      try {
        const genAI = new GoogleGenerativeAI(geminiKey);
        const modelsToTry = ["gemini-2.5-flash", "gemini-1.5-flash", "gemini-2.5-pro"];
        for (const mName of modelsToTry) {
          try {
            const gModel = genAI.getGenerativeModel({ model: mName, systemInstruction });
            const cleanedHistory = [];
            let expectedRole = "user";
            for (const h of history) {
              const role = h.role === "assistant" ? "model" : "user";
              if (role === expectedRole && h.content && h.content.trim() !== "") {
                cleanedHistory.push({ role, parts: [{ text: h.content }] });
                expectedRole = role === "user" ? "model" : "user";
              }
            }
            const contents = [...cleanedHistory, { role: "user", parts: [{ text: finalPrompt }] }];
            const result = await gModel.generateContent({ contents });
            const response = await result.response;
            const gText = response.text();
            if (gText && gText.trim() !== "") return gText;
          } catch (gErr) {
            // cascade to next model
          }
        }
      } catch (geminiOuterErr) {
        console.warn("[VEXIS PRO AI Engine] Gemini fallback notice:", geminiOuterErr.message);
      }
    }

    // 3. Fallback to Dynamic Smart AI Engine
    return fallbackFn(finalPrompt, model, [], false, history);
  }

  /**
   * Stream response tokens via Server-Sent Events (SSE)
   */
  async generateStream({ content, model, history, systemInstruction, temperature, finalPrompt, res, isAbortedFn, fallbackFn }) {
    const openaiKey = process.env.OPENAI_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;

    // 1. Try OpenAI Streaming
    if (openaiKey && openaiKey.trim() !== "") {
      try {
        const openai = new OpenAI({ apiKey: openaiKey });
        const targetModel = this.getOpenAIModel(model);

        const formattedMessages = [
          { role: "system", content: systemInstruction },
          ...history.map((h) => ({
            role: h.role === "model" ? "assistant" : h.role,
            content: h.content,
          })),
          { role: "user", content: finalPrompt },
        ];

        const stream = await openai.chat.completions.create({
          model: targetModel,
          messages: formattedMessages,
          temperature,
          stream: true,
        });

        let fullText = "";
        for await (const chunk of stream) {
          if (isAbortedFn()) break;
          const delta = chunk.choices[0]?.delta?.content || "";
          if (delta) {
            fullText += delta;
            res.write(`data: ${JSON.stringify({ chunk: delta })}\n\n`);
          }
        }
        if (fullText && fullText.trim() !== "") {
          return fullText;
        }
      } catch (err) {
        console.warn(`[VEXIS PRO AI Stream Engine] OpenAI notice (${err.status || err.code || 'API_ERR'}): ${err.message}`);
      }
    }

    // 2. Fallback to complete response with progressive streaming delivery
    const text = await this.generateResponse({ content, model, history, systemInstruction, temperature, finalPrompt, fallbackFn });
    const chunkSize = Math.max(1, Math.floor(text.length / 25));
    for (let i = 0; i < text.length; i += chunkSize) {
      if (isAbortedFn()) break;
      const part = text.substring(i, i + chunkSize);
      res.write(`data: ${JSON.stringify({ chunk: part })}\n\n`);
      await new Promise((r) => setTimeout(r, 15));
    }
    return text;
  }
}

module.exports = new AIProviderService();
