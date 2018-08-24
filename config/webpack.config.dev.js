'use strict'

const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  devServer: {
    hot: true,
    host: 'localhost',
    port: 5000,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: '/\.tsx?$/',
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}