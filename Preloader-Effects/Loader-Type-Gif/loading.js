$(window).on('load', function() {
	$('#preloader').css({
		"transform": "translateY(-100%)",
		"transition-delay": "0.6s"
	});
	$('img.loader').css({
		"opacity": "0",
		"transform": "translate(-50%,-100%)",
		"transition-delay": "0.3s"
	});
});