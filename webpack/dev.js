const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'miquill.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'miquill',
    libraryTarget: 'commonjs2'
  },
  externals: {
    mithril: {
      commonjs: 'mithril',
      commonjs2: 'mithril',
      amd: 'mithril',
      root: 'm'
    },
    quill: {
      commonjs: 'quill',
      commonjs2: 'quill',
      amd: 'quill',
      root: 'Quill'
    },
  },
  devtool: 'inline-source-map',
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
