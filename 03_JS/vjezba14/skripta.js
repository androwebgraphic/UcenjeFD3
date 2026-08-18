//funkcionalne  metode  koje  skracuju  code
const korisnici = [

  {

    id: 1,
    ime: 'Ana',
    prezime: 'Kartek',
    godine: 25,
    admin:false
  },

  {

    id: 2,
    ime: 'Karlo',
    prezime: 'Totig',
    godine: 29,
    admin:false
  },



  {

    id: 3,
    ime: 'Marko',
    prezime: 'Cutic',
    godine: 45,
    admin:true
  },
   {

    id: 4,
    ime: 'Nikola',
    prezime: 'Čutić',
    godine: 49,
    admin:true
   },
   {

    id: 5,
    ime: 'Žana',
    prezime: 'Đitko',
    godine: 18,
    admin:true
  }

]
console.table(korisnici)

//forEach metoda skaracuje  for  petlju

for (let i = 0; i < korisnici.length; i++){

  console.log(korisnici[i].ime)
}
console.log('*********************')

korisnici.forEach(korisnik => console.log(korisnik.ime))

korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`))

console.log('**********************')

korisnici.forEach(o => {


  let oslovi = 'Poštovan'

  if (o.ime.endsWith('a')){
    
    oslovi += 'a gospođo'
  } else {
    
    oslovi += 'i gospodine'
  }

  console.log(`${oslovi} ${o.ime} ${o.prezime}`)
})

console.log('*******************')

//map


const samoImena = korisnici.map(o => o.ime)

console.log(samoImena)

korisnici.map(o => o.ime).forEach(ime => console.log(ime))
console.table
console.log('*************************')

const ip = korisnici.map( o => o.ime + ' ' + o.prezime)

console.table(ip)

const maliNiz = korisnici.map(({id, ime, prezime}) => ({sifra:id, osoba: ime + ' ' + prezime}))



console.table(maliNiz)

console.log(korisnici.find(o => o.id === 3)?.ime ?? '')


console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek').id)

console.log(maliNiz.findIndex(o => o.sifra === 100))


console.table(korisnici.filter(o => o.godine === 49))

console.log(korisnici.reduce((suma, o) => suma + o.godine, 0))//0 je  pocetna

console.log(korisnici.some(o => o.admin) ? 'ima admina' : 'nema admina')
console.log(korisnici.every(o => o.godine >=18) ? 'svi su punoljetni' : 'Nisu svi punoljetni')










