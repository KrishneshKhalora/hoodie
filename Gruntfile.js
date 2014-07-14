module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    release: {
      options: {
        bump: {
          files: ['package.json'],
          commitFiles: [
            'package.json',
            'CHANGELOG.md'
          ]
        },
        tasks: ['test', 'changelog']
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: 'jshint'
    },

    jshint: {
      files: [
        'Gruntfile.js',
        'lib/**/*.js',
        'bin/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    simplemocha: {
      options: {
        reporter: 'spec',
        ignoreLeaks: true
      },
      full: { src: ['test/runner.js'] }
    },

    nodeunit: {
      all: ['test/test-*.js']
    }

  });

  grunt.registerTask('test', [
  //  'jshint',
    'nodeunit:all',
    'simplemocha:full'
  ]);

  // Default task.
  grunt.registerTask('default', ['test']);
};
