module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    camelcase: 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-curly-newline': 'off',
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/forbid-prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
