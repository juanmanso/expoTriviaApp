module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier', 'plugin:react/recommended'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js'],
  rules: {},
};
