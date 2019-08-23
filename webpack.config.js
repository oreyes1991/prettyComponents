const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Make performances for production ( minified, uglify ..etc)

module.exports = () => {
	let filename = 'index.html';

	const defaultobject = {
		entry: './src/main/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'main.js'
		},
		devServer: {
			contentBase: path.resolve(__dirname, 'public')
		},
		module: {
			rules: [
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
					include: [
						/\/node_modules\/@rebelstack-io\/metaflux/
					]
				},
				{
					test: /\.css$/,
					use: [ 
						'style-loader',
						'css-loader' 
					]
				},
				{
					test: /\.(png|jpg|gif|svg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
							},
						},
					],
				},
			]
		},
		resolve: {
			extensions: ['*', '.js'],
			modules: ['node_modules', 'src']
		},
		node: {
			fs: 'empty'
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public/index.html'),
				hash: false,
				filename: filename,
				inject: 'body'
			})
		],
		devtool: 'source-map'
	}
	return defaultobject;
};