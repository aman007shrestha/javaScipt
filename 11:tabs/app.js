/*
const aboutDisplay = document.querySelectorAll('.content');
console.log(aboutDisplay);
const btns = document.querySelectorAll(".tab-btn");
btns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		console.log(e.currentTarget.dataset.id);
		id = e.currentTarget.dataset.id;
		btns.forEach(function(button) {
			button.classList.remove('active');
		});
		e.currentTarget.classList.add('active');
		const element = document.getElementById(id);
		aboutDisplay.forEach(function(about) {
			about.classList.remove('active');
		})
		console.log(element);
		element.classList.add('active');
	});
});
*/

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener('click', function(e) {
	console.log(e.target);
	//console.log(e.target.dataset.id);
	id = e.target.dataset.id;
	if (id) {
		console.log("this has id");
		// remove active from other buttons
		btns.forEach(function(btn) {
			//console.log(btn.dataset);
			btn.classList.remove("active");
			e.target.classList.add("active");
			/*
			if (btn.dataset.id === id) {
				e.target.classList.add("active");
			} else {
				btn.classList.remove("active");
			}
			*/
			
		});
		// hide other articles
		articles.forEach(function(article) {
			article.classList.remove('active');

		})
		const element = document.getElementById(id);
		element.classList.add("active");


	}
});
console.log(articles);
console.log(about);