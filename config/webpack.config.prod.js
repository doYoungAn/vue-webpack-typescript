'use strict'

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: '/[\\]node_modules[\\]/',
          name: 'vender',
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ]
})


