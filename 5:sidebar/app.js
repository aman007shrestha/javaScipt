const cross = document.querySelector('.close-btn');
//console.log(cross);
const sidebar = document.querySelector('.sidebar');
//console.log(sidebar.classList);
cross.addEventListener("click", function() {
	sidebar.classList.remove('show-sidebar');
	//console.log(cross + "clicked");
	//console.log(sidebar.classList);
});

const navToggler = document.querySelector(".sidebar-toggle");
//console.log(navToggler);
navToggler.addEventListener("click", function() {
	//console.log("where is sidebar");
	sidebar.classList.toggle('show-sidebar');

});