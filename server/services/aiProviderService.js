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
   * Generate complete response via Cerebras Cloud API with multi-model failover cascade
   */
  async generateResponse({ content, model, history, systemInstruction, temperature, finalPrompt, fallbackFn }) {
    const cerebrasKey = process.env.CEREBRAS_API_KEY;

    if (cerebrasKey && cerebrasKey.trim() !== "") {
      const cerebras = new OpenAI({
        apiKey: cerebrasKey,
        baseURL: "https://api.cerebras.ai/v1",
      });

      const primaryModel = this.getCerebrasModel(model);
      const modelsToTry = [primaryModel, "llama-3.3-70b", "llama3.1-8b", "llama3.1-70b", "gpt-oss-120b", "gemma-4-31b"].filter(
        (v, i, a) => a.indexOf(v) === i
      );

      const formattedMessages = [
        { role: "system", content: systemInstruction },
        ...history.map((h) => ({
          role: h.role === "model" ? "assistant" : h.role,
          content: h.content,
        })),
        { role: "user", content: finalPrompt },
      ];

      for (const mName of modelsToTry) {
        try {
          const completion = await cerebras.chat.completions.create({
            model: mName,
            messages: formattedMessages,
            temperature,
          });

          const text = completion.choices[0]?.message?.content;
          if (text && text.trim() !== "") {
            console.log(`[VEXIS PRO Cerebras Engine] Response generated successfully using model '${mName}'`);
            return text;
          }
        } catch (err) {
          console.warn(`[VEXIS PRO Cerebras Engine] Model '${mName}' notice (${err.status || err.code || 'API_ERR'}): ${err.message}`);
        }
      }
    }

    // Fallback to Dynamic Smart AI Engine if Cerebras models are exhausted
    return fallbackFn(finalPrompt, model, [], false, history);
  }

  /**
   * Stream response tokens via Cerebras Cloud SSE Stream with multi-model failover cascade
   */
  async generateStream({ content, model, history, systemInstruction, temperature, finalPrompt, res, isAbortedFn, fallbackFn }) {
    const cerebrasKey = process.env.CEREBRAS_API_KEY;

    if (cerebrasKey && cerebrasKey.trim() !== "") {
      const cerebras = new OpenAI({
        apiKey: cerebrasKey,
        baseURL: "https://api.cerebras.ai/v1",
      });

      const primaryModel = this.getCerebrasModel(model);
      const modelsToTry = [primaryModel, "llama-3.3-70b", "llama3.1-8b", "llama3.1-70b", "gpt-oss-120b", "gemma-4-31b"].filter(
        (v, i, a) => a.indexOf(v) === i
      );

      const formattedMessages = [
        { role: "system", content: systemInstruction },
        ...history.map((h) => ({
          role: h.role === "model" ? "assistant" : h.role,
          content: h.content,
        })),
        { role: "user", content: finalPrompt },
      ];

      for (const mName of modelsToTry) {
        try {
          const stream = await cerebras.chat.completions.create({
            model: mName,
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
            console.log(`[VEXIS PRO Cerebras Stream Engine] Stream completed using model '${mName}'`);
            return fullText;
          }
        } catch (err) {
          console.warn(`[VEXIS PRO Cerebras Stream Engine] Model '${mName}' notice (${err.status || err.code || 'API_ERR'}): ${err.message}`);
        }
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
