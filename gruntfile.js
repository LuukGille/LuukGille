module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			sass: {
				files: ['sass/*scss'],
				tasks: ['sass', 'cssmin'],
			}
		},

		sass: {
			dist: {
				files: {
					'css/style.css' : 'sass/style.scss'
				}
			}
		},

		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},

		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'dest/all.min.js' : ['js/loadName.js', 'js/slider.js']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['watch']);
};