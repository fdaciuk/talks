module.exports = function( grunt ) {
	grunt.initConfig({
		pkg : grunt.file.readJSON( 'package.json' ),
		banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today( "yyyy-mm-dd" ) %> */',

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
			options : { banner : '<%= banner %>' },

			head_scripts : {
				// options : { banner : '<%= banner %>' },

				files : {
					'<%= js_build %>/head-scripts.js' : [ '<%= js_src %>/lib/modernizr.js' ]
				}
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