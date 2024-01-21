import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';

const __dirname = import.meta.dirname;

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  ...compat.extends('airbnb-base'),
  eslintConfigPrettier,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      curly: ['error', 'all'],
      'no-underscore-dangle': 'off',
      'max-lines-per-function': ['error', 70],
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['eslint.config.js', 'webpack.config.js'],
    rules: {
      'max-lines-per-function': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
];
