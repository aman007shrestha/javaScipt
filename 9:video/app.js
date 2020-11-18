// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// preloader bits
const preLoader = document.querySelector(".preloader");
window.addEventListener('load', function() {
	preLoader.classList.add("hide-preloader");
});


// pause play bits
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
console.log(btn);
btn.addEventListener("click", function() {
	if (!btn.classList.contains("slide")) {
		btn.classList.add("slide");
		console.log(video);
		video.pause();
	} else {
		btn.classList.remove("slide");
		video.play();
	}

	/*console.log(e.currentTarget.classList)
	const classes = e.currentTarget.classList;
	//classes.toggle('slide');
	/*
	if (classes.contains('slide')) {

		console.log("yes");
	} else {
		console.log("No");
		e.currentTarget.classList.add('slide');
	} */
}); 