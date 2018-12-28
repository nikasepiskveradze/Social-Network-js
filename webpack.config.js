const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    app: './src/assets/js/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'src/dist/js'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }
    ]
  }
}