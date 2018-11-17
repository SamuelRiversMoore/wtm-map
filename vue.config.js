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
		}
	},
	lintOnSave: false
};
