//Loops, petlje iteracije


console.log('======================')

for (let i = 0; i < 10; i++){
  
  console.log('Edunova')
}

console.log('======================')

//unutar petlje  i= mjenja  vrijednost

for (let i = 0; i < 10; i++){
  
  console.log(`i = ${i+1}`)

}

console.log('======================')
//unutar petlje  mozemo koristiti trenutne  vrijednosti varijable
let suma = 0

//odradio je  100 iteracija i dosao do 5050
for (let i = 0; i < 100; i++){

  suma += i + 1
 // debugger
}
console.log(suma)

console.log((100 * (100 + 1)) / 2) //5050
console.log('======================')

//nekoliko primjera setanaj s pomocu FOR petlje
//unazad za jedan
for (let i = 10; i > 0; i--){

  console.log(i)
}
console.log('======================')

for (let i = 7; i < 20; i++){

  console.log(i)
}

console.log('======================')
//simuliranje unosa korisnika
const pocetak = 7
const kraj = 20
const uvecanje = 2

for (let i = pocetak; i < kraj; i += uvecanje){
  
  console.log(i)
}

console.log('======================')
//ugnjezdivanje  petlje

document.write('<table>')

for (let i = 1; i <= 10; i++) {

  document.write('<tr>')


  for (let j = 1; j <= 10; j++) {

    document.write(`<td> ${i * j}</td>`)
  }


  document.write('</tr>')
}

document.write('</table>')
console.log('======================')

//petlju mozemo  preskociti ili  nasilno prekinut

for (let i = 0; i < 10; i++){

  if (i === 3) {
    
    continue//nastavlja (preskace petlju)
  }
  if (i === 7) {
    
    break //nasilno prekida
  }
  console.log(i)
}
console.log('======================')

//

const niz = [1, 2, 3, 4, 5, 6, 7]

//ispisati sve  elemnte niza

for (let i = 0; i < niz.length; i++){

  console.log(niz[i])
}

console.log('======================')
//ispisati od zadnjeg do prvog

for (let i = niz.length - 1; i >= 0, i--;){
  
  console.log(i)
}
console.log('======================')

//string je  niz znakova

const ime = 'Nina'

for (let i = 0; i < ime.length; i++){

  console.log(ime[i],i)
}

console.log('======================')

//Beskonacna  petlja
async function odradi(){
const spavaj = (ms) => newPromise(r=> setTimeout(r,ms))
for (; ;){

  document.getElementById('lista').innerHTML
    = '<li>' + (Math.floor(Math.random() * 1000) + 1) + '</li>'
 +  document.getElementById('lista').innerHTML
  //break
  await spavaj(500)
}
}


