// OOP  objektno orijentirano programiranje

class Osoba {


  #ime // skriveno  privatno  svojstvo
  get ime() {    return this.#ime
  }
  set ime(s) { this.#ime = s }
  
  constructor(ime = '') {
    
    this.#ime=ime
  }

}
    
//object je  instanca  klase

const osoba = new Osoba()

osoba.ime = 'Pero'

console.log(osoba.ime)

const o = new Osoba('Marko')

console.log((o.ime))

//OOP princip  nasljedivanja
//klasa ce  naslijediti metode nad  clasom
// jedna  klaas  moze  nasljediti samo jednu  nad-klasu

class Polaznik extends Osoba{


  #odradioObaveze
  get odradioObaveze() { return this.#odradioObaveze }
  set odradioObaveze(b) { this.#odradioObaveze = b }
  constructor(ime = '', oo = false) {
    
    super(ime)
    this.#odradioObaveze=oo
  }
}

const p = new Polaznik('Karlo', false)

console.log(`${p.ime} ${p.odradioObaveze ? 'je' : 'nije'} odradioobveze`)

class Predavac extends Osoba{


  #vrsta
  get vrsta() { return this.#vrsta }
  set vrsta(s) { this.#vrsta = s }
  
  toString() {
    
    return`$this.vrsta ${super.ime}`
  }
}
const pr = new Predavac()
pr.ime = 'Gordana'
pr.vrsta = 'vanjska suradnica'
 
console.log(pr)
console.log(`${pr}`)

//metodeu klasi se koriste na  objektima, ne  klasama
//metode  u klase se  mogu koristiti i  na  klasama

class Pomocno{

  static slucajniBroj() {
    
    return Math.random()
  }
}

console.log(Pomocno.slucajniBroj())
















