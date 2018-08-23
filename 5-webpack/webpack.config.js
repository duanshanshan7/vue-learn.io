const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
      app: './src/index.js',
    //   print: './src/print.js'
  },
  devtool: 'inline-source-map',  //调试定位到未打包文件，方便开发
//   devServer: {   //devServer提供了一个简单的 web 服务器，并且能够实时重新加载
//       contentBase: './dist',
//       hot: true          //热模块替换  HMR 局部刷新
//   },
    // 通过 Node.js API实现的话 config.js不需要devServer，直接写在dev-server.js里面


  plugins: [
      new HtmlWebpackPlugin({
          title: 'Output Management'
      }),
      new CleanWebpackPlugin(['dist']),  //清理dist文件夹下的旧文件
    //   HMR热模块替换
      new webpack.NamedChunksPlugin(),
      new webpack.HotModuleReplacementPlugin() 
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
      rules: [
          {
              test: /\.css$/,   //webpack 根据正则表达式，确定查找css文件，将其提供给指定的loader
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.(png|svg|jpg|gif)$/,   //这几种图片类型使用file-loader来处理
              use: [
                  'file-loader'
              ]
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf|ttc)$/,   //这几种字体类型使用file-loader来处理
              use: [
                  'file-loader'
              ]
          }
      ]
  }
};