module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: ['standard', "eslint:recommended", "plugin:react/recommended"],
  plugins: [
    'html',
    'react'
  ],
  'rules': {
    'arrow-parens': 0,
    'no-alert': 0,
    'no-console': 'off',
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "no-unused-vars": 'warn'
  }
}