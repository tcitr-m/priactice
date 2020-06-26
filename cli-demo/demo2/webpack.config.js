const path = require('path')

const mode = 'dev'

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: mode === 'pro' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'sass-loader',
            options: {

            }
          },
        ]
      }
    ]
  }
}