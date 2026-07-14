const ime = 'pero'//prompt('Unesi ime')

console.log(ime)



console.log(typeof ime)

console.log('ime', typeof ime, ime)

console.log(`Dobar dan ${ime}!`)


const unosGodina = '2026'
const godina = Number(unosGodina)

console.log('unnosGodina', typeof unosGodina, unosGodina,

  'godina', typeof godina,godina
)


const pi = parseFloat('3.14')
console.log('pi', typeof pi, pi)

const logickaVrijednost = true //false

console.log('logickaVrijednost', typeof logickaVrijednost, logickaVrijednost)

// logickaVrijednost = false

let broj = 7

console.log('broj', typeof broj, broj)

// let broj = 8
broj = 8
console.log('broj', typeof broj, broj)

broj = 'osijek'
console.log('broj', typeof broj, broj)

var x = 8
console.log('x', typeof x, x)

var x = true
console.log('x', typeof x, x)

const velikiBroj = 383775777347723n
console.log('velikiBroj', typeof velikiBroj, velikiBroj)

let varijabla;

console.log('varijabla', typeof varijabla, varijabla) //undefined

varijabla = 7
console.log('varijabla', typeof varijabla, varijabla) 


// JSON -javaScript Object Notation

const osoba = {


  id: 1,
  ime: 'pero',
  placa: 2345.99,
  zaposlen: true
}

console.log('osoba', typeof osoba, osoba)

console.table(osoba)

//array, niz, polja - js  to zove objekt

const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('niz', typeof niz, niz)

console.table(niz)

const json = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
console.table(json)
//funkcije stari nacin
function pozdrav() {
  
  console.log('pozdrav iz funkcije')

}

console.log('pozdrav', typeof pozdrav, /*pozdrav*/)

//poziv funkcije
pozdrav()

//novi nacin deklarairanja funkcije

const pozdravi = () => console.log('pozdrav iz nove  funkcije')

console.log('pozdravi', typeof pozdravi)
pozdravi()

// necemo koristit Symbol

const id1 = Symbol('Edunovaa')
const id2 = Symbol('Edunova')

console.log('id1', typeof id1, id1)
console.log('id2', typeof id2, id2)

console.log('7' == 7) //true
console.log('7' === 7)//false
console.log(7 === 7)

console.log(id1 == id2)//false
console.log(id1 === id2)//false