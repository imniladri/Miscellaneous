	var burst = new mojs.Burst({
	  	left: 0, top: 0,
	  	radius: { 0: 50 },
	  	angle: { 0: 15 },
	  	count: 14,
	  	children: 
		{
		    radius: 4,
		    fill: '#FE346E',
		    scale: { 1: 0, easing: 'quad.in' },
		    pathScale: [.8, null],
		    degreeShift: [13, null],
		    duration: [500, 700],
		    easing: 'quint.out'
		} 
	});


	$(document).on('click', function(e){
		var axis = { x: e.pageX, y: e.pageY };
		burst.tune(axis).replay();
	});