module.exports = function( grunt ) {
	grunt.initConfig({
		assets_path : 'assets',
		css_src : '<%= assets_path $>/css',
		js_src : '<%= assets_path %>/_js',
		js_build : '<%= assets_path %>/js',

		cssmin : {
			combine : {
				files : {
					'style.css' : [ '<%= css_src %>/style.css' ]
				}
			}
		}, // cssmin

		uglify : {
			options : {
				mangle : true
			},

			js : {
				files : {
					'<%= js_build %>/main.js' : [ '<%= js_src %>/scripts.js' ]
				}
			}
		} // uglify
	});

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	// Task default
	grunt.registerTask( 'default', [ 'cssmin', 'uglify' ] );
};