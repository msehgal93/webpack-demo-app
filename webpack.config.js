/*
npm install webpack -g
npm install --save-dev babel-loader babel-core babel-preset-es2015
npm install --save-dev css-loader style-loader
npm install webpack-dev-server -g
*/

module.exports = {
  entry: './modules/main.js',
  output: {
    filename: './dist/bundle.js'
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
  watch: true
};
