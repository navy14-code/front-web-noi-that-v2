import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module', // thêm để hỗ trợ module import
      globals: globals.browser,
      parser: tseslint.parser, // đảm bảo dùng parser của @typescript-eslint
      parserOptions: {
        project: './tsconfig.json', // Cần có đường dẫn tới tsconfig
        ecmaFeatures: {
          jsx: true, // hỗ trợ JSX
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['error'], // Thêm rule này để ESLint báo lỗi khi có biến không dùng
    },
    linterOptions: {
      plugins: {
        '@typescript-eslint': tseslint.plugin, // Đảm bảo plugin của @typescript-eslint
      },
    },
  }
)
