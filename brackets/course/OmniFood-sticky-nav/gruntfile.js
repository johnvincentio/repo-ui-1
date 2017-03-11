module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-autoprefixer');
    var autoprefixer = require('autoprefixer-core');

    grunt.initConfig({
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
            },
            main: {
                expand: true,
                flatten: true,
                src: 'resources/css/*.css',
                dest: 'dist/'
            }
        }  
    });

    grunt.registerTask('default', ['autoprefixer']);
};
