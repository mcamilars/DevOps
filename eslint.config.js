const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ignores: ["coverage/**"]
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      quotes: ["error", "double"],
      indent: ["error", 2],
      "comma-dangle": ["error", "never"],
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off"
    }
  }
];
