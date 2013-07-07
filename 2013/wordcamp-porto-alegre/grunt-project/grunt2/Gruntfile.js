module.exports = function( grunt ) {
	grunt.initConfig({
		cssmin : {
			combine : {
				files : {
					'style.css' : [ 'assets/css/style.css' ]
				}
			}
		} // cssmin
	});

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
};