const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
console.log()


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll('.deadline-format h4');
console.log(items);

let futureDate = new Date(2020, 10, 13, 21, 30, 0);
console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
//console.log(hours);

let month = futureDate.getMonth();
//console.log(months[month]); 
let day = futureDate.getDay();
//console.log(weekdays[day]);
//console.log(futureDate.getDate());

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${futureDate.getDate()} ${months[month]} ${year} ${hours}:${minutes}am`;


// get mill second of future date and current date
const futureTime = futureDate.getTime();
console.log(futureTime);
//let currentDate = new Date();
//console.log(futureDate - currentDate);


function getRemainingTime() {
  const today = new Date().getTime();
  //console.log(today);
  //console.log(futureTime - today);
  let timeDiff = futureTime - today;
  //console.log(timeDiff);
  // values in a ms 
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate
  //console.log(timeDiff/oneDay);
  let days = timeDiff/oneDay;
  days = Math.floor(days)
  //console.log(days)
  let hours = Math.floor((timeDiff % oneDay ) / oneHour);
  //console.log(hours);
  let minutes = Math.floor((timeDiff%oneHour) / oneMinute);
  //console.log(minutes);
  let seconds = Math.floor((timeDiff%oneMinute) / 1000);
  //console.log(seconds);
  // set values array
  const values = [days, hours, minutes, seconds];
  // iterate over items
  function format(item) {
    if (item<10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });

  // if expired
  if (timeDiff < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }


}
// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

