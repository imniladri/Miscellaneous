
$(window).scroll(function(){
	var scroll = $(window).scrollTop(),
			dh = $(document).height(),
			wh = $(window).height(),
		 value = (scroll / (dh - wh)) * 100;

	$('#scrollbar').css("width", value + "%");
});