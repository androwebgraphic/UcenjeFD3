

/* =================================================
   ZADATAK 1 — Prvi i zadnji element
   - niz se gradi od A i B (plus dva fiksna elementa radi smisla)
   Ulaz primjer: [A, 20, 30, B]
   Izlaz: Prvi: A, Zadnji: B
================================================= */


document.getElementById('zad01').addEventListener('click', () => {

  console.log("ZADATAK 1 — Prvi i zadnji element")

  const a = document.getElementById('inA').value
  const b = document.getElementById('inB').value

  //   if (!a) {

  //     a = 'Prazno'
  //   }
  //   if (!b) {

  //     b = 'Prazno'
  // }Ne moze se mijenjati CONST


  const av = !a ? 'prazno' : a
  const bv = !b ? 'prazno' : b

  const niz = [av, 20, 30, bv]

  console.log(`Prvi: ${niz[0]}, Zadnji: ${niz[niz.length - 1]}`)

})


/* =================================================
   ZADATAK 2 — Siguran pristup elementu
   U danom nizu [1,2,3,4,5,6,7]
   - Ako je A broj postavi vrijednost B na taj index
   - Ako je A string u niz dodaj novi element i postavi B na taj index
================================================= */


document.getElementById('zad02').addEventListener('click', () => {

  console.log("ZADATAK 2 — Siguran pristup elementu")
  const a = document.getElementById('inA').value
  const b = document.getElementById('inB').value
  const niz = [1, 2, 4, 5, 6, 7]

  const brojA = Number(a)
  if (!brojA) {
    //a je string
    niz.length = niz.length + 1
    niz[niz.length - 1] = b

  } else {

    //a je broj, koristim varijablu br a
    niz[brojA] = b
  }
  console.log(niz)




})

/* =================================================
   ZADATAK 3 — Zamjena prva dva elementa
   Unesi podatke A i B u niz [A, B, 3]
   - ispiši niz
   - zamijeni prva dva elemente
   - ispiši niz
================================================= */


document.getElementById('zad03').addEventListener('click', () => {

  console.log('3. Zadatak')

  const a = document.getElementById('inA').value
  const b = document.getElementById('inB').value

  const niz = [a, b, 3]

  console.log(niz)
  const manta = niz[0]
  niz[0] = niz[1]
  niz[1] = manta

  console.log(niz)

})



/* =================================================
   ZADATAK 4 — Dodavanje elementa prema duljini
   - niz: [A, B]
   - ako je A string i duljina(A) < 3 → dodaj "X" na kraj
     inače → dodaj "Y" na početak
================================================= */
document.getElementById('zad04').addEventListener('click', () => {
  console.log("ZADATAK 4 — Dodavanje elementa prema duljini")

  const A = document.getElementById('inA').value
  const B = document.getElementById('inB').value
  const x = 'Andro'
  const y = 'Skliz'
  if (A == '' || B == '') {

    console.log(' Nijedno polje ne smije  biti prazno')
  } else {
    const niz = [A, B]
    let noviNiz
    // if (typeof niz[0] === 'string' && niz[0].length < 3) {

    //   noviNiz = [...niz, x]

    // } else {

    //   noviNiz = [y, ...niz]
    // }

    (typeof A === 'string' && A.length < 3) ? noviNiz = [...niz, x] : noviNiz = [y, ...niz]

    console.log(noviNiz)
  }

})


//spred operator

/* =================================================
   ZADATAK 5 — Provjera tipa prvog elementa
   - ako je A broj 7 na prvi elementi niza podatvi true, inače 0
   - ako je B tekst Osijek na drugi element postavi B, inače 2,5
   - koristeći elemente niza ispiši kojeg su tipa
================================================= */
document.getElementById('zad05').addEventListener('click', () => {
  console.log("ZADATAK 5 — Provjera tipa elemenata")

  let A = document.getElementById('inA').value
  let B = document.getElementById('inB').value

  let niz = [A, B]

  if (Number(A) === 7) {

    niz[0] = true
  }
  else {

    niz[0] = 0
  }

  if (B === 'Osijek') {

    niz[1] = B

  } else {

    niz[1] = 2.5
  }
  console.log(`Prvi element: ${niz[0]}, tip podatka: ${typeof niz[0]}\n 
    'Drugi element:' ${niz[1]}, 'Tip podatka: ${typeof niz[1]}`)




})






/* =================================================
   ZADATAK 6 — Ukloni zadnji element 
  Vrijednosti A i B se unose u niz [A, B, 'KRAJ']
================================================= */
document.getElementById('zad06').addEventListener('click', () => {
  console.log("ZADATAK 6 — Ukloni zadnji element")

  let A = document.getElementById('inA').value
  let B = document.getElementById('inB').value

  let niz = [A, B, 'Kraj']


  let noviNiz = [niz.length - 1];
  console.log(noviNiz, `Uklonjeni elemnt; ${noviNiz}`)

})
/* =================================================
   ZADATAK 7 — Spoji dva niza
   - niz1: [A, 2]
   - niz2: [B, 4]
   - spajanje spreadom
================================================= */
document.getElementById('zad07').addEventListener('click', () => {
  console.log("ZADATAK 7 — Spoji dva niza")

  let A = document.getElementById('inA').value
  let B = document.getElementById('inB').value

  let niz1 = [A, 2]
  let niz2 = [B, 4]

  let spojeniNiz = [...niz1, ...niz2]
  console.log(spojeniNiz)



})
/* =================================================
   ZADATAK 8 — Provjera rupe u nizu
   - napravimo niz sa "rupom" na indeksu 1:
     niz[0]=A, niz[2]=B
   - provjerimo indeks 1
================================================= */
document.getElementById('zad08').addEventListener('click', () => {
  console.log("ZADATAK 8 — Provjera rupe u nizu")

  let A = document.getElementById('inA').value
  let B = document.getElementById('inB').value

  const niz = []
  niz[0] = A
  niz[2] = B
  console.log(niz[1])

})




/* =================================================
   ZADATAK 9 — Razdvajanje prvog i ostatka
   - niz: [A, B, 7, 6]
   - destructuring [prvi, ...ostatak]
================================================= */
document.getElementById('zad09').addEventListener('click', () => {
  console.log("ZADATAK 9 — Razdvajanje prvog i ostatka")

  let A = document.getElementById('inA').value
  let B = document.getElementById('inB').value

  const niz = [A, B, 7, 6]

  const [prvi, ...ostatak] = niz

  console.log(prvi, ostatak)

})


/* =================================================
   ZADATAK 10 — prema duljini niza
   - duljinu određujemo prema A i B:
     Ako je A prazan string ili B prazan string → niz = []
     Inače ako A === B → niz = [A]
     Inače ako je B broj i B === 2 → niz = [A, B]
     Inače → niz = [A, B, "x"]
================================================= */

document.getElementById('zad10').addEventListener('click', () => {
  console.log("ZADATAK 10 — prema duljini niza")

  let A = document.getElementById('inA').value
  let B = document.getElementById('inB').value

  let niz = [A, B]
  if (A === '' || B === '') {

    console.log(niz = [])
  } else if (A === B) {

    console.log(niz = [A])
  } else if (typeof B ===Number(B) && B === 2) {

    console.log(niz = [A, B])
  } else {

    console.log(niz = [A, B, "x"])
  }
//Nesto nije u redu s petljom
})