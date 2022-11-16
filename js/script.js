console.log('hello world');
// datatime 20 secondes et je décompte 20 sec
const allBtns = document.querySelectorAll("[data-time]");

console.log(allBtns[0].dataset.time);

function handleTwentySec() {
  document.querySelector(".display__time-left").textContent =
    allBtns[0].dataset.time;
}
handleTwentySec();

