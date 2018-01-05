const path = require('path');

module.exports = {
  entry: './docs/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../docs')
  },
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    contentBase: './docs',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    }
  },
  resolve: {
    modules: [
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
