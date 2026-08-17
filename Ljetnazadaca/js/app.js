$(document).foundation()


let form = document.querySelector('form');
let btn = document.querySelector('#Create');
let tabContainer = document.querySelector('.tableContainer');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('kliknuto');
  let note = document.querySelector('#Note');
  let result = document.querySelector('#result');

  let A = document.querySelector('#inA').value;
  let B = document.querySelector('#inB').value;
  console.log('Vrijednost A:', A, 'Vrijednost B:', B); // DODAJ OVO
  let a = Number(A);
  let b = Number(B);
 console.log('Kao brojevi a:', a, 'b:', b); // DODAJ I OVO
  if (A.trim() === '' || B.trim() === '' || isNaN(a) || isNaN(b)) {
    note.innerHTML = 'A i B moraju biti valjani brojevi';
    return;
  }

  note.innerHTML = '';

  const getSquare = (a, b) => a * b;
  let rez = a * b;

  result.innerHTML = `Površina pravokutnika je ${rez} m2`;
 
  //2. zadatak 
  

  a = Number(A);
  b = Number(B);

  // Provjera jesu li polja prazna ili nisu brojevi
  if (A.trim() === '' || B.trim() === '' || isNaN(a) || isNaN(b)) {
    note.innerHTML = 'A i B moraju biti valjani brojevi';
    return;
  }

  if (a > 0) {
        
    result.innerHTML = ' A je Pozitivan'
  } else if (a < 0) {
        
    result.innerHTML = 'A je  negativan'
  } else {
        
    result.innerHTML = 'A je  nula'
  }


  if (b > 0) {
        
    result.innerHTML += ' B je Pozitivan'
  } else if (b < 0) {
        
    result.innerHTML += ' B je  negativan'
  } else {
        
    result.innerHTML += ' B je  nula'
  }

  
  //3 zzadatak

    

}); // End of btn listener
