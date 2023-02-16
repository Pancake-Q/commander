// const rules = require('./.eslintRule.js');
module.exports = {
  parser: "@typescript-eslint/parser", // 解析器
  extends: [
    "plugin:prettier/recommended",
    "prettier", // 优先 prettier 中的样式规范
  ], // 继承的规则
  plugins: ["@typescript-eslint"], // 插件
  env: {
    es6: true,
    node: true,
    mocha: true,
    browser: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser", // 解析 .ts 文件
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    "no-console": true,
    semi: "error",
    quotes: ["error", "single"], // 禁止出现双引号
  }, // 规则
};
