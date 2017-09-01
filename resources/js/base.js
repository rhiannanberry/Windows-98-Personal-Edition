$(document).ready(function() {
	$('#start').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.start-menu').toggleClass('open');
	});

//TODO: Create popup for successful copy and also add fail safes
	$('#email').on('click', function(e) {
		var txt = document.createElement('textarea');
		txt.textContent = "rberry36@gatech.edu";
		txt.style.position = 'fixed';
		document.body.appendChild(txt);
		txt.select();
		document.execCommand('copy');
		document.body.removeChild(txt);
	});
});