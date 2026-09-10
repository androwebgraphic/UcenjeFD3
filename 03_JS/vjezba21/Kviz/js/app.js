const { createApp } = Vue;

createApp({
  data() {
    return {
      up: 10, // Broj pitanja po krugu (definira varijablu {{up}} u HTML-u)
      indeks: 0,
      tocniOdgovori: 0,
      pokaziRezultate: false,
      svapitanja: typeof skupPitanjaES6 !== 'undefined' ? skupPitanjaES6 : [],
      pitanjaKruga: []
    };
  },
  computed: {
    // Vraća trenutno aktivno pitanje
    trenutnoPitanje() {
      return this.pitanjaKruga[this.indeks] || { pitanje: '', odgovori: [], tocno: '' };
    },
    // Izračunava širinu progres trake u postocima
    progres() {
      if (this.up === 0) return 0;
      return ((this.indeks) / this.up) * 100;
    },
    // Izračunava postotak točnosti za prikaz na kraju kruga
    izracunajPostotak() {
      if (this.up === 0) return '0%';
      const postotak = Math.round((this.tocniOdgovori / this.up) * 100);
      return `${postotak}% (${this.tocniOdgovori}/${this.up})`;
    },
    // Vraća tekstualnu ocjenu na temelju postotka
    izracunajOcjenu() {
      const postotak = (this.tocniOdgovori / this.up) * 100;
      if (postotak === 100) return 'Savršeno! Izvrsno poznavanje ES6!';
      if (postotak >= 80) return 'Odličan rezultat!';
      if (postotak >= 50) return 'Dobro je, ali ima prostora za napredak.';
      return 'Potrebno je još vježbe. Pokušaj ponovno!';
    }
  },
  methods: {
    // Generira novi krug s nasumičnih 'up' (10) pitanja iz skupPitanjaES6
    pokreniKrug() {
      this.indeks = 0;
      this.tocniOdgovori = 0;
      this.pokaziRezultate = false;

      // Nasumično miješanje (Fisher-Yates shuffle) i uzimanje prvih 'up' pitanja
      const kopija = [...this.svapitanja];
      for (let i = kopija.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kopija[i], kopija[j]] = [kopija[j], kopija[i]];
      }

      this.pitanjaKruga = kopija.slice(0, this.up);
    },
    // Provjerava je li odabrani odgovor točan i prelazi na sljedeće pitanje
    obradiOdgovor(odabraniOdgovor) {
      if (odabraniOdgovor === this.trenutnoPitanje.tocno) {
        this.tocniOdgovori++;
      }

      if (this.indeks + 1 < this.up) {
        this.indeks++;
      } else {
        this.pokaziRezultate = true;
      }
    }
  },
  mounted() {
    this.pokreniKrug();
  }
}).mount('#app');