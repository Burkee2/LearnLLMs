const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = function override(config, env) {
  config.plugins.push(
    new MonacoWebpackPlugin({
      languages: ["python"],
      features: [
        "coreCommands",
        "find",
        "colorDetector",
        "codelens",
        "folding",
        "format",
        "hover",
        "parameterHints",
        "rename",
        "smartSelect",
        "snippets",
        "suggest",
        "wordHighlighter",
        "wordOperations",
        "wordPartOperations",
      ],
    })
  );
  return config;
};
