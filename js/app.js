let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function time() {
  let mytime = new Date();

  hr.innerHTML = mytime.getHours();
  min.innerHTML = mytime.getMinutes();
  sec.innerHTML = mytime.getSeconds();
}
setInterval(time, 1000);