console.log('hello world');
// datatime 20 secondes et je décompte 20 sec
const allBtns = document.querySelectorAll("[data-time]");


function handleTwentySec(e) {
  const btnClicked = e.target;
  const btnClickedData = btnClicked.dataset.time;

 document.querySelector('.display__time-left').textContent = btnClickedData;
 console.log(btnClickedData);
 let date = new Date(null);
 date.setSeconds(seconds);

}


allBtns.forEach(btn => {
  btn.addEventListener('click', handleTwentySec);
});

