const path = require('path')
const webpack = require('webpack')

module.exports = {
	devtool: 'eval-source-map',

  	entry:  __dirname + "/src/index.js",
  	output: {
    	path: __dirname + "/public",
    	filename: "bundle.js"
  	},

  	devServer: {
  		contentBase: "./public",
  		historyApiFallback: true,
  		inline: true,
  		port: 8089,
  	},

  	module:{
  		rules: [
  			{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
            	test: /(\.css|\.less)$/,
            	use: [
            		{
            			loader: 'style-loader'
            		}, {
            			loader: 'css-loader'
            		}
            	]
            }
  		]
  	},

  	plugins: [
        new webpack.BannerPlugin('<qhx 820240134@qq.com>'),
        new webpack.optimize.UglifyJsPlugin(),
    ],
}