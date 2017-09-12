## webpack-demo
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