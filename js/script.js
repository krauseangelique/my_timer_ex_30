console.log('hello world');// mon fichier script.js est bien appelé !

// datatime nbre secondes et je décompte nbre secondes
const allBtns = document.querySelectorAll("[data-time]");


function handleSec(e) {
  const btnClicked = e.target;
  const btnClickedData = btnClicked.dataset.time;

  console.log(btnClickedData);
  
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

  document.querySelector('.display__time-left').textContent = hhmmssFormat; // mise en place du pattern avec textContent
  
}

// Appel de la fonction dans une forEach pour AFFICHER au click sur le bandeau de bouton, le compteur
allBtns.forEach(btn => {
  btn.addEventListener('click', handleSec);
});

