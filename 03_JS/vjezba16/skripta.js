//generator funkcije: posebne  vrste funkcija koje  se mogu

function* primjerGenerator() {
  
  console.log('Pocetak generatora')
  
  yield true// prva pauza

  yield 2.7 // druga pauza

  yield 'Edunova'
   return 'Gotov'
}

const generator = primjerGenerator()//konsola je prazna

console.log(generator.next().value)// nex je  poziv do prvog Yield-a

console.log(generator.next())

console.log(generator.next())

console.log(generator.next())

const g2 = primjerGenerator()

g2

do {
  
  g = g2.next()
  console.log(g.value)
} while (!g.done)
  
function* sljedeciID() {
    
  let id = 1
  while (true) {
    
    yield `ID_${id++}`
  }
}
const id = sljedeciID()
console.log(id.next().value)
console.log(id.next().value)
console.log('nesto radim')
    
for (let i = 0; i < 10; i++){


  console.log(id.next().value)
}







function* razgovor() {
  
  let odgovor
  while (true) {
    

    odgovor = yield 'Kako se zoves?'
    
    console.log(`generator kaze: Drago mi je, ${odgovor}`)
  }
}

const chat = razgovor()

let pitanje = chat.next().value// pitnaje kasko se  zoves

console.log(pitanje)

pitanje = chat.next('Marko').value
console.log(pitanje)













