const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
			{ test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
			{ test: /\.(jpg|png|gif|bmp|jpeg|webp)$/, use: 'url-loader?limit=230679&name=[hash:8]-[name].[ext]'},
			{ test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'},
			{ test: /\.vue$/, use: 'vue-loader' }
		]
	}
};