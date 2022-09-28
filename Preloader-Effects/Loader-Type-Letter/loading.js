// Loader Hidden after Window/Page/Website Load

var preloader = document.getElementById("preloader");

window.addEventListener('load', function(){
	preloader.style.transform = 'translateY(-100%)';
})
