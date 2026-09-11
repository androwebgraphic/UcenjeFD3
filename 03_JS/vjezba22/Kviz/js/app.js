 function kvizAplikacija() {
            return {
                skupPitanja: kreirajPitanja(),
                trenutnaPitanja: [],
                indeks: 0,
                rezultat: 0,
                kvizZavrsen: false,
                brojPitanja: 4,
                progress: 0,

                // Computed property helper
                get trenutnoPitanje() {
                    return this.trenutnaPitanja[this.indeks] || {};
                },

               // Fisher-Yates (Knuth) Shuffle - najpouzdaniji način miješanja
pokreniNoviKrug() {
    let kopija = [...this.skupPitanja];
    for (let i = kopija.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kopija[i], kopija[j]] = [kopija[j], kopija[i]];
    }
    
    this.trenutnaPitanja = kopija.slice(0, this.brojPitanja);
    this.indeks = 0;
    this.rezultat = 0;
    this.kvizZavrsen = false;
},
                obradiOdgovor(odgovor) {
                    if (odgovor === this.trenutnoPitanje.tocno) this.rezultat++;
                    
                    if (this.indeks < this.brojPitanja-1) {
                        this.indeks++;
                    } else {
                        this.kvizZavrsen = true;
                    }
                    this.progress = (this.indeks / this.brojPitanja) * 100 ;
                },

                dajOcjenu() {
                    if(this.rezultat===0){
                        return 'Nedovoljan (1). Ponovi osnove!';
                    }else{
                        const postotak = (this.rezultat / this.brojPitanja)*100;
                        if(postotak>=80){
                            return 'Odličan (5)! Pravi si ES6 majstor!';
                        }
                        if(postotak>=60){
                            return 'Vrlo dobar (4)! Skoro savršeno.';
                        }
                        if(postotak>=40){
                            return 'Dobar (3). Solidno poznavanje.';
                        }
                        return 'Dovoljan (2). Trebaš još malo učiti.';
                    }
                }
            }
        }