$(document).ready(function() {
	var wind = $('#test').window();
	$('.about-window').window({
		title: "About",
		contents: $(abtPage)
	});

	$('.posts-window').window({
		title: "Post"
	});

	$('.personalstatement-window').window({
		title: "Personal Statement",
		contents: $(persPage)
	});

	$('.messenger-window').window({
		title: "Let's Chat"
	});

	$('.art-window').window({
		title: "Art"
	});

	$('.projects-window').window({
		title: "Projects",
		contents: $(innerWindow),
		id: "projects"
	});

	var a=4;
	$('#start').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.start-menu').toggleClass('open');
	});
	$('li').on('click', function(e) {
		$('.start-menu').toggleClass('open');
		console.log('.'+this.classList+'-window');
		$('.'+this.classList+'-window').show();
		//$('#end-split').after('<div class="button" id="email">'+this.classList+'</div>');
		
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

	$('.window').draggable({
		cancel: '.window-body'
	});
	$('.desktop-icon').draggable();

	
	//wind.draggable({handle: ".window-title2"});

	$.get('resources/windows/projects.html', function(data) {
		conole.log(data);
	});
});


var abtPage = 	'<img src="resources/icons/me.bmp" alt="" style="display: inline-block;">' +
				'<p style="display: inline-block; vertical-align: top; margin-left: 3px">' +
				"Hi, I'm Rhiannan. I'm in my third year at Georgia Tech. I like </br>" +
				"making games and interesting things. I appreciate math, </br>" +
				"science, technology, and art in equal measures. I hope we </br>" +
				"can be great friends.</p>";
var persPage = '<iframe width="560" height="315" src="https://www.youtube.com/embed/v0lGQQjL-vc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';


var projectContents= '<h1>2017</h1></br>'
		+'<h3>snake-a-thon V2</h3><p>Revisiting a project I did last year in Gamemaker. This time, in Unity!</p>'
		+'<h3>Rat Unity</h3><p>Made for a class. Mostly an early experiment in dialogue trees and unlit shaders.</p>'
		+'<h3>snake-a-thon</h3><p>A fun spin on the classic game Snake. Created for a club I help run at Georgia Tech (VGDev), with the only rule being the game must be built in one semester.</p>'
		+'<h1>2016</h1></br>'
		+'<h3>Analog Dreams</h3><p>Another game made for VGDev. Co-lead with Sean Flanagan. Your standard 3D physics puzzler with portals, but with a twist!</p>'
		+'<h3>Space Squids</h3><p>First ever game with VGDev <3. My only work on this was creating the titular squid model, and providing necessary emotional support.</p>';
var innerWindow = '<div  class="contents-window">'+projectContents+'</div><div id= "projects" class="button">YEET</div>';
