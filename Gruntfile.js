'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-shell');


    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            shell: {
                files: ['source/{,*/}*.rst'],
                tasks: ['shell:makeHTML']
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        open: {
            server: {
                path: 'http://localhost:9000'
            }
        },
        shell: {
            makeHTML: {
                command: 'make html'
            },
            open: {
                command: 'open localhost:9000'
            }
        },
        connect: {
          server: {
            options: {
              port: 9000,
              base: 'build/html'
            }
          }
        }

    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', function (target) {

        grunt.task.run([
            'shell:makeHTML',
            'connect:server',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'server'
    ]);


};
