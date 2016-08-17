module.exports = {
	entry: {
		javascript: __dirname + '/app/index.js',
	},
	output: {
		filename: 'build.js',
		path: __dirname + '/public',
	},
	module: {
		loaders: [
			{
				test: /.js?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2']
			},
			{
				test: /.html$/,
				loader: 'file?name=[name].[ext]'
			}
		]
	},
	devtool: 'cheap-module-source-map'
}
