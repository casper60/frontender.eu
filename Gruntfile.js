module.exports = function (grunt) {
	grunt.initConfig({
		
		less: {
			development: {
				options: {
					paths: ['styles/less']
				},
				files: {
					'styles/css/main.css': 'styles/less/main.less'
				}
			},
			production: {
				options: {
					paths: ['styles/less'],
					plugins: [
						new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']}),
						new (require('less-plugin-clean-css'))()
					],
					//modifyVars: {}
				},
				files: {
					'styles/css/main.css': 'styles/less/main.less'
				}
			}
		},

		watch: {
			stylesheets: {
				files: [
					'styles/less/*.less',
					'styles/less/**/*.less',
					'!styles/less/framework',
					'!styles/less/mixins.less'
				],
				tasks: ['less:development']
			}
		}

	});
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};