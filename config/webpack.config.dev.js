'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
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
        test: /\.(s*)css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
