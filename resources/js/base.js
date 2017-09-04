$(document).ready(function() {
	var a=4;
	$('#start').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.start-menu').toggleClass('open');
	});
	$('li').on('click', function(e) {
		$('.start-menu').toggleClass('open');
		$('.'+this.classList).toggleClass('open');
	});
	$('.button.close').on('click', function(e) {
		$('.'+e.target.id).toggleClass('open');
	});
	$('.window-container div').on('click', function(e) {
        $(this).addClass('top').removeClass('bottom');
        $(this).siblings().removeClass('top').addClass('bottom');
        $(this).css("z-index", a++);
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

	$('.window').draggable();
	$('.desktop-icon').draggable();
});