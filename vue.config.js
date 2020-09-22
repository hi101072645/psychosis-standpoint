const glob = require("glob")
const path = require('path');
const webpack = require('webpack');

module.exports = {
	runtimeCompiler: true,
	// publicPath: process.env.NODE_ENV === 'production'
	//   ? '/bacchus_design_system/'
	//   : '/'
	// ,
	css: {
		modules: true
	},
	configureWebpack: {
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendor: false,
					sass: {
						name: 'sass',
						test: /[\\/]sass[\\/]/,
						chunks: 'all',
						enforce: true,
						minChunks: 1,
					},
					...glob.sync('./src/**/[^_]*.scss').reduce((acc, item) => {
						let path = item.split('/')
						let filename = path[path.length - 1]
						let name = filename.split('.')[0]
						acc[name] = {
							name,
							test: new RegExp(`${filename}$`),
							chunks: 'all',
							enforce: true,
							minChunks: 1,
						};
						return acc
					}, {}),

				}
			}
		},
		plugins: [
			// new webpack.ProvidePlugin({
			// 	_: 'lodash',
			// 	$: 'jquery',
			// 	jQuery: 'jquery',
			// 	'windows.jQuery': 'jquery',
			// }),
		],
	},
	css: {
		extract: true
	},
};