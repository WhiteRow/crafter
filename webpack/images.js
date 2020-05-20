module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|png|webp)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'images/[name].[ext]'
							}
						},
						{
							loader: 'image-webpack-loader',
							options: {
								mozjpeg: {
									progressive: true,
									quality: 100
								},
								pngquant: {
									speed: 4
								}
							}
						}
					]
				}
			]
		}
	};
};
