npm install --save-dev html-webpack-plugin 
     如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题。

npm install clean-webpack-plugin --save-dev
    clean-webpack-plugin 是一个比较普及的管理插件,清理dist文件夹下的旧文件。

inline-source-map
    调试时错误可直接定位到未打包的文件中，方便调试查找错误。

npm install --save-dev webpack-dev-server
    webpack-dev-server提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。

npm install --save-dev express webpack-dev-middleware
    webpack-dev-middleware中间件配合express server 第二种方法实现服务器和自动编译。


    <!-- ------------------------ -->

    webpack 4.6.0 指南学习  截止到tree shaking  后续6-webpackProduction