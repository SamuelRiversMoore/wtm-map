var path = require("path");

module.exports = {
	runtimeCompiler: true,
	baseUrl: "./",

	pluginOptions: {
		i18n: {
			locale: "en",
			fallbackLocale: "en",
			localeDir: "locales",
			enableInSFC: false
		}
	},
	configureWebpack: {
		optimization: {
			splitChunks: {
				minSize: 10000,
				maxSize: 250000
				// cacheGroups: {
				// 	node_vendors: {
				// 		test: /[\\/]node_modules[\\/]/,
				// 		chunks: "all",
				// 		priority: 1
				// 	}
				// }
			}
		},
		resolve: {
			alias: {
				"./images/layers.png$": path.resolve(__dirname, "./node_modules/leaflet/dist/images/layers.png"),
				"./images/layers-2x.png$": path.resolve(__dirname, "./node_modules/leaflet/dist/images/layers-2x.png"),
				"./images/marker-icon.png$": path.resolve(__dirname, "./node_modules/leaflet/dist/images/marker-icon.png"),
				"./images/marker-icon-2x.png$": path.resolve(__dirname, "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
				"./images/marker-shadow.png$": path.resolve(__dirname, "./node_modules/leaflet/dist/images/marker-shadow.png")
			}
		}
	},
	lintOnSave: false
};
