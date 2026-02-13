import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      '@stylistic': stylistic,
      perfectionist,
    },
    rules: {
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/brace-style': [ 'error' ],
      '@stylistic/indent': [ 'error', 2 ],
      '@stylistic/jsx-closing-bracket-location': [ 'error' ],
      '@stylistic/jsx-closing-tag-location': [ 'error', 'tag-aligned' ],
      '@stylistic/jsx-curly-spacing': [ 'error', { children: true, when: 'always' } ],
      '@stylistic/jsx-first-prop-new-line': [ 'error', 'multiline' ],
      '@stylistic/jsx-max-props-per-line': [ 'error' ],
      '@stylistic/jsx-newline': [ 'error' ],
      '@stylistic/jsx-one-expression-per-line': [ 'error' ],
      '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],
      '@stylistic/jsx-self-closing-comp': [ 'error' ],
      '@stylistic/jsx-tag-spacing': [ 'error' ],
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/quotes': [ 'error', 'single' ],
      '@stylistic/semi': [ 'error', 'always' ],
      '@stylistic/semi-spacing': [ 'error' ],
      '@stylistic/template-curly-spacing': [ 'error', 'always' ],
      '@typescript-eslint/no-unused-vars': [ 'error' ],
      camelcase: [ 'error', { ignoreImports: true } ],
      eqeqeq: 'error',
      'no-duplicate-imports': [ 'error' ],
      'perfectionist/sort-array-includes': [ 'error' ],
      'perfectionist/sort-classes': [ 'error' ],
      'perfectionist/sort-decorators': [ 'error' ],
      'perfectionist/sort-enums': [ 'error' ],
      'perfectionist/sort-export-attributes': [ 'error' ],
      'perfectionist/sort-exports': [ 'error' ],
      'perfectionist/sort-heritage-clauses': [ 'error' ],
      'perfectionist/sort-import-attributes': [ 'error' ],
      'perfectionist/sort-imports': [ 'error' ],
      'perfectionist/sort-interfaces': [ 'error' ],
      'perfectionist/sort-intersection-types': [ 'error' ],
      'perfectionist/sort-jsx-props': [ 'error' ],
      'perfectionist/sort-maps': [ 'error' ],
      'perfectionist/sort-modules': [ 'error' ],
      'perfectionist/sort-named-exports': [ 'error' ],
      'perfectionist/sort-named-imports': [ 'error' ],
      'perfectionist/sort-object-types': [ 'error' ],
      'perfectionist/sort-objects': [ 'error' ],
      'perfectionist/sort-sets': [ 'error' ],
      'perfectionist/sort-switch-case': [ 'error' ],
      'perfectionist/sort-union-types': [ 'error' ],
      'perfectionist/sort-variable-declarations': [ 'error' ],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
