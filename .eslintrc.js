module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    node: true,
  },
  rules: {
    'no-unused-vars': 'off',
    'no-useless-escape': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/first': 1,
    'import/newline-after-import': 1,
    'newline-after-var': 1,
    'newline-before-return': 1,
    'import/no-unresolved': [2, { ignore: ['/typings'] }],
  },
};
