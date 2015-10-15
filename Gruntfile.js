module.exports = function(grunt) {

  grunt.initConfig({
    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'dist',
        destCss: 'dist',
        options: {
          font: 'kx-icon-font',
          relativeFontPath: 'dist',
          template: 'font_template.scss',
          htmlDemo: false
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont'])
}
