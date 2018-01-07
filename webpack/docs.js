const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './docs/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../docs')
  },
  // devtool: 'inline-source-map',
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
  plugins: [
    new UglifyJSPlugin()
  ],
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
