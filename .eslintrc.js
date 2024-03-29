module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    "prettier",
  ],
  'plugins': [
    'prettier',
  ],
  'rules': {
    'prettier/prettier': ['warn', {
      'singleQuote': true,
      'trailingComma': 'es5'
    }],
    'react/jsx-one-expression-per-line': [0]
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}