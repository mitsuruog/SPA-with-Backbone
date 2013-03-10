module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js']
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
      }
    },
    yuidoc: {
      //      pkg: grunt.file.readJSON('package.json'),
      compile: {
        //        name: '<%= pkg.name %>',
        //        description: '<%= pkg.description %>',
        //        version: '<%= pkg.version %>',
        //        url: '<%= pkg.homepage %>',
        name: 'spa-with-backbone',
        description: 'Single page application build with Backbone.js',
        version: '0.1.0',
        url: 'https://github.com/mitsuruog/SPA-with-Backbone',
        options: {
          paths: 'js',
          outdir: 'docs'
        }
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
          processName: function(filename) {
            var pieces = filename.split("/");
            return pieces[pieces.length - 1].replace(/.hbs$/ , '');
          }
        },
        files: {
          "js/template.js": "hbs/*.hbs"
        }
      }
    }
  });

  // Load the plugin.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};