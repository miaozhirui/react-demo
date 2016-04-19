var uglifyJsPlugin = require("./node_modules/webpack/lib/optimize/UglifyJsPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	//入口文件
	entry: './src/main.js',

	//文件输出位置
	output: {
		path: 'build',
		filename: '[hash].build.js'
	},
	// 开启热部署
	devServer: {
		port: 8888,
		inline: true,
		// hot: true
	},
	//debug调试
	devtool: 'source-map',

	//所依赖的模块
	module: {
		// 加载器
		loaders: [
			{
				test: /\.js$/,//检测模块为js结尾的
				loader: 'babel',//使用babel加载器
				exclued: /node_modules/,//排除该文件夹下面的内容
				query: {//加载es6,react相应的处理器
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url?limit=40000'
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader!css-loader!less-loader")
			}
		]
	},

	// 执行相应的插件
	plugins: [
		//提取css到单个文件
		new ExtractTextPlugin("[hash].build.css"),
		//压缩css
		// new uglifyJsPlugin(),
		//设置模板文件
		new HtmlWebpackPlugin({
			title: 'Custom template',
            template: './src/tpl/index.html',
            filename: './index.html',
            inject: 'body',
		})
	]
}