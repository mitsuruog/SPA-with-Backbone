module.exports = function (grunt) {

	grunt.initConfig({

		jshint: {
			all: ['Gruntfile.js',
				'js/*.js',
				'js/models/**/*.js',
				'js/collections/**/*.js',
				'js/views/**/*.js']
		},
		watch: {
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['jshint']
			},
			stylus: {
				files: ['css/styl/*.styl'],
				tasks: ['stylus']
			},
			handlebars: {
				files: ['hbs/**/*.hbs'],
				tasks: ['handlebars']
			},
			md: {
				files: ['docs/**/*.md'],
				tasks: ['concat:md']
			}
		},
		stylus: {
			options: {
				compress: false
			},
			compile: {
				files: {
					'css/main.css': ['css/styl/*.styl']
				}
			}
		},
		handlebars: {
			compile: {
				options: {
					namespace: "MyApp.Templates",
					processName: function (filename) {
						var pieces = filename.split("/");
						return pieces[pieces.length - 1].replace(/.hbs$/, '');
					}
				},
				files: {
					"js/templates/layout.js": "hbs/*.hbs"
				}
			}
		},
		concat: {
			md: {
				options: {
					separator: '\r\n\r\n',
					process: function(src, filepath) {
						return src.replace(/..\/img/gi, './img');
					}
				},
				src: ['docs/**/*.md'],
				dest: 'README.md'
			}
		}
	});

	// Load the plugin.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Default task(s).
	grunt.registerTask('default', ['watch']);

};