(function( window, document, undefined ) {

	var myObj = (function() {
		function init() {
			sum( 2, 3 );
		}

		function sum( n1, n2 ) {
			console.log( n1 + n2 );
		}

		return {
			init : init
		};
	})();

	myObj.init();

})( window, document );