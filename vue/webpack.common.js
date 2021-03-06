const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: {
		"admin/allowed-groups": path.join(__dirname, 'src', 'allowed-groups.js'),
		"admin/commands": path.join(__dirname, 'src', 'commands.js'),
		"admin/signaling-server": path.join(__dirname, 'src', 'signaling-server.js'),
		"admin/stun-server": path.join(__dirname, 'src', 'stun-server.js'),
		"admin/turn-server": path.join(__dirname, 'src', 'turn-server.js'),
	},
	output: {
		path: path.resolve(__dirname, '../js'),
		publicPath: '/js/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['vue-style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [new VueLoaderPlugin()],
	resolve: {
		alias: {
			Components: path.resolve(__dirname, 'src/components/'),
			Views: path.resolve(__dirname, 'src/views/')
		},
		extensions: ['*', '.js', '.vue', '.json']
	}
};
