/*
npm install webpack -g
npm install --save-dev babel-loader babel-core babel-preset-es2015
npm install --save-dev css-loader style-loader
npm install webpack-dev-server -g
npm install path
*/
 var path = require('path');


module.exports = {
  entry: {
    MAIN: './modules/main.js',
    ABOUT: './modules/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js' // Template based on keys in entry above
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
  }
  // ,watch: true
};
