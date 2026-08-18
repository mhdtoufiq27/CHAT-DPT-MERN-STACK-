const { OpenAI } = require("openai");

/**
 * Cerebras AI Provider Architecture for VEXIS PRO
 * Primary AI Engine: Cerebras (https://api.cerebras.ai/v1)
 */
class AIProviderService {
  constructor() {
    this.defaultModel = process.env.CEREBRAS_MODEL || "llama-3.3-70b";
  }

  getCerebrasModel(requestedModel) {
    if (requestedModel && requestedModel.includes("mini")) return "llama3.1-8b";
    if (requestedModel && requestedModel.includes("o1")) return "llama-3.3-70b";
    return process.env.CEREBRAS_MODEL || "llama-3.3-70b";
  }

  /**
   * Generate complete response via Cerebras Cloud API
   */
  async generateResponse({ content, model, history, systemInstruction, temperature, finalPrompt, fallbackFn }) {
    const cerebrasKey = process.env.CEREBRAS_API_KEY;

    if (cerebrasKey && cerebrasKey.trim() !== "") {
      try {
        const cerebras = new OpenAI({
          apiKey: cerebrasKey,
          baseURL: "https://api.cerebras.ai/v1",
        });
        const targetModel = this.getCerebrasModel(model);

        const formattedMessages = [
          { role: "system", content: systemInstruction },
          ...history.map((h) => ({
            role: h.role === "model" ? "assistant" : h.role,
            content: h.content,
          })),
          { role: "user", content: finalPrompt },
        ];

        const completion = await cerebras.chat.completions.create({
          model: targetModel,
          messages: formattedMessages,
          temperature,
        });

        const text = completion.choices[0]?.message?.content;
        if (text && text.trim() !== "") {
          return text;
        }
      } catch (err) {
        console.warn(`[VEXIS PRO Cerebras Engine] Notice (${err.status || err.code || 'API_ERR'}): ${err.message}`);
      }
    }

    // Fallback to Dynamic Smart AI Engine if Cerebras key is empty or rate-limited
    return fallbackFn(finalPrompt, model, [], false, history);
  }

  /**
   * Stream response tokens via Cerebras Cloud SSE Stream
   */
  async generateStream({ content, model, history, systemInstruction, temperature, finalPrompt, res, isAbortedFn, fallbackFn }) {
    const cerebrasKey = process.env.CEREBRAS_API_KEY;

    if (cerebrasKey && cerebrasKey.trim() !== "") {
      try {
        const cerebras = new OpenAI({
          apiKey: cerebrasKey,
          baseURL: "https://api.cerebras.ai/v1",
        });
        const targetModel = this.getCerebrasModel(model);

        const formattedMessages = [
          { role: "system", content: systemInstruction },
          ...history.map((h) => ({
            role: h.role === "model" ? "assistant" : h.role,
            content: h.content,
          })),
          { role: "user", content: finalPrompt },
        ];

        const stream = await cerebras.chat.completions.create({
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
        console.warn(`[VEXIS PRO Cerebras Stream Engine] Notice (${err.status || err.code || 'API_ERR'}): ${err.message}`);
      }
    }

    // Fallback to complete response with progressive streaming delivery
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
