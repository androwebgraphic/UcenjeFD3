//operatori

// Aritmeticki  operatori
//+ - * /

const a = 2, b = 3 // deklariranje 2  varijable  u jednoj liniji

let rez // undefined
//ovdje  moze doci promp s parseInt ili  Number-Ulaz

//algoritam
rez = a + b
//izlaz
console.log(rez)


//modulo (%)
//ostatak nakon cijelobrojnog dijeljenja !!!!

//9%2=1
//4*2 =8
//9-8=1 ovo je rezultat


//modulo se  koristi pri odredivanju parnosti broja
rez = a%b


console.log('rez, rez')
console.log('9 % 2', 9%2) //1
console.log('8 % 2',8%2)//0

//Operatori dodjele
rez += 2 //isto ko rez= rez+2
console.log('rez+=2', rez)


//debugger
rez = rez + 3

console.log('rez=rez+3',rez)

//postoje i -=,*=, /=
//vjerovali ili ne
//najcesca u programiranju je uvecanje varijable za 1

//nacin uvecanja varijable za 1

rez = rez + 1//11
rez += 1//12

rez++// ovaj nacin nikad koristiti sam u liniji

//increment ++
//decrement --
//ima dvojaku ulogu

let i = 0

// prvo koristi pa  uvecaj
console.log('i++', i++)//0 -> nakon ispisa i=1

//prvo uvecaj pa koristi
console.log('++i', ++i)// 2 -> 1+1 =2 i onda to ispise

//isto i kod --
//debugger
i = 2
let j = 1
i = j++ - i // 1-2  j=2, i=-1
j += --i - ++j// i=-2 -3 = -5, j=-2

console.log(i - j)//-3

//Operatori usporedbe

//razlicito !=

console.log(5 != 4)//true
console.log('5' != 5)//false
console.log('5' !== 5)//true

// <, >, <=, >=

const godine = 18

console.log(godine > 18)//false
console.log(godine >= 18)//true 

// logicki operatori -> rade na  logickom tipu podataka: BOOLEAN

const ispunjenUvjet = godine >= 18

console.log('ispunjenUvjet', typeof ispunjenUvjet, ispunjenUvjet)
// AND, OR i NOT (I, ILI, Ne)
//&&, ||, i !
const imaNovaca = true
console.log('Moze u disko', ispunjenUvjet && imaNovaca)//true
//vrijed pravila boolovih tablica:

console.log(!imaNovaca)

//ternary
console.log(godine >= 18 ? 'punoljetan' : 'Maloljetan')

//operator spajanaj - nadoljepljivanja CONCATENATION +
//+ operator zbrajanaj kod 2  broja

console.log('Marko ima ' + godine + ' godina')

console.log(`Marko ima ${godine} godina`)

const x='7' , y=5
console.log(x + y)

//Operator prosirivanja SPREAD

const niz = [2.1]//konstanta ne  moze se  mijenjati
const noviNiz = [0, ...niz, 3]
console.table(niz)
console.log(noviNiz)

const osoba = {

  ime: 'Pero',
  prezime:'Peric'
}

const polaznik = {
  
  .. osoba,
  edukacija: 'FD'
}

//suprotn od  prosirivanja DEstructing

const [prvi, drugi] = [1, 2]//dobijemo varijable  prvi drugi koje  imaju vrijednosti

console.log(prvi, drugi)

const { prezime, ...meniBitno } = polaznik
//prezime  je ovdje  otpadak- ne treba  mi ali  mij  nacin da  iz  polaznika  maknem  prezime
console.log(meniBitno)//imam ime  i edukacija

//nullish calescing operator
//ako je vrijednost null
let sifra

console.log(sifra ?? 'Sifra nije postavljena')
sifra = 1
console.log(sifra ?? 'Sifra je postavljena')

//optional chaining operator

const korisnik{

  adresa: {
    
    grad:osijek
  }
}

console.log(korisnik.adresa.grad)//osijek

console.log(korisnik?.adresa?.ulica?.toUpperCase()?? 'Nije  postavljeno')