console.log('hello world');// mon fichier script.js est bien appelé !

// datatime nbre secondes et je décompte nbre secondes
const allBtns = document.querySelectorAll("[data-time]");
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');



/* documentation sur le décompteur en anglais : countdown is on (... est lancé !)
https://www.delftstack.com/fr/howto/javascript/count-down-timer-in-javascript/

*/

function timer(seconds){
  clearInterval(countdown);
  const date = Date.now();
  const then = date + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(()=>{
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft < 0){
      clearInterval(countdown)
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000)
}

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : "" }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}


function displayEndTime(timestamp){
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour -12 : hour;
  const minutes = end.getMinutes();
  displayEndTime.textContent = `Revenir à ${adjustedHour}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}


allBtns.forEach(btn => {
  btn.addEventListener('click', startTimer);
});
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
// function handleSec() {
  //   clearInterval(countdown);
  //   let btnClickedData = this.dataset.time;
  //   let date = new Date();
  //   date.setSeconds(btnClickedData);
  
  //   if (btnClickedData < 3600){
    //     hhmmssFormat = date.toISOString().substring(14,19);
//     console.log(hhmmssFormat);

//   } else{
//     hhmmssFormat = date.toISOString().substring(11,19);
//     console.log(hhmmssFormat);
//   }
  
  // document.querySelector('.display__time-left').textContent = hhmmssFormat; // mise en place du pattern avec textContent le compteur est mis à sa place
 
  
  // document.querySelector('.display__end-time').textContent = 'Revenir à '+ then ;

  
  // transformation des secondes en pattern 01:00:00 pour 1h=3600sec



   

  // + (date + (setSeconds)); // heure courante + l'espace timer
  

  // TRANSFORMATION en décompteur

  

// Appel de la fonction dans une forEach pour AFFICHER au click sur le bandeau de bouton, le compteur
