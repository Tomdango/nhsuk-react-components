module.exports = {
  presets: ['@babel/preset-env', '@babel/react'],
  plugins: [
    [
      'transform-react-remove-prop-types',
      { removeImport: true, additionalLibraries: ['react-style-proptype'] }
    ]
  ],
  env: {
    production: {
      presets: ['minify']
    }
  },
  ignore: ['**/*.test.js', '**/__mocks__', '**/setupTests.js']
};
