/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "next"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-object-type": "off"
  }
};
