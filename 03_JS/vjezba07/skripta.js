//Nizovi, ili polja  Arrays

const t1 = 4 // u varijabli t1 imam prosjecnu temperaturu za sjecanj


//prazan niz

const prazanNiz = []

console.log('prazanNiz', prazanNiz)

console.log(prazanNiz.length)

//pohranjujem 12 prosjecnih temp za sjecanj do prosinac
const temp = [4, 1, 9,15, 17, 27, 30, 33, 26, 18, 14, 8]

console.table('temp', temp)

console.log('prvi element niza', temp[0])
//zadni el iz niza temp
console.log('zadnji el niza', temp[temp.length - 1])
//ipisati za 27 iz niza temp
 console.log(temp[5])
//temp = []// ne  moze
 
//vrijednost se  mogu mijenjati

//u lipnju nije bilo  27 vec 28

temp[5] = 28

console.table(temp)

// skracivanje  niza
temp.length = 10 //skrati niz na 10 elemenata

console.table(temp)
//uvecaj niz temp za 1 element
temp.length = temp.length + 1

temp[temp.length - 1] = 77

temp[110] = -1
console.table(temp)

console.log(temp[11])

console.log(temp.length)


const mjesta = [

  'Osijek',
  'Zagreb',
  'Rijeka',
  'Dubrovnik',
  'Zadar'

]
console.table(mjesta)

//u ozbiljnom Dev svijetu naginje  se da nizovi imaju elemente istog tipa

//ponavljanje tipova  podataka, niz moze  imati bilo  koji tip podtaka

const ptp = [

  'Edunova',// string
  7, //number
  18n, //bigINt
  true, //boolean
   Array,// Array
  undefined,
  null,
  { ime: 'Pero' },// objekt
  Symbol('e'), //Symbol

]

console.log(ptp)
console.log(ptp[7])
console.log(ptp[7].ime)
console.log(ptp[7]['ime'])//necemo koristit

const osobe = [

  {

    ime: 'Andreas',
    prezime: 'Sklizovic',
    godine: 52
  },

  {

    ime: 'Branka',
    prezime: 'Sklizovic',
    godine:82
  },

  {

    ime: 'Damir',
    prezime: 'Sklizovic',
    godine:60
  },

  {

    ime: 'Darko',
    prezime: 'Nikolic',
    godine:51
  }

]



console.table(osobe)

const sumaGodina = osobe[0].godine + osobe[1].godine + osobe[2].godine + osobe[3].godine +( osobe[4]?.godine?? 0)

console.log(sumaGodina)

//Destruction

const niz = [10, 20, 30] //3 elemnta

const [e1, e2] = niz //izvrsio sam destrkciju na  nacin  da je 1.el niza zavrsio varijabli

console.log(e1,e2,niz)

const[,, e3] = niz

console.log(e3)

// .npr  Backend vrati prazan niz
niz.length = 0

const [x1=1, x2=20] = niz // kod destrukcije, varijablama se  moze  dodijeliti zadana vrijednost

console.log(x1, x2)

//Spred operator ...

const n1 = [1, 2, 3]

const novi = n1//ovo  nije  kopiranje, ovo je  krreiranje reference  na  niz n1

novi[0] = 7

console.log(n1)

//Spred operator zapravo kopira

const kopija = [...n1]// u nizu se  nalaze svi elemnti kopirani iz  niza n1

kopija[0] = 9

console.log(kopija, n1)

//spajanje  nizova

const gradovi = ['Osijek', 'Zagreb']
const sela = ['Habjanovci', 'Tenja']

const hr = [...gradovi, ...sela]
console.log(hr)

document.getElementById('naslov').innerHTML = hr[0]

//ovo gore sve je jednodimenzionalni niz-lista

//nizovi mogu biti vi[edimenzionalni
//2d matrix
const tablica = [
   

  [1, 2, 3],//red s index 0
  [4, 5, 6],//red idex 1
  [7,8,9]//red index 2
]
 //ispisi 6
console.log(tablica[1][2])

console.table(tablica)

//3d je  kocka

//4d je  tenzor






























