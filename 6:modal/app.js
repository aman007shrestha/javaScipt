// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const closeBtn = document.querySelector('.close-btn');
const modalBtn = document.querySelector('.modal-btn');
console.log(closeBtn);
console.log(modalBtn);
const modal = document.querySelector('.open-modal'); 
modalBtn.addEventListener('click', function() {
	console.log("open modal");
	console.log(modal.classList);
	modal.style.visibility ="visible";
});
closeBtn.addEventListener("click", function() {
	modal.style.visibility = "hidden";
}); 