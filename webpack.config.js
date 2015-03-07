'use strict';

var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: './src'
  },

  module: {
    loaders: [
      { test: /\.css$/,
        loaders: ['style', 'css']},

      { test: /\.js$/,
        include: /src/,
        loader: 'babel?experimental'},

      { test: /\.jpg$/,
        loader: 'url?limit=8192&mimetype=image/jpeg'},

      { test: /\.png$/,
        loader: 'url?limit=8192&mimetype=image/png'}
    ]
  },

  resolve: {
    alias: {
      bower: path.join(__dirname, 'bower_components')
    }
  },

  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};
