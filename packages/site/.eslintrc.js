module.exports = {
  extends: [
    '../../.eslintrc.js',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended', // Add this line
  ],

  rules: {
    'react/display-name': 'off',
    'react/no-direct-mutation-state': 'off',
    'react/require-render-return': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // Add this rule
    '@typescript-eslint/no-parameter-properties': 'off',
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },

  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        'jsdoc/require-jsdoc': 0,
      },
    },
  ],

  ignorePatterns: ['!.eslintrc.js', 'build/'],
};
