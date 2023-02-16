const rules = require('./.eslintRules.js');
module.exports = {
  parser: '@typescript-eslint/parser', // 解析器
  extends: [
    'plugin:prettier/recommended',
    'prettier', // 优先 prettier 中的样式规范
  ], // 继承的规则
  plugins: ['@typescript-eslint'], // 插件
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析 .ts 文件
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: rules, // 规则
};
