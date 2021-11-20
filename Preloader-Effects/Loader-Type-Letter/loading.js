// Loader Hidden after Window/Page/Website Load

var preloader = document.getElementById("preloader");

window.addEventListener('load', function(){
	preloader.style.transform = 'translateY(-100%)';
})




// Animation for Text (anime.js)

var textWrapper = document.querySelector('.loader .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); // Each Letter Wrapped in a SPAN

anime.timeline({loop: true})
  .add({
    targets: '.loader .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.loader',
    opacity: 0,
    duration: 300,
    easing: "easeOutExpo",
    delay: 300
  });