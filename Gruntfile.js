module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', 'app/js/**/*.js']
    },
    watch: {
      scripts: {
        files: ['app/js/**/*.js'],
        tasks: ['jshint', 'yuidoc']
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
          paths: 'app/js',
          outdir: 'app/docs'
        }
      }
    }
  });

  // Load the plugin.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};