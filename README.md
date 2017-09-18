# webpack-demo
This is a cookbook of how to get things done with webpack along with a working demo app to understand webpack.

Primer - https://scotch.io/tutorials/getting-started-with-webpack-module-bundling-magic
HowTo - https://github.com/petehunt/webpack-howto

##  Why webpack?

  * **It's like browserify** but can split your app into multiple files. If you have multiple pages in a single-page app, the user only downloads code for just that page. If they go to another page, they don't redownload common code.

  * **It often replaces grunt or gulp** because it can build and bundle CSS, preprocessed CSS, compile-to-JS languages and images, among other things.

##  getting started
`npm install -g webpack` - to install webpack globally

However, webpack allows to keep things organized, so you generally want to make a `webpack.config.js`

```js
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'       
  }
};
```

Switch to the directory containing `webpack.config.js` and run:

  * `webpack` for building once for development
  * `webpack -p` for building once for production (minification)
  * `webpack --watch` for continuous incremental build in development (fast!)
  * `webpack -d` to include source maps

## adding loaders for **CSS** and **JavaScript**
`npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react`
-> we use third party transpiler like babel to convert our code[emca2015] to old JavaScript syntax. [see the corresponding configuration in webpack.config.js]

`npm install --save-dev css-loader style-loader`
-> to process css files we need both "css-loader" and "style-loader" [see the corresponding configuration in webpack.config.js]

how to use other resources viz. img, font, text, data, [see](https://webpack.js.org/guides/asset-management/)

## Multiple Entrypoints
```js
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
};
```

## bundling common resources

About and Index have jQuery in common. Weebpack understands this and we can build a common file to put the common code in it. Whatever the common resources are, webpack finds it and puts all of it in a mentioned file.

```js
var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    'main.bundle.js': './modules/main.js',
    'about.bundle.js': './modules/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
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
```
add a file common.js in both about and index page before any other resource


## Tree Shaking
It is basically a term which refers to the process of elimination dead-code.

```js
npm i uglifyjs-webpack-plugin --save-dev
```

```js
+ const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
+    new UglifyJSPlugin()
  ]
}
```

But, there's always a but. There is a caviar to it,

TL;DR - add `{ modules: false }` to the preset list, and without it, webpack won't tree shake

The package `babel-preset-es2015` contains another package named `babel-plugin-transform-es2015-modules-commonjs` that turns all of our ES6 modules into CommonJS modules. This isn't ideal, and here's why.

Javascript bundlers such as webpack and Rollup can only perform tree-shaking on modules that have a static structure. If a module is static, then the bundler can determine its structure at build time, safely removing code that isn't being imported anywhere.

CommonJS modules do not have a static structure. Because of this, webpack won’t be able to tree-shake unused code from the final bundle. Luckily, Babel has alleviated this issue by providing developers with an option that we can pass to our presets array along with `babel-preset-es2015`

```js
options: {
  presets: [
    [ 'es2015', { modules: false } ]
  ]
}
```

According to Babel's documentation:

>"modules - Enable transformation of ES6 module syntax to another module type (Enabled by default to `commonjs`). Can be false to not transform modules, or one of ["amd", "umd", "systemjs", "commonjs"]".

Slide that extra bit of code into your configuration and you'll be cooking with peanut oil. [Source](http://jakewiesler.com/tree-shaking-es6-modules-in-webpack-2/)