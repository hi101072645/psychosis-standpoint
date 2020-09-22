const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: './public/javascripts/bundle.js',
	},
	plugins: [
		new webpack.ProvidePlugin({
			_: 'lodash',
			$: 'jquery',
			jQuery: 'jquery',
			'windows.jQuery': 'jquery',
		}),
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	}
};