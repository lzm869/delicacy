//导出一个配置对象
//path是nodejs内置模块 帮助处理路径、
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
    //开发模式
    mode:"development",
    //入口 ————dirname当前模块的绝对路径
    entry:resolve(__dirname,'src/main.js'),//此的地址为src内自己定义的文件名
    //出口
    output:{
        //目录
        path:resolve(__dirname, 'dist'),
        //文件名
        filename:'js/[hash].js',//此地址为src内自己定义的文件
    },
    module:{
        rules:[
            {test:/\.vue$/,loader:"vue-loader"},
            {test:/\.json$/,loader1:"json-loader"},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {
                test:/\.(png|ico)$/,
                type:"asset/resource",
                generator:{
                    filename:"image/[hash:8][ext]"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"index.html"
        }),
        new VueLoaderPlugin()
    ]
}