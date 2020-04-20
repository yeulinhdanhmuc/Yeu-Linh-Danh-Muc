$(document).ready(function() {
			$('a.show-menu').click( function( event ){
			$('header').toggleClass('default');
			$('header').toggleClass('show');
	
			
	return false;
});

$('a.link').click( function( event ){
	$('header').toggleClass('show');
	$('header').toggleClass('default');

  return false;
});

	});