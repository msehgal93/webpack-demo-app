/*
npm install webpack -g
npm install --save-dev babel-loader babel-core babel-preset-es2015
npm install --save-dev css-loader style-loader
npm install webpack-dev-server -g
npm install path
*/
var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common');

module.exports = {
  entry: {
    'main.bundle': './modules/main.js',
    'about.bundle': './modules/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js' // Template based on keys in entry above
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {presets: ['es2015']}
      },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [commonsPlugin]
};