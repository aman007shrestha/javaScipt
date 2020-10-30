//set initial count
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
//console.log(btns);
btns.forEach(function(btn) {
	btn.addEventListener("click", function(event) {
      //console.log(event);
      //console.log(event.currentTarget);
      //console.log(event.currentTarget.classList); // gives class list
      const styles = event.currentTarget.classList;
      //console.log(styles);
      if (styles.contains("decrease")) {
      	count --;
      }
      else if (styles.contains("reset")) {
      	count = 0;
      }
      else {
      	count ++;
      }
      // changing colors
      if (count > 0) {
      	value.style.color = "green";
      }
      if (count < 0) {
      	value.style.color = "red";
      }
      if (count == 0) {
      	value.style.color = "#222";
      }
      value.textContent = count;
	});
  
  //console.log(btn);
});