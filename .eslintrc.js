module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'prettier',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',

    'import/prefer-default-export': 'off',
  },
};
