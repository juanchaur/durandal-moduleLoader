/*global module, require */
module.exports = function( grunt ) {
    'use strict';

    // Livereload and connect variables
    var LIVERELOAD_PORT = 35729;

    var lrSnippet = require('connect-livereload')({
        port: LIVERELOAD_PORT
    });
    var mountFolder = function( connect, dir ) {
        return connect.static(require('path').resolve(dir));
    };
    var mixIn = require('mout/object/mixIn');


    // configurable paths
    var webappConfig = {
        root: 'webapp',
        app: 'webapp/app',
        // app: 'webapp/app',
        test: 'webapp/test',
        lib: 'lib',
    };

    var requireConfig = {
        baseUrl: '/webapp/app',
        paths: {
            'text': '../../lib/require/text',
            'modulesLoader': '../../lib/requirejs-moduleLoader/modulesLoader',
            'durandal':'../../lib/durandal/js',
            'plugins' : '../../lib/durandal/js/plugins',
            'transitions' : '../../lib/durandal/js/transitions',
            //'knockout': '../../lib/knockout/knockout-2.3.0',
            'knockout': '../../lib/knockout/knockout-3.1.0',
            'bootstrap': '../../lib/bootstrap/js/bootstrap',
            'jquery': '../../lib/jquery/jquery-1.9.1'
        },
        shim: {
            'bootstrap': {
                deps: ['jquery'],
                exports: 'jQuery'
           }
        }
    };

    grunt.initConfig({
            webapp: webappConfig,
            
            pkg: grunt.file.readJSON('package.json'),
            
            clean: {
                build: ['build/*']
            },

            connect: {
                build: {
                    options: {
                        port: 9001,
                        hostname: 'localhost',
                        base: 'build'
                    }
                },
                dev: {
                    options: {
                        port: 8999,
                        hostname: 'localhost',
                        middleware: function( connect ) {
                            return [lrSnippet, mountFolder(connect, '.')];
                        }
                    }
                }
            },

            copy: {
                lib: {
                    src: 'lib/**/**',
                    dest: 'build/'
                },
                index: {
                    src: 'index.html',
                    dest: 'build/'
                },
                css: {
                    src: 'css/**',
                    dest: 'build/'
                }
            },

            open: {
                dev: {
                    path: 'http://localhost:<%= connect.dev.options.port %>/_SpecRunner.html'
                },

                notest: {
                    path: 'http://localhost:<%= connect.dev.options.port %>/'
                },

                build: {
                    path: 'http://localhost:<%= connect.build.options.port %>'
                }
            },

            durandal: {
                main: {
                    src: ['webapp/app/**/*.*', 'lib/durandal/**/*.js'],
                    options: {
                        name: '../lib/require/almond-custom',
                        baseUrl: requireConfig.baseUrl,
                        mainPath: 'webapp/app/main',
                        paths: mixIn({}, requireConfig.paths, { 'almond': '../lib/require/almond-custom.js' }),
                        exclude: [],
                        optimize: 'none',
                        out: 'build/app/main.js'
                    }
                }
            },

            jasmine: {
                dev: {
                    src: '<%= webapp.app %>/**/*.js',
                    options: {
                        specs: '<%= webapp.test %>/specs/dev/**/*spec.js',
                        
                        keepRunner: true,
                        template: require('grunt-template-jasmine-requirejs-preloader'),
                        //template: require('grunt-template-jasmine-requirejs'),
                        //template: '<%= webapp.test %>/index.html',
                        templateOptions: {
                            //requireConfigFile: '<%= webapp.app %>/main.js',
                            requireConfig: requireConfig,
                            preloads: ['modulesLoader']
                        },
                        //host: 'http://localhost:<%= connect.dev.options.port %>/_SpecRunner.hmtl'
                        host: 'http://localhost:<%= connect.dev.options.port %>/'
                    }
                },
                build: {
                    options: {
                        specs: 'test/specs/build/**/*spec.js',
                        keepRunner: true,
                        template: require('grunt-template-jasmine-requirejs-preloader'),
                        templateOptions: {
                            requireConfig: requireConfig
                        }
                    }
                }
            },

            jshint: {
                all: ['Gruntfile.js', 'webapp/app/**/*.js', 'test/specs/**/*.js']
            },

            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n' +
                        '* Copyright (c) <%= grunt.template.today("yyyy") %> YourName/YourCompany \n' +
                        '* Available via the MIT license.\n' +
                        '* see: http://opensource.org/licenses/MIT for blueprint.\n' +
                        '*/\n'
                },
                build: {
                    src: 'build/app/main.js',
                    dest: 'build/app/main-built.js'
                }
            },

            watch: {
                build: {
                    files: ['build/**/*.js'],
                    tasks: ['jasmine:build']
                },
                dev: {
                    files: ['test/specs/dev/**/*spec.js', 'app/**/*.js'],
                    //tasks: ['jasmine:dev'],
                    options: {
                        livereload: true
                    }
                }
            }
        }
    );

// Loading plugin(s)
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-durandal');

//Resgistering Tasks
    grunt.registerTask('build', ['jshint', 'jasmine:dev', 'clean', 'copy', 'durandal:main', 'uglify', 'jasmine:build', 'connect:build', 'open:build', 'watch:build']);
    
    grunt.registerTask('default', [
        'jshint',
        //'jasmine:dev',
        'connect:dev:livereload',
        'open:dev',
        'watch:dev']);
    
    grunt.registerTask('test', [
        'jasmine:dev',
        //'connect:dev:livereload',
        //'open:notest',
        'open:dev',
        //'watch:dev'
    ]);

    grunt.registerTask('notest', ['jshint', 'connect:dev:livereload', 'open:notest', 'watch:dev']);
    

};
