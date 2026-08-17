// try catch sistem

// console.log('Početak')

// const i = 7

// const rezultat = i + varijabla
// console.log(rezultat)

// console.log('Kraj')
try {
  
  console.log('Pocetak')
  const i = 7
  const rezultat = i + varijabla
  console.log(rezultat)
}

catch (e){
  
console.log('greska', e.name, e.message, e)
}

console.log('kraj')


console.log('2. primjer')
const i = 7
let rezultat = 0
try {
  rezultat = i + varijabla

} catch {

  rezultat = i +1
  
} finally {
  
  console.log(rezultat)
  
}
console.log('Kraj 2. primjera')



//provocating error

function korijen(broj) {
  if (broj < -1) {
    
    throw new Error('ne  mogu izvaditi drugi korijen')
  }
  return Math.sqrt(broj)
}
try {
  console.log(korijen(-9))
} catch (e) {
  console.log(e.message)
}


//losa sintaxsa
function rekurzija() {
  brojac++
  rekurzija()

}
let brojac = 0
try {
    rekurzija()
} catch (error) {
  console.log('stog napunjenna' ,brojac)
}

rekurzija()
























