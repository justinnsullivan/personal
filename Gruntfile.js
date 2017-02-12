module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    './dist/app.css': './src/scss/app.scss'
                }
            }
        },
        exec: {
            webpack: 'webpack'
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "./src/scss/**/*.scss",
                        "./src/**/*.js",
                        "./dist/*.css",
                        "./dist/*.html"
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
                options: {
                    reload: false
                },
                files: './src/scss/**/*.scss',
                tasks: ['sass']
            },
            webpack: {
                files: ['./src/**/*.js','./src/**/*.json'],
                tasks: ['exec']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('webpack', ['exec']);
    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build', 'browserSync', 'watch']);
}
