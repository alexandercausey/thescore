const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: './server/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [path.join(__dirname, 'node_modules')],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
    },
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};