const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom'];

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}
module.exports = config;





//const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//

//new ExtractTextPlugin('styles.css'),
//  new webpack.optimize.CommonsChunkPlugin({
//    names: ['vendor', 'manifest']
//  }),
//  new HtmlWebpackPlugin({
//    template: './src/index.html'
//  })
//ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
