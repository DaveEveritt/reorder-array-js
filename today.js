// returns 7 day names with today first
function startWith() {
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  let today = new Date();
  let start = today.getDay(); //gets day number
  if (start == 0) { //if Sunday, days are in order
      return days
  }
  else { //if not Sunday, start days with today
      return days.slice(start).concat(days.slice(0,start))
  }
}

// Example to put the day names in your HTML
const days = document.getElementById("days");
days.innerHTML = startWith();
