module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          sourceMap: true
        },
        files: {
          './client/public/app.css': './client/scss/app.scss'
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "./client/*.js",
            "./client/public/*.css",
            "./client/public/*.html"
          ]
        },
        options: {
          watchTask: true,
          proxy: "http://localhost:3000/"
        }
      }
    },
    nodemon: {
      dev: {
       script: 'server/index.js'
      }
    },
    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: './client/scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','browserSync', 'watch']);
}
