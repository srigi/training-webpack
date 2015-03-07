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
        loaders: ['style', 'css']}
    ]
  }
};
