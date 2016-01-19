module.exports = function (grunt) {
  grunt.initConfig({
    typescript: {
      base: {
        src: ['./src/app.ts', './src/*/*.ts'],
        dest: './src/main.js',
        options: {
          target: 'es5',
          sourceMap: true,
          noImplicitAny:true
        }
      }
    },

    uglify: {
      dist: {
        files: {
          './src/main.min.js': './src/main.js'
        },
        options: {
          sourceMap: true,
          sourceMapIn: './src/main.js.map'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('default', ['typescript', 'uglify']);
};
