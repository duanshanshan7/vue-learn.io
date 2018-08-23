const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// express 使用webpack-dev-middleware中间件和webpack.config.js中的配置
app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));

//启动端口
app.listen(3000, function(){
    console.log('example app listening on port 3000!\n')
})