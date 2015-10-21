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
    gitrm: {
      your_target: {
        files:{
          src: ['dist/*.eot', 'dist/*.woff', 'dist/*.ttf']
        }
       }
    }
  })

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-git');

  grunt.registerTask('default', ['gitrm', 'webfont'])
}
