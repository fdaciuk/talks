module.exports = function( grunt ) {
	grunt.initConfig({
		cssmin : {
			combine : {
				files : {
					'style.css' : [ 'assets/css/style.css' ]
				}
			}
		}, // cssmin

		uglify : {
			options : {
				mangle : true
			},

			js : {
				files : {
					'assets/js/main.js' : [ 'assets/_js/scripts.js' ]
				}
			}
		} // uglify
	});

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
};