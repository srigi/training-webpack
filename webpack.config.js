'use strict';


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

      { test: /\.jpg$/,
        loader: 'url?limit=8192&mimetype=image/jpeg'},

      { test: /\.png$/,
        loader: 'url?limit=8192&mimetype=image/png'}
    ]
  }
};
