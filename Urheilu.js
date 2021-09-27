class Henkilo {
  constructor(etu, suku, kutsuma, syntyma) {
    this._etunimi = etu;
    this._sukunimi = suku;
    this._kutsumanimi = kutsuma;
    this._syntymapvm = syntyma;
  }

  get nimi() {
    return this._etunimi + " " + this._sukunimi;
  }

  get syntymapvm() {
    return this._syntymapvm;
  }

  get ika() {
    let date = new Date(this._syntymapvm);
    return Math.floor((Date.now() - date.getTime()) / 31536000000);
  }
}

class Urheilija extends Henkilo {
  constructor(etu, suku, kutsuma, syntyma, kuva, paino, laji, saavutukset) {
    super(etu, suku, kutsuma, syntyma);
    this._kuva = kuva;
    this._paino = paino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }

  get paino() {
    return this._paino;
  }

  get laji() {
    return this._laji;
  }

  get saavutukset() {
    return this._saavutukset;
  }

  get kuva() {
    return this._kuva;
  }

  set paino(paino) {
    this._paino = paino;
  }

  set saavutukset(saavutukset) {
    this._saavutukset = saavutukset;
  }

  get tiedot() {
    return (
      this.nimi +
      ", syntymäpvm(MM/DD/YYYY): " +
      this.syntymapvm +
      ", ikä: " +
      this.ika +
      ", laji: " +
      this._laji +
      ", paino: " +
      this._paino +
      ", saavutukset: " +
      this._saavutukset +
      "\nKuva: " +
      this._kuva
    );
  }
}

const paavoNurmi = new Urheilija(
  "Paavo",
  "Nurmi",
  "Flying Finn",
  "06/13/1897",
  "https://hs.mediadelivery.fi/img/468/ca0635ce0a9f4d609946fdff5bc1bddb.jpg",
  "65",
  "Juoksu",
  "9 olympiakultaa"
);

const lewisHamilton = new Urheilija(
  "Lewis",
  "Hamilton",
  "Lulu",
  "01/07/1985",
  "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image16x9.img.1024.medium.jpg",
  "73",
  "F1",
  "7 F1 Mestaruutta"
);

console.log(paavoNurmi.tiedot);
console.log();
console.log(lewisHamilton.tiedot);
