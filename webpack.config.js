const path = require('path');
const merge = require('webpack-merge');
const scripts = require('./webpack/scripts');
const styles = require('./webpack/styles');
const extractCSS = require('./webpack/styles.extract');
const images = require('./webpack/images');
const surceMap = require('./webpack/sourceMap');
const server = require('./webpack/server');
const extractFiles = require('./webpack/files.extract');

const paths = {
	source: path.join(__dirname, 'src'),
	distribution: path.join(__dirname, 'dist')
};
const HtmlWebpackPlugin = require('html-webpack-plugin');

const main = merge([
	{
		entry: {
			app: paths.source + '/js/app.js'
		},

		output: {
			path: paths.distribution,
			filename: 'js/bundle.js'
		},

		resolve: {
			extensions: ['.js', '.json', '*']
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: paths.source + '/index.html',
				favicon: paths.source + '/favicon.png'
			})
		]
	},

	scripts(),
	images(),
	extractFiles()
]);

module.exports = function(env, argv) {
	if (argv.mode === 'production') {
		return merge([main, extractCSS()]);
	}
	if (argv.mode === 'development') {
		return merge([main, server(), styles(), surceMap(),]);
	}
};
