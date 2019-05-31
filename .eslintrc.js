module.exports = {
    env: {
      browser: true,
      es6: true,
      // node: true,
      jquery: true,
    },
    extends: 'eslint:recommended',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
    //   sourceType: 'script',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      strict: ['error', 'global'],
      curly: 'warn',
    },
  };
  