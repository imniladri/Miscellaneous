$(window).on('load', function() {
	$('#preloader').css({
		"transform": "translateY(-100%)",
		"transition-delay": "0.6s"
	});
	$('.loader').css({
		"opacity": "0",
		"transition-delay": "0.3s"
	});
});