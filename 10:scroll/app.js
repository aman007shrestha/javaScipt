// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
var dateObject = new Date();
const currentYear = dateObject.getFullYear()
console.log(dateObject.getFullYear());
date.textContent = currentYear;
// ********** close links ************
window.addEventListener('load', function(){
	window.scrollTo({
			left:0,
			top:0,
		});
} );
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener('click', function(){
	//linksContainer.classList.toggle("show-links");
	//lets add dynamic height instead
	const containerHeight = linksContainer.getBoundingClientRect().height;
	//console.log(containerHeight);
	//height will be 0  so take links class instead
	const linksHeight = links.getBoundingClientRect().height;
	//console.log(linksHeight);
	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function() {
	//console.log(window.pageYOffset);
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;
	if (scrollHeight > navHeight) {
		//console.log("yo");
		navbar.classList.add('fixed-nav');
	} else {
		navbar.classList.remove('fixed-nav');
	}
	if (scrollHeight > 500) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}


});


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link) {
	link.addEventListener('click', function(e) {
		// prevent defaults
		e.preventDefault();
		// navigate to specific spot
		const id = e.currentTarget.getAttribute("href").slice(1);
		console.log(id);
		const element = document.getElementById(id);

		//calculate the heights
		const navHeight = navbar.getBoundingClientRect().height;
		const containerHeight = linksContainer.getBoundingClientRect().height;
		const fixedNav = navbar.classList.contains('fixed-nav');
		let position = element.offsetTop - navHeight;
		if (!fixedNav) {
			position = element.offsetTop - navHeight;
		}

		if (navHeight > 82) {
			position = position + containerHeight;
		}
		
		//console.log(position);
		window.scrollTo({
			left:0,
			top:position,
		});
		// for small screen
		linksContainer.style.height = 0;
		console.log(linksContainer.style.height);

	});

});


