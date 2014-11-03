'use strict';

module.exports = function(grunt) {
    grunt.config.init({
       connect: {
           server: {
               options: {
                   hostname: 'localhost',
                   useAvailablePort: true,
                   base: 'src',
                   open: true,
                   keepalive: true
               }
           }
       }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
