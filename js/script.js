console.log('hello world');
// datatime 20 secondes et je décompte 20 sec
const allBtns = document.querySelectorAll("[data-time]");


function handleTwentySec(e) {
  const btnClicked = e.target;
  const btnClickedData = btnClicked.dataset.time;
  console.log(btnClickedData);


  let date = new Date(null);
  date.setSeconds(btnClickedData);
  let hhmmssFormat = date.toISOString().substr(11,8);
  console.log(hhmmssFormat);
  document.querySelector('.display__time-left').textContent = hhmmssFormat;
  
}


allBtns.forEach(btn => {
  btn.addEventListener('click', handleTwentySec);
});

