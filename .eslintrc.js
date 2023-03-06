const path = require("path");

module.exports = {
    extends: [
      "eslint:recommended",
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        tsconfigRootDir: path.resolve(__dirname, "src")
    },
    root: true,
  }