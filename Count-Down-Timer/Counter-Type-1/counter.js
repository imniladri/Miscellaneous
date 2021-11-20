	
	var date = new Date("Oct 4, 2021 08:00:00").getTime();

	function bday()
	{
		var now = new Date().getTime();
			gap = date - now;

			var seconds = 1000;
			var minutes = seconds * 60;
			var hours = minutes * 60;
			var days = hours * 24;

			var d = Math.floor(gap/(days));
			var h = Math.floor((gap % (days)) / (hours));
			var m = Math.floor((gap % (hours)) / (minutes));
			var s = Math.floor((gap % (minutes)) / seconds);

			document.getElementById('day').innerText = d;
			document.getElementById('hour').innerText = h;
			document.getElementById('minute').innerText = m;
			document.getElementById('second').innerText = s;	
	}
	setInterval(function()
	{
		bday();
	}, 1000)