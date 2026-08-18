const fs = require("fs");
const path = require("path");

/**
 * Calculator Tool: Safe mathematical evaluator
 */
function runCalculatorTool(query) {
  const mathExprMatch = query.match(/([\d\.\s\+\-\*\/\(\)\^\%×÷]+)/);
  if (!mathExprMatch) return null;

  const rawExpr = mathExprMatch[1].replace(/×/g, "*").replace(/÷/g, "/").trim();
  if (rawExpr.length < 2) return null;

  try {
    if (/^[0-9\s\+\-\*\/\(\)\.\%\^]+$/.test(rawExpr)) {
      const sanitized = rawExpr.replace(/\^/g, "**");
      const result = Function(`"use strict"; return (${sanitized});`)();
      if (typeof result === "number" && !isNaN(result) && isFinite(result)) {
        return {
          toolName: "Calculator Tool",
          expression: rawExpr,
          result: String(result),
          output: `> 🧮 **Calculator Tool Executed**\n> Math Expression: \`${rawExpr}\` = **${result}**\n\nThe result of calculating \`${rawExpr}\` is **${result}**.`,
        };
      }
    }
  } catch (err) {
    return null;
  }
  return null;
}

/**
 * File Ingestion Tool: Ingests uploaded text, code, JSON, CSV files from server uploads
 */
function runFileAnalysisTool(attachments) {
  if (!attachments || attachments.length === 0) return null;

  const analyzedFiles = [];

  for (const file of attachments) {
    if (!file.url) continue;
    const filename = path.basename(file.url);
    const filePath = path.join(__dirname, "../../uploads", filename);

    if (fs.existsSync(filePath)) {
      const ext = path.extname(filename).toLowerCase();
      const textExtensions = [".txt", ".js", ".jsx", ".ts", ".tsx", ".py", ".java", ".json", ".csv", ".html", ".css", ".md", ".c", ".cpp", ".sql"];

      if (textExtensions.includes(ext) || file.fileType?.includes("text") || file.fileType?.includes("json") || file.fileType?.includes("javascript")) {
        try {
          const content = fs.readFileSync(filePath, "utf-8");
          const truncated = content.length > 4000 ? content.substring(0, 4000) + "\n...[truncated]" : content;
          analyzedFiles.push({
            name: file.name || filename,
            ext,
            content: truncated,
          });
        } catch (err) {
          // Pass metadata
        }
      }
    }
  }

  if (analyzedFiles.length === 0) return null;

  return {
    toolName: "File Analysis Tool",
    analyzedFiles,
    formattedContext: analyzedFiles
      .map((f) => `--- Attached File Context: ${f.name} ---\n\`\`\`${f.ext.replace(".", "") || "text"}\n${f.content}\n\`\`\``)
      .join("\n\n"),
  };
}

/**
 * Main Tool Dispatcher Entrypoint
 */
async function dispatchTools({ query, attachments = [], webSearch = false }) {
  const toolsExecuted = [];
  let toolContext = "";

  // 1. Check for Math Calculation
  if (/(\d+\s*[\+\-\*\/\%×÷]\s*\d+|calculate|what is \d+)/i.test(query)) {
    const calcResult = runCalculatorTool(query);
    if (calcResult) {
      toolsExecuted.push("Calculator Tool");
      toolContext += "\n\n" + calcResult.output;
    }
  }

  // 2. Check for File Attachments Ingestion
  if (attachments && attachments.length > 0) {
    const fileResult = runFileAnalysisTool(attachments);
    if (fileResult) {
      toolsExecuted.push("File Analysis Tool");
      toolContext += "\n\n" + fileResult.formattedContext;
    }
  }

  // 3. Check for Web Search Tool
  if (webSearch || /search|latest|news|weather|version|today/i.test(query)) {
    toolsExecuted.push("Web Search Tool");
  }

  return {
    toolsExecuted,
    toolContext,
  };
}

module.exports = { dispatchTools, runCalculatorTool, runFileAnalysisTool };
