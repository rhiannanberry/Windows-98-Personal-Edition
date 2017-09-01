$(document).ready(function() {
	$('#start').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.start-menu').toggleClass('open');
	});
});