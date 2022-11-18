console.log('hello world');// mon fichier script.js est bien appelé !

// datatime nbre secondes et je décompte nbre secondes
const allBtns = document.querySelectorAll("[data-time]");

/* documentation sur le décompteur en anglais : countdown is on (... est lancé !)
https://www.delftstack.com/fr/howto/javascript/count-down-timer-in-javascript/

*/


function handleSec(e) {

  // mon bouton cliqué
  let btnClicked = e.target;
  let btnClickedData = btnClicked.dataset.time;

  console.log(btnClickedData);

  // diminution du compteur jusqu'à 0 seconde
 btnClickedData = btnClickedData - 1;
 if (btnClickedData < 0) { clearInterval(handleSec)};
  
  // transformation des secondes en pattern 01:00:00 pour 1h=3600sec
  let date = new Date(null);
  date.setSeconds(btnClickedData);

  let hhmmssFormat = "";


    if(btnClickedData < 3600){
      hhmmssFormat = date.toISOString().substring(14,19);
      console.log(hhmmssFormat);

    }else{
      hhmmssFormat = date.toISOString().substring(11,19);
      console.log(hhmmssFormat);
    }

  document.querySelector('.display__time-left').textContent = hhmmssFormat; // mise en place du pattern avec textContent le compteur est mis à sa place

  // TRANSFORMATION en décompteur

  
}

// Appel de la fonction dans une forEach pour AFFICHER au click sur le bandeau de bouton, le compteur
allBtns.forEach(btn => {
  btn.addEventListener('click', handleSec);
});

