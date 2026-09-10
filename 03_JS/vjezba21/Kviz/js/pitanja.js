const skupPitanjaES6 = [
  // ==========================================
  // A. POČETNIČKI NIVO (1 - 40)
  // ==========================================
  {
    pitanje: 'Kojom ključnom riječju definiramo varijablu čiju vrijednost MOŽEMO mijenjati?',
    tocno: 'let',
    odgovori: ['const', 'let', 'static']
  },
  {
    pitanje: 'Kojom ključnom riječju definiramo varijablu kojoj NE možemo ponovo dodijeliti vrijednost?',
    tocno: 'const',
    odgovori: ['var', 'let', 'const']
  },
  {
    pitanje: 'Kakav opseg (scope) imaju varijable definirane s \'let\' i \'const\' u ES6?',
    tocno: 'Blokovski opseg (Block scope)',
    odgovori: ['Globalni opseg', 'Blokovski opseg (Block scope)', 'Funkcijski opseg']
  },
  {
    pitanje: 'Što će se dogoditi ako pokušaš ponovno dodijeliti vrijednost varijabli deklariranoj s const?',
    tocno: 'TypeError greška',
    odgovori: ['Uspješno izmjena', 'TypeError greška', 'Vrijednost postane null']
  },
  {
    pitanje: 'Što označava pojam Temporal Dead Zone (TDZ)?',
    tocno: 'Zona od ulaska u blok do deklaracije let/const varijable',
    odgovori: ['Vrijeme učitavanja skripte', 'Zona od ulaska u blok do deklaracije let/const varijable', 'Greška u memoriji']
  },
  {
    pitanje: 'Koji se znak koristi za omeđivanje Template Literala u ES6?',
    tocno: 'Backtick (` `)',
    odgovori: ['Jednostruki navodnik (\' \')', 'Dvostruki navodnik (" ")', 'Backtick (` `)']
  },
  {
    pitanje: 'Kako se vrši interpolacija varijabli unutar Template Literala?',
    tocno: '${varijabla}',
    odgovori: ['#{varijabla}', '${varijabla}', '{{varijabla}}']
  },
  {
    pitanje: 'Mogu li se unutar ${} u Template Literalu izvršavati matematički izrazi?',
    tocno: 'Da, svi valjani JS izrazi',
    odgovori: ['Da, svi valjani JS izrazi', 'Ne, samo varijable', 'Samo uz eval()']
  },
  {
    pitanje: 'Kako najlakše napisati višelinijski (multi-line) string u ES6?',
    tocno: 'Koristeći Template Literals (` `)',
    odgovori: ['Koristeći \\n sa navodnicima', 'Koristeći Template Literals (` `)', 'Koristeći tag <br>']
  },
  {
    pitanje: 'Kako glasi ispravna sintaksa za Arrow funkciju s jednim parametrom x koja vraća x * 2?',
    tocno: 'x => x * 2',
    odgovori: ['function(x) => x * 2', 'x => x * 2', 'x -> x * 2']
  },
  {
    pitanje: 'Kada u Arrow funkciji možemo izostaviti zagrade oko parametara?',
    tocno: 'Kada funkcija ima točno jedan parametar',
    odgovori: ['Kada funkcija nema parametara', 'Kada funkcija ima točno jedan parametar', 'Uvijek možemo izostaviti']
  },
  {
    pitanje: 'Kada u Arrow funkciji možemo izostaviti vitičaste zagrade {} i riječ \'return\'?',
    tocno: 'Kada se tijelo funkcije sastoji od samo jednog izraza',
    odgovori: ['Uvijek', 'Kada se tijelo funkcije sastoji od samo jednog izraza', 'Kada vraća string']
  },
  {
    pitanje: 'Kako u Arrow funkciji s implicitnim return-om vratiti objekt bez greške?',
    tocno: 'Obuhvaćanjem objekta u zagrade: () => ({ a: 1 })',
    odgovori: ['Pisanjem: () => { a: 1 }', 'Obuhvaćanjem objekta u zagrade: () => ({ a: 1 })', 'Pisanjem: () => return { a: 1 }']
  },
  {
    pitanje: 'Kako definiramo podrazumijevanu (default) vrijednost parametra u ES6 funkciji?',
    tocno: 'function f(x = 10)',
    odgovori: ['function f(x : 10)', 'function f(x = 10)', 'function f(x || 10)']
  },
  {
    pitanje: 'Što će izračunati f() ako je definirana s function f(x = 5) { return x; }?',
    tocno: '5',
    odgovori: ['undefined', '5', 'null']
  },
  {
    pitanje: 'Koji operator označava Rest i Spread sintaksu u ES6?',
    tocno: '...',
    odgovori: ['...', '***', '&&&']
  },
  {
    pitanje: 'Kako pomoću Spread operatora spojiti nize n1 i n2 u novi niz?',
    tocno: '[...n1, ...n2]',
    odgovori: ['[n1, n2]', '[...n1, ...n2]', 'concat(n1, n2)']
  },
  {
    pitanje: 'Kako pomoću Spread operatora napraviti plitku kopiju niza \'original\'?',
    tocno: 'const kopija = [...original];',
    odgovori: ['const kopija = original;', 'const kopija = [...original];', 'const kopija = Array(original);']
  },
  {
    pitanje: 'Kako izdvojiti svojstvo \'ime\' iz objekta \'korisnik\' u zasebnu varijablu?',
    tocno: 'const { ime } = korisnik;',
    odgovori: ['const [ ime ] = korisnik;', 'const { ime } = korisnik;', 'const ime = korisnik.ime;']
  },
  {
    pitanje: 'Kako izdvojiti prvi element niza \'brojevi\' u varijablu \'prvi\' destrukturiranjem?',
    tocno: 'const [ prvi ] = brojevi;',
    odgovori: ['const { prvi } = brojevi;', 'const [ prvi ] = brojevi;', 'const prvi = brojevi(0);']
  },
  {
    pitanje: 'Kojom ključnom riječju kreiramo klasu u ES6?',
    tocno: 'class',
    odgovori: ['Class', 'class', 'struct']
  },
  {
    pitanje: 'Kako se zove konstruktorska metoda unutar ES6 klase?',
    tocno: 'constructor',
    odgovori: ['init', 'create', 'constructor']
  },
  {
    pitanje: 'Kako kreiramo novu instancu klase Auto?',
    tocno: 'new Auto()',
    odgovori: ['new Auto()', 'create Auto()', 'Auto.new()']
  },
  {
    pitanje: 'Koja metoda niza vraća PRVI element koji zadovoljava predikat u funkciji?',
    tocno: 'find()',
    odgovori: ['filter()', 'search()', 'find()']
  },
  {
    pitanje: 'Što vraća metoda niz.findIndex() ako nijedan element ne zadovolji uvjet?',
    tocno: '-1',
    odgovori: ['0', '-1', 'undefined']
  },
  {
    pitanje: 'Koja string metoda provjerava počinje li string zadanim znakovima i vraća boolean?',
    tocno: 'startsWith()',
    odgovori: ['includes()', 'startsWith()', 'hasPrefix()']
  },
  {
    pitanje: 'Koja string metoda provjerava završava li string zadanim znakovima?',
    tocno: 'endsWith()',
    odgovori: ['endsWith()', 'lastIndex()', 'contains()']
  },
  {
    pitanje: 'Što pohranjuje objekt tipa Set u ES6?',
    tocno: 'Jedinstvene vrijednosti bilo kojeg tipa',
    odgovori: ['Parove ključ-vrijednost', 'Jedinstvene vrijednosti bilo kojeg tipa', 'Samo brojeve']
  },
  {
    pitanje: 'Kako provjeravamo nalazi li se element u Set objektu \'mojSet\'?',
    tocno: 'mojSet.has(element)',
    odgovori: ['mojSet.contains(element)', 'mojSet.has(element)', 'mojSet.includes(element)']
  },
  {
    pitanje: 'Kako saznajemo ukupan broj elemenata u Set objektu?',
    tocno: 'mojSet.size',
    odgovori: ['mojSet.length', 'mojSet.size', 'mojSet.count']
  },
  {
    pitanje: 'Koji tip podatka pohranjuje parove ključ-vrijednost u ES6 gdje ključ može biti bilo kojeg tipa?',
    tocno: 'Map',
    odgovori: ['Object', 'Map', 'Dictionary']
  },
  {
    pitanje: 'Kako dodajemo par ključ-vrijednost u Map objekt?',
    tocno: 'mojMap.set(ključ, vrijednost)',
    odgovori: ['mojMap.add(ključ, vrijednost)', 'mojMap.set(ključ, vrijednost)', 'mojMap.put(ključ, vrijednost)']
  },
  {
    pitanje: 'Kako dohvaćamo vrijednost iz Map objekta po ključu?',
    tocno: 'mojMap.get(ključ)',
    odgovori: ['mojMap.get(ključ)', 'mojMap.fetch(ključ)', 'mojMap[ključ]']
  },
  {
    pitanje: 'Što predstavlja Promise u ES6?',
    tocno: 'Objekt koji predstavlja eventualni završetak asinkrone operacije',
    odgovori: ['Petlju za asinkroni kod', 'Objekt koji predstavlja eventualni završetak asinkrone operacije', 'Novi tip niza']
  },
  {
    pitanje: 'Kako dohvaćamo uspješan rezultat izvršenja Promise-a?',
    tocno: '.then()',
    odgovori: ['.then()', '.catch()', '.finally()']
  },
  {
    pitanje: 'Kako hvatamo grešku ako je Promise odbijen (rejected)?',
    tocno: '.catch()',
    odgovori: ['.error()', '.catch()', '.fail()']
  },
  {
    pitanje: 'Kojom ključnom riječju izvozimo varijable ili funkcije iz ES6 modula?',
    tocno: 'export',
    odgovori: ['module.exports', 'export', 'public']
  },
  {
    pitanje: 'Kako uvozimo imenovani izvoz (named export) u drugi modul?',
    tocno: 'import { naziv } from \'./modul.js\'',
    odgovori: ['import naziv from \'./modul.js\'', 'import { naziv } from \'./modul.js\'', 'require(\'./modul.js\')']
  },
  {
    pitanje: 'Koliko zadanih (default) izvoza može imati jedan ES6 modul?',
    tocno: 'Točno jedan',
    odgovori: ['Neograničeno', 'Točno jedan', 'Niti jedan']
  },
  {
    pitanje: 'Koja metoda stringa ponavlja string zadani broj puta?',
    tocno: 'repeat()',
    odgovori: ['duplicate()', 'repeat()', 'loop()']
  },

  // ==========================================
  // B. SREDNJI NIVO (41 - 100)
  // ==========================================
  {
    pitanje: 'Kako se ponaša ključna riječ \'this\' unutar Arrow funkcije?',
    tocno: 'Preuzima \'this\' iz okolnog leksičkog opsega',
    odgovori: ['Stvara vlastiti \'this\'', 'Preuzima \'this\' iz okolnog leksičkog opsega', 'Uvijek označava window/global']
  },
  {
    pitanje: 'Mogu li se Arrow funkcije koristiti kao konstruktori uz operator \'new\'?',
    tocno: 'Ne, bacit će TypeError',
    odgovori: ['Da, potpuno uobičajeno', 'Ne, bacit me TypeError', 'Samo u strict modu']
  },
  {
    pitanje: 'Mogu li Arrow funkcije koristiti ugrađeni \'arguments\' objekt?',
    tocno: 'Ne, nemaju vlastiti arguments objekt',
    odgovori: ['Da', 'Ne, nemaju vlastiti arguments objekt', 'Samo ako se izričito omogući']
  },
  {
    pitanje: 'Kako prilikom destrukturiranja objekta promijeniti naziv varijable iz \'a\' u \'novoA\'?',
    tocno: 'const { a: novoA } = objekt;',
    odgovori: ['const { a as novoA } = objekt;', 'const { a: novoA } = objekt;', 'const { novoA = a } = objekt;']
  },
  {
    pitanje: 'Kako destrukturiranjem postaviti podrazumijevanu vrijednost za nepostojeće svojstvo?',
    tocno: 'const { x = 5 } = objekt;',
    odgovori: ['const { x : 5 } = objekt;', 'const { x = 5 } = objekt;', 'const { x } || 5 = objekt;']
  },
  {
    pitanje: 'Kako u jednom redu zamijeniti vrijednosti varijabli a i b (variable swap)?',
    tocno: '[a, b] = [b, a];',
    odgovori: ['a = b, b = a;', '[a, b] = [b, a];', 'swap(a, b);']
  },
  {
    pitanje: 'Što radi Rest parametar u funkciji function f(prvi, ...ostali)?',
    tocno: 'Prikuplja preostale argumente u niz \'ostali\'',
    odgovori: ['Razlaže niz u argumente', 'Prikuplja preostale argumente u niz \'ostali\'', 'Ignorira dodatne argumente']
  },
  {
    pitanje: 'Gdje u listi parametara funkcije mora stajati Rest parametar?',
    tocno: 'Uvijek na samom kraju',
    odgovori: ['Na samom početku', 'Uvijek na samom kraju', 'Bilo gdje']
  },
  {
    pitanje: 'Kojom ključnom riječju klasa u ES6 nasljeđuje drugu klasu?',
    tocno: 'extends',
    odgovori: ['inherits', 'extends', 'implements']
  },
  {
    pitanje: 'Čemu služi funkcija super() u konstruktoru dječije klase?',
    tocno: 'Poziva konstruktor roditeljske klase',
    odgovori: ['Poziva konstruktor roditeljske klase', 'Stvara statičku metodu', 'Briše roditeljski opseg']
  },
  {
    pitanje: 'Kada se mora pozvati super() u konstruktoru izvedene klase?',
    tocno: 'Prije bilo kakve upotrebe ključne riječi \'this\'',
    odgovori: ['Na samom kraju konstruktora', 'Prije bilo kakve upotrebe ključne riječi \'this\'', 'Nije ga obavezno pozvati']
  },
  {
    pitanje: 'Kako definirati statičku metodu u klasi koja se poziva izravno na klasi, a ne na instanci?',
    tocno: 'static mojaMetoda()',
    odgovori: ['public mojaMetoda()', 'static mojaMetoda()', 'fixed mojaMetoda()']
  },
  {
    pitanje: 'Jesu li ES6 klase podignute (hoisted) kao klasične funkcije?',
    tocno: 'Ne, moraju se definirati prije upotrebe',
    odgovori: ['Da, potpuno', 'Ne, moraju se definirati prije upotrebe', 'Samo ako nemaju konstruktor']
  },
  {
    pitanje: 'Kako u klasi kreirati getter metodu za svojstvo \'cijena\'?',
    tocno: 'get cijena() { return this._cijena; }',
    odgovori: ['getter cijena() { ... }', 'get cijena() { return this._cijena; }', 'fetch cijena() { ... }']
  },
  {
    pitanje: 'Pravi li Spread operator ({...objekt}) plitku ili duboku kopiju ugniježđenih objekata?',
    tocno: 'Plitku kopiju (Shallow copy)',
    odgovori: ['Duboku kopiju (Deep copy)', 'Plitku kopiju (Shallow copy)', 'Potpunu izolaciju']
  },
  {
    pitanje: 'Što su Computed Property Names u ES6 objektima?',
    tocno: 'Mogućnost dinamičkog definiranja naziva ključa unutar [ ]',
    odgovori: ['Izračunavanje vrijednosti ključa', 'Mogućnost dinamičkog definiranja naziva ključa unutar [ ]', 'Statička svojstva']
  },
  {
    pitanje: 'Kako skraćeno pišemo definiciju metode u objektu u ES6?',
    tocno: 'ispisi() { ... }',
    odgovori: ['ispisi: function() { ... }', 'ispisi() { ... }', 'function ispisi() { ... }']
  },
  {
    pitanje: 'Što je skraćeno pisanje svojstava (Property Shorthand) u objektima?',
    tocno: 'Ako se ime varijable i ključa podudaraju, pišemo samo ime: { ime }',
    odgovori: ['Automatsko dodjeljivanje tipa', 'Ako se ime varijable i ključa podudaraju, pišemo samo ime: { ime }', 'Uklanjanje dvotočke']
  },
  {
    pitanje: 'Što vraća Promise.all([p1, p2, p3]) ako jedan od promise-a padne (reject)?',
    tocno: 'Odmah odbija (rejects) čim prvi ne uspije',
    odgovori: ['Vraća samo uspješne', 'Odmah odbija (rejects) čim prvi ne uspije', 'Čeka sve pa vraća grešku']
  },
  {
    pitanje: 'Što vraća Promise.race([p1, p2])?',
    tocno: 'Rezultat prvog završenog promise-a (ispunjenog ili odbijenog)',
    odgovori: ['Najbrži uspješni promise', 'Rezultat prvog završenog promise-a (ispunjenog ili odbijenog)', 'Sve rezultate u nizu']
  },
  {
    pitanje: 'Koji HTML atribut mora imati <script> oznaka za rad s ES6 modulima?',
    tocno: 'type="module"',
    odgovori: ['script="module"', 'type="module"', 'es6="true"']
  },
  {
    pitanje: 'Izvršava li se kod unutar ES6 modula automatski u Strict Mode-u?',
    tocno: 'Da, uvijek',
    odgovori: ['Da, uvijek', 'Ne, mora se napisati "use strict"', 'Samo ako ima export']
  },
  {
    pitanje: 'Kako uvesti sve imenovane izvoze iz modula kao jedan objekt \'Modul\'?',
    tocno: 'import * as Modul from \'./modul.js\'',
    odgovori: ['import all as Modul from \'./modul.js\'', 'import * as Modul from \'./modul.js\'', 'import { * } from \'./modul.js\'']
  },
  {
    pitanje: 'Kako preimenovati uvezeni imenovani izvoz \'dohvati\' u \'dohvatiPodatke\'?',
    tocno: 'import { dohvati as dohvatiPodatke } from \'./modul.js\'',
    odgovori: ['import { dohvati : dohvatiPodatke } from \'./modul.js\'', 'import { dohvati as dohvatiPodatke } from \'./modul.js\'', 'import { dohvati = dohvatiPodatke } from \'./modul.js\'']
  },
  {
    pitanje: 'Što je WeakMap i po čemu se razlikuje od standardnog Map-a?',
    tocno: 'Ključevi moraju biti objekti i omogućuju Garbage Collection',
    odgovori: ['Pohranjuje samo brojeve', 'Ključevi moraju biti objekti i omogućuju Garbage Collection', 'Nema metodu delete()']
  },
  {
    pitanje: 'Mogu li se WeakSet i WeakMap iterirati petljom for...of?',
    tocno: 'Ne, nemaju iteratore',
    odgovori: ['Da, jednako kao Set i Map', 'Ne, nemaju iteratore', 'Samo uz metodu .keys()']
  },
  {
    pitanje: 'Koja se petlja u ES6 koristi za izravno iteriranje kroz VRIJEDNOSTI iterabilnih objekata?',
    tocno: 'for...of',
    odgovori: ['for...in', 'for...of', 'forEach']
  },
  {
    pitanje: 'Kroz što iterira for...in petlja u odnosu na for...of?',
    tocno: 'for...in iterira kroz ključeve/indekse, a for...of kroz vrijednosti',
    odgovori: ['Jednako rade', 'for...in iterira kroz ključeve/indekse, a for...of kroz vrijednosti', 'for...in radi samo na nizovima']
  },
  {
    pitanje: 'Kako se u ES6 označavaju generator funkcije koje se mogu pauzirati i nastaviti?',
    tocno: 'function*',
    odgovori: ['function*', 'async function', 'generator function']
  },
  {
    pitanje: 'Kojom ključnom riječju pauziramo izvršavanje unutar generator funkcije?',
    tocno: 'yield',
    odgovori: ['pause', 'stop', 'yield']
  },
  {
    pitanje: 'Što vraća poziv generator funkcije?',
    tocno: 'Generator objekt (Iterator)',
    odgovori: ['Konačnu vrijednost', 'Generator objekt (Iterator)', 'Promise']
  },
  {
    pitanje: 'Kako dohvaćamo sljedeću vrijednost iz generator objekta \'gen\'?',
    tocno: 'gen.next()',
    odgovori: ['gen.next()', 'gen.continue()', 'gen.yield()']
  },
  {
    pitanje: 'Što vraća metoda .next() generatora?',
    tocno: 'Objekt oblika { value: ..., done: boolean }',
    odgovori: ['Samo vrijednost', 'Objekt oblika { value: ..., done: boolean }', 'Niz izlaznih podataka']
  },
  {
    pitanje: 'Kako pretvoriti DOM NodeList u pravi Array u ES6?',
    tocno: 'Array.from(nodeList)',
    odgovori: ['nodeList.toArray()', 'Array.from(nodeList)', 'nodeList.convert()']
  },
  {
    pitanje: 'Što vraća metoda Array.from([1, 2, 3], x => x * 2)?',
    tocno: '[2, 4, 6]',
    odgovori: ['[1, 2, 3]', '[2, 4, 6]', 'undefined']
  },
  {
    pitanje: 'Što radimo ako želimo najbrže ukloniti sve duplikate iz niza \'brojevi\'?',
    tocno: '[...new Set(brojevi)]',
    odgovori: ['brojevi.unique()', '[...new Set(brojevi)]', 'Array.fromUnique(brojevi)']
  },
  {
    pitanje: 'Što će vratiti izraz Number.isInteger(4.0)?',
    tocno: 'true',
    odgovori: ['false', 'true', 'TypeError']
  },
  {
    pitanje: 'Po čemu se Number.isNaN(x) razlikuje od globalnog isNaN(x)?',
    tocno: 'Number.isNaN ne vrši automatsku konverziju tipa u broj',
    odgovori: ['Nema razlike', 'Number.isNaN ne vrši automatsku konverziju tipa u broj', 'Globalni isNaN vraća string']
  },
  {
    pitanje: 'Što izračunava Math.trunc(3.9)?',
    tocno: '3 (odseca decimalni dio)',
    odgovori: ['4', '3 (odseca decimalni dio)', '3.9']
  },
  {
    pitanje: 'Što vraća metoda Object.is(NaN, NaN) u ES6 u odnosu na NaN === NaN?',
    tocno: 'Object.is vraća true, dok === vraća false',
    odgovori: ['Oba vraćaju false', 'Object.is vraća true, dok === vraća false', 'Oba vraćaju true']
  },
  {
    pitanje: 'Što vraća Object.is(-0, +0) u odnosu na -0 === +0?',
    tocno: 'Object.is vraća false, dok === vraća true',
    odgovori: ['Oba vraćaju true', 'Object.is vraća false, dok === vraća true', 'Object.is vraća true']
  },
  {
    pitanje: 'Kako dohvaćamo sve vlastite Symbol ključeve s nekog objekta?',
    tocno: 'Object.getOwnPropertySymbols(objekt)',
    odgovori: ['Object.symbols(objekt)', 'Object.getOwnPropertySymbols(objekt)', 'objekt.getSymbols()']
  },
  {
    pitanje: 'Koji protokol omugućuje objektu definiranje vlastitog načina iteriranja kroz for...of?',
    tocno: 'Symbol.iterator',
    odgovori: ['Symbol.iterator', 'Array.iterable', 'Object.loop']
  },
  {
    pitanje: 'Što radi Symbol.for(\'ključ\')?',
    tocno: 'Traži ili kreira Symbol u globalnom registru Symbola',
    odgovori: ['Prevara Symbol u string', 'Traži ili kreira Symbol u globalnom registru Symbola', 'Klonira postojeći Symbol']
  },
  {
    pitanje: 'Koji se blok u Promise-u izvodi bez obzira je li bio fulfilled ili rejected?',
    tocno: '.finally()',
    odgovori: ['.always()', '.then()', '.finally()']
  },
  {
    pitanje: 'Što vraća metoda Promise.resolve(vrijednost)?',
    tocno: 'Već ispunjeni Promise s tom vrijednošću',
    odgovori: ['String vrijednost', 'Već ispunjeni Promise s tom vrijednošću', 'Funkciju zvanu resolve']
  },
  {
    pitanje: 'Što je Tagged Template Literal?',
    tocno: 'Poziv funkcije s Template Literal om gdje su elementi stringovi i izrazi',
    odgovori: ['HTML tag unutar stringa', 'Poziv funkcije s Template Literal om gdje su elementi stringovi i izrazi', 'Novi CSS format']
  },
  {
    pitanje: 'Kako pretvoriti postojeći Map objekt u 2D niz parova [ključ, vrijednost]?',
    tocno: '[...mojMap]',
    odgovori: ['mojMap.toArray()', '[...mojMap]', 'Array.fromMap(mojMap)']
  },
  {
    pitanje: 'Kako u potpunosti isprazniti (obrisati sve elemente) Set objekt?',
    tocno: 'mojSet.clear()',
    odgovori: ['mojSet.removeAll()', 'mojSet.clear()', 'mojSet.reset()']
  },
  {
    pitanje: 'Jesu li Symbol ključevi vidljivi u klasičnoj for...in petlji ili Object.keys()?',
    tocno: 'Ne, ignoriraju se pri standardnoj iteraciji',
    odgovori: ['Da, uvijek', 'Ne, ignoriraju se pri standardnoj iteraciji', 'Samo u strict modu']
  },
  {
    pitanje: 'Što će vratiti String.raw`A\\nB`?',
    tocno: 'Sirovi string "A\\nB" ignorirajući escape znak za novi red',
    odgovori: ['Novi red između A i B', 'Sirovi string "A\\nB" ignorirajući escape znak za novi red', 'TypeError']
  },
  {
    pitanje: 'Što dobivamo destrukturiranjem direktno u parametrima function ({ ime })?',
    tocno: 'Izravno izvlačenje svojstva \'ime\' iz proslijeđenog objekta',
    odgovori: ['Stvaranje novog objekta', 'Izravno izvlačenje svojstva \'ime\' iz proslijeđenog objekta', 'Zabranu slanja ostalih svojstava']
  },
  {
    pitanje: 'Što se događa ako pokušamo destrukturirati vrijednost null ili undefined?',
    tocno: 'Bacit će TypeError',
    odgovori: ['Vraća prazan objekt', 'Bacit će TypeError', 'Vratit će undefined']
  },
  {
    pitanje: 'Kako pomoću Spread operatora pretvoriti string \'Bok\' u niz slova?',
    tocno: '[...\'Bok\']',
    odgovori: ['Array(\'Bok\')', '[...\'Bok\']', 'String.toArray(\'Bok\')']
  },
  {
    pitanje: 'Koja metoda objekta kopira sva prenosiva vlastita svojstva iz jednog ili više izvornih objekata u ciljni objekt?',
    tocno: 'Object.assign()',
    odgovori: ['Object.copy()', 'Object.assign()', 'Object.merge()']
  },
  {
    pitanje: 'Možemo li u ES6 klasama koristiti get i set nad istim nazivom svojstva?',
    tocno: 'Da, za definiranje pristupnika i postavnika',
    odgovori: ['Da, za definiranje pristupnika i postavnika', 'Ne, dolazi do dupliranja ključa', 'Samo u statičkim metodama']
  },
  {
    pitanje: 'Što radi metoda Promise.reject(greška)?',
    tocno: 'Vraća Promise objekt koji je već odbijen s navedenom greškom',
    odgovori: ['Prekida izvršavanje skripte', 'Vraća Promise objekt koji je već odbijen s navedenom greškom', 'Kira fatalnu grešku u konzoli']
  },
  {
    pitanje: 'Mogu li ključevi u Map objektu biti funkcije ili objekti?',
    tocno: 'Da, bilo koji tip podatka može biti ključ',
    odgovori: ['Ne, samo stringovi', 'Da, bilo koji tip podatka može biti ključ', 'Samo u WeakMap-u']
  },
  {
    pitanje: 'Što će ispisati console.log(typeof Symbol(\'id\'))?',
    tocno: '\'symbol\'',
    odgovori: ['\'object\'', '\'symbol\'', '\'string\'']
  },
  {
    pitanje: 'Kako najlakše spriječiti da Arrow funkcija izgubi leksički \'this\' pri prosljeđivanju u callback?',
    tocno: 'Arrow funkcija automatski zadržava leksički \'this\'',
    odgovori: ['Pozivom .bind(this)', 'Arrow funkcija automatski zadržava leksički \'this\'', 'Korištenjem var varijable']
  }
];
console.log(skupPitanjaES6.length)