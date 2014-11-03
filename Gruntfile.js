'use strict';

module.exports = function(grunt) {
    grunt.config.init({
        eslint: {
            src: ['*.js', 'public/**/*.js', '!public/js/lib/*.js'],
            options: {
                config: '.eslintrc'
            }
        }

    });

    grunt.loadNpmTasks('gruntify-eslint');
    grunt.registerTask('default',['eslint']);
};
