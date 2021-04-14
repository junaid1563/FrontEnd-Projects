let newDate = prompt("Enter a Date");

function countdown() {
  let newYearDate = new Date(newDate);
  let currentDate = new Date();
  let seconds = (newYearDate - currentDate) / 1000;

  let days = Math.floor(seconds / 3600 / 24);
  let hours = Math.floor(seconds / 3600) % 24;
  let minutes = Math.floor((seconds / 60) % 60);
  let seco = Math.floor(seconds % 60);

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = formatTime(hours);
  document.querySelector("#minutes").innerHTML = formatTime(minutes);
  document.querySelector("#seconds").innerHTML = formatTime(seco);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(countdown, 1000);
