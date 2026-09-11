function kreirajPitanja() {
  return [
    
    {
      pitanje: 'Koja je  razlika izmedju CONST i LET kod definiranja  varijabli',
      tocno: 'Const vrijednost ne mozemo redefinirati a  LET mozemo',
      odgovori: ['Nema razlike', 'razlika u redeklariranju',  'Const vrijednost ne mozemo redefinirati a  LET mozemo',]

    },
        
    {
      pitanje: 'Kako se definira FUNKCIJA',
      tocno: 'function hello(){name}',
      odgovori: ['hello = {name}',  'hello : name','function hello(){name}','promijeni']

    },

       {
      pitanje: 'Kako ispravno definiramo FOR petlju',
      tocno: 'for(i=0; i<=el.length; i++)',
      odgovori: ['for= i++',  'let for() => i--', 'for(i=0; i<=el.length; i++)','promijeni']

    },
    {
        pitanje: 'Kojom ključnom rječju definiramo varijablu čiju vrijednost možemo mijenjati?',
        tocno: 'let',
        odgovori: ['const', 'let', 'var','promijeni']
    },
    {
        pitanje: 'Koji je index prvog elementa u nizu?',
        tocno: '0',
        odgovori: ['1', '0', '-1','promijeni']
    },
    {
        pitanje: 'Kako provjeravamo koliko elemenata ima u nizu \'niz\'?',
        tocno: 'niz.length',
        odgovori: ['niz.size', 'niz.count', 'niz.length','promijeni']
    },
    {
        pitanje: 'Koji operator koristimo za strogu jednakost (provjerava i tip i vrijednost)?',
        tocno: '===',
        odgovori: ['=', '==', '===','promijeni']
    },
    {
        pitanje: 'Što će ispisati console.log(5 + \'5\')?',
        tocno: '55',
        odgovori: ['10', '55', 'Error','promijeni']
    },
    {
        pitanje: 'Kako ispravno pišemo \'if\' izjavu?',
        tocno: 'if (x == 5)',
        odgovori: ['if x = 5 then', 'if (x == 5)', 'if [x == 5]','promijeni']
    },
    {
        pitanje: 'Kako se zove petlja koja se izvodi sve dok se ne zadovolji uvjet?',
        tocno: 'while',
        odgovori: ['while do', 'while', 'do while','promijeni']
    },
    {
        pitanje: 'Kako glasi operator za logičko \'I\' (AND)?',
        tocno: '&&',
        odgovori: ['||', '&&', '++','promijeni']
    },
    {
        pitanje: 'Što radi naredba \'break\' u petlji?',
        tocno: 'Prekida petlju',
        odgovori: ['Preskače jedan krug', 'Prekida petlju', 'Vraća na početak','promijeni']
    },
    {
        pitanje: 'Koji je rezultat operacije 10 % 3 (ostatak dijeljenja)?',
        tocno: '1',
        odgovori: ['0', '1', '3','promijeni']
    },
    {
        pitanje: 'Kako se zove \'zadana\' grana u switch naredbi ako nijedan case nije točan?',
        tocno: 'default',
        odgovori: ['else', 'fallback', 'default','promijeni']
    },
    {
        pitanje: 'Kako ispravno pozivamo funkciju koja se zove \'izracunaj\' i ne prima niti jedan parametar?',
        tocno: 'izracunaj()',
        odgovori: ['call izracunaj', 'izracunaj()', 'function izracunaj','promijeni']
    },
    {
        pitanje: 'Što je rezultat izraza !false?',
        tocno: 'true',
        odgovori: ['true', 'false', 'null','promijeni']
    },
    {
        pitanje: 'Koji tip petlje koristimo kad točno znamo broj ponavljanja?',
        tocno: 'for',
        odgovori: ['while', 'for', 'do while','promijeni']
    },
    {
        pitanje: 'Koja metoda pretvara podatak u string?',
        tocno: 'toString()',
        odgovori: ['toStr()', 'toString()', 'toUpperCase()','promijeni']
    },
    {
        pitanje: 'Koja metoda se koristi za dodavanje elementa na kraj polja?',
        tocno: 'push()',
        odgovori: ['push()', 'pop()', 'shift()']
    },
    {
        pitanje: 'Što je rezultat izraza [] == ![] u JavaScriptu?',
        tocno: 'true',
        odgovori: ['true', 'false', 'TypeError','promijeni']
    },
    {
        pitanje: 'Koji tip podataka predstavlja točno ili netočno?',
        tocno: 'boolean',
        odgovori: ['string', 'boolean', 'number','promijeni']
    },
    {
        pitanje: 'Koja sintaksa uzrokuje probleme u radu => (arrow funkcije)?',
        tocno: '.this',
        odgovori: ['.this', '.current', '.self',,'promijeni']
    },
    {
        pitanje: 'Koja metoda u JS pretvara JSON string u JS objekt?',
        tocno: 'JSON.parse()',
        odgovori: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()','promijeni']
    } 
    ];
    // čitati https://github.com/denysdovhan/wtfjs
}