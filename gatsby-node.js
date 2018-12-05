const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				Components: `${__dirname}/src/components`,
        Images: `${__dirname}/src/images`,
        Styles: `${__dirname}/src/styles`,
      },
      modules: [
        path.join(__dirname, 'node_modules')
      ]
		},
	})
}