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
						{
							loader: 'css-loader',
							options: {
								url: false
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
		}
	};
};
