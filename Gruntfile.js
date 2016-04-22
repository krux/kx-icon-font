module.exports = function(grunt) {

  grunt.initConfig({
    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'dist',
        destCss: 'dist',
        options: {
          font: 'kx-icon-font',
          fontFilename: 'kx-icon-font-{hash}',
          relativeFontPath: 'dist',
          template: 'font_template.scss',
          htmlDemo: false
        }
      }
    },
    clean: {
      dist: {
        files: {
          src: ['dist/*', '!dist/*.scss']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'webfont']);
};
