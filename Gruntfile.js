module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            width: 1200,
            suffix: 'v3',
            quality:80
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'images/'
        }]
      }
    },

    clean: {
      dev: {
        src: ['images'],
      },
    },

    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'img/svg/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
