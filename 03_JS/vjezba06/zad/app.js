const rez = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click', () => {

  rez.innerHTML = ''

  const aString = document.getElementById('inputA').value

  const zad = Number(document.getElementById('zadatak').value)
let a = aString

  switch (zad) {


    case 1:
      //Pocinje  prvi zadatak

      if (!a) {

        rez.innerHTML = 'Obavezan unos'
        rez.style.color = 'red'
        return// return prekida IF, Switch i  function
      }



      switch (a.toLowerCase().trim()) {

        case 'start':
          rez.innerHTML = 'Pokretanje programa'
          rez.style.color = 'green'
          break

        case 'stop':

          rez.innerHTML = 'Zaustavlajnje programa'
          rez.style.color = 'yellow'
          break
        case 'pauza':
          rez.innerHTML = 'Pauziranje programa'
          rez.style.color = 'antique'
          break

        default:
          rez.innerHTML = ' Neodgovarajuca komanda'
          rez.style.color = 'red'

      }

      //Zavrsio 1. zadatak
      break

    case 2:

      //Pocinje  2. zadatak

      if (!a) {

        rez.innerHTML = 'Obavezan unos'
        rez.style.color = 'red'
        return
      }

      if (a.length > 1) {

        rez.innerHTML = 'Unesi samo jedno slovo'
        rez.style.color = 'red'
        return
      }

      switch (a.toLowerCase()) {

        case 'a':
        case 'b':
        case 'c':
          rez.innerHTML = 'Polozio'
          rez.style.color = 'green'

          break
        case 'd':
        case 'f':
          rez.innerHTML = 'Nisi polozio'
          rez.style.color = 'red'
          break
        default:
          rez.innerHTML = 'Unesi A, B, C, D , ili F'
          rez.style.color = 'red'
      }
      //Zavrsio 2. zadatak
      break
    
    
    case 3:
      // Pocinje 3. zadatak

   
      let aString = document.getElementById('inputA').value;


     a = Number(aString);

 
      if (a < 0 || a > 100 || isNaN(a)) {
        rez.innerHTML = 'Pogresan unos! Treba biti  broj od 0-100';
        rez.style.color = 'red';
        return;
      }

    
       switch (true) {
        case (a < 50):
          rez.innerHTML = 'Nedovoljan 🥺';
          rez.style.color = 'red';
          break;
        
        case (a >= 50 && a <= 64):
          rez.innerHTML = 'Dovoljan😏';
          rez.style.color = 'red';
          break;
        
        case (a >= 65 && a <= 79):
          rez.innerHTML = 'Dobar 🤨';
          rez.style.color = 'orange';
          break;
        
        case (a >= 80 && a <= 89):
          rez.innerHTML = 'Vrlo dobar 😉';
          rez.style.color = 'lightGreen';
          break;
        
        case (a >= 90 && a <= 100):
          rez.innerHTML = 'Odličan 👏';
          rez.style.color = 'limeGreen';
          break;
      }

      // Zavrsava 3. zadatak
      break
    
    case 4:
      


      if (!a) {
        
        rez.innerHTML = 'Polje  ne smije biti prazno'
        rez.style.color = 'red'
        return
      }

      switch (a.toLowerCase().trim()) {
        
        case 'janjetina':
        case 'svinjetina':
        case 'teletina':
     
          rez.innerHTML = 'meso 🥩'
          rez.style.color = 'green'
          break
        
        case 'jabuka':
        case 'sljiva ':
        case 'kruska':
        case 'jagoda':
          rez.innerHTML = 'voce'
          rez.style.color = 'orange'
          break
          
        default:
          rez.innerHTML = 'Nemože se odrediti ...🤔'
          rez.style.color = 'red'

      }
      
      
      
      // zavrsava 4.zadatak
      break
    
  }
})
// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).


// 4. zadatak
// Za uneseno ime namirnice ispisi dali je voće ili meso ili nemozes odrediti
// npr. ulaz janjetina, svinjetina, teletina ispis Meso
// npr. ulaz jabuka, kruška, šljiva, jagoda ispis Voće
// npr. žablji kraci ispis Ne može se odrediti 


