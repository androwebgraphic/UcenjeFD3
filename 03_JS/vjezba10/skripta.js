// while petlja
// radi s boolean tipom podatka
// sve dok je true ostaje u petlji

// beskonačna petlja

while(true){
    console.log('Edunova')
    break
}

// continue i break rade isto kao u for

let brojac = 0

console.time('while petlja')
let suma = 0
while(brojac++ < 100){
    //console.log(brojac) // 1,2,3 ... 100
   // if(brojac % 10 === 0){
   //     console.log(brojac)
   // }
   suma += brojac
}

console.timeEnd('while petlja')
console.log(suma)


let brojUnos = '1262' // simuliram da je ovo unio korisnik = 11

console.time('ZB1')

suma = 0

for(let i = 0; i<brojUnos.length; i++){
    suma += Number(brojUnos[i]) // ovo se izvede 4 puta
}

console.timeEnd('ZB1')
console.log(suma)

console.time('ZB2')

let broj = Number(brojUnos) // ovo se izvodi jednom

suma=0

while(broj>0){
    suma += broj % 10   // 1262 -> 2  | 126 -> 6  | 12 -> 2  |  1 -> 1
    broj = broj - (broj % 10) // 1262 - 2 = 1260  | 126 - 6 = 120  |  12 - 2 = 10  | 1 - 1 = 0
    broj /= 10 // 126  | 12   |  1   |   0
}
console.timeEnd('ZB2')
console.log(suma)

// 1262 % 10 = 2
// 1262 / 10 = 126 cjelobrojno, 126 * 10 = 1260, 1262 - 1260 = 2

// 126 % 10 = 6
// 126 / 10 = 12 cjelobrojno, 12 * 10 = 120, 126 - 120 = 6

// 12 % 10 = 2

// 1 % 10 = 1

// čitati više o optimizacijij
// Big O notacija
/**
 * BIG O NOTATION - TABLICA KOMPLEKSNOSTI
 * ---------------------------------------------------------------------------------------
 * | Notacija     | Naziv                | Ocjena      | Primjer operacije               |
 * |--------------|----------------------|-------------|---------------------------------|
 * | O(1)         | Konstantno           | Izvrsno     | Pristup elementu preko indeksa  |
 * | O(log n)     | Logaritamsko         | Odlično     | Binarno pretraživanje           |
 * | O(n)         | Linearno             | Dobro       | Jednostavna petlja (for/forEach)|
 * | O(n log n)   | Linearno-logaritamsko| Solidno     | Merge Sort, Quick Sort          |
 * | O(n^2)       | Kvadratično          | Loše        | Dvostruka ugniježđena petlja    |
 * | O(2^n)       | Eksponencijalno      | Vrlo loše   | Rekurzivni Fibonacci            |
 * | O(n!)        | Faktorijelno         | Katastrofa  | Brute-force rješenja            |
 * ---------------------------------------------------------------------------------------
 * * LEGENDA RASTA (n = broj elemenata):
 * - O(1)       -> Vrijeme je uvijek isto (npr. 1ms)
 * - O(log n)   -> Ako se n poveća 100x, vrijeme se poveća samo par puta
 * - O(n)       -> Ako se n poveća 100x, vrijeme se poveća 100x
 * - O(n^2)     -> Ako se n poveća 100x, vrijeme se poveća 10,000x!
 */


// činjenica: u petlje (for, while) se ne mora ući
const x = 5

for(let i = 0; i > x; i++){
    console.log('Ušao u petlju')
}


const podaciApi = [
    
    {
        ime: 'Pero'
    },
    {
        ime: 'Marko'
    },
    {
        ime: 'Marija'
    }
        
]

while(podaciApi.length>0){
    // funkcija pop() uzima zadnji element iz niza i skraćuje niz za taj element (smanji length)
    console.log('Ušao u petlju', podaciApi.pop()?.ime)
}


