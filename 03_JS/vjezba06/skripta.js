// switch je višestruko grananje
// switch radi s svim tipovima podataka i provjerava s ===
// sve što se može s switch može i if

const ocjena = 2  // ovdje simuliram da je korisnik unio vrijednost

switch(ocjena){
    case 1:
    console.log('Nedovoljan')
    
        break
    case 2:
        console.log('Dovoljan')
        break
    case 3:
        console.log('Dobar')
        break
    case 4:
        console.log('Vrlo dobar')
        break
    case 5:
        console.log('Izvrstan')
        break
    default:
        console.log('Nije ocjena')
}



const dan = 'Subota'

switch(dan){
    case 'Ponedjeljak':
    case 'Utorak':
    case 'Srijeda':
    case 'Četvrtak':
    case 'Petak':
        console.log('Radni dan')
        break
    case 'Subota':
    case 'Nedjelja':
        console.log('Vikend')
        break
    default:
        console.log('Neispravan dan')
}
