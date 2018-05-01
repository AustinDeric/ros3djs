const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: "ros3d.cjs.js",
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
         presets: ['es2015', 'stage-2']
       }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      querystring: 'querystring-browser'
    }
  },
  watch: false
};

