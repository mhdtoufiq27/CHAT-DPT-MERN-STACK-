const geminiService = require("./geminiService");

/**
 * AI Provider Service for VEXIS PRO
 * Primary & ONLY AI Engine: Google Gemini API
 */
class AIProviderService {
  async generateResponse(params) {
    return geminiService.generateResponse(params);
  }

  async generateStream(params) {
    return geminiService.generateStream(params);
  }
}

module.exports = new AIProviderService();
