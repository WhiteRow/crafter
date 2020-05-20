const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano')();
const autoprefixer = require('autoprefixer');

module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(sc|sa)ss$/,
					use: [
						{
							loader: 'style-loader'
						},
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								url: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [autoprefixer, cssnano]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								implementation: require('sass'),
								sourceMap: true
							}
						}
					]
				}
			]
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: 'css/app.css'
			})
		]
	};
};
