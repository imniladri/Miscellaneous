$(document).click(function(){
	var e = document.createElement("div");
		e.setAttribute('id','click'), document.body.appendChild(e),
		e.style.top = event.pageY + 'px',
		e.style.left = event.pageX + 'px',
		setTimeout(function(){
			document.body.removeChild(e)
		},1000)
});