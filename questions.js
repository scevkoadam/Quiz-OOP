class Question {
  constructor(text, options, answer, points, category) {
    this.text = text;
    this.options = options;
    this.answer = answer;
    this.points = points;
    this.category = category;
  }
}

// Maksimalno 4 kategorije! Ako bude bilo vise, poslednju u nizu ne racuna.
const questions = [
  new Question("Koja grupa izvodi pesmu 'O Pustinji'?", ["Leb i Sol", "Idoli", "Ekatarina Velika", "Darkwood Dub"], "Darkwood Dub", 10, "muzika"),
  new Question("Koja grupa izvodi pesmu 'Igraj'?", ["Leb i Sol", "Idoli", "Ekatarina Velika", "Darkwood Dub"], "Leb i Sol", 10, "muzika"),
  new Question("Koji je glavni grad Srbije?", ["Zagreb", "Niš", "Sarajevo", "Beograd"], "Beograd", 10, "geografija"),
  new Question("Koji je glavni grad Francuske?", ["Paris", "Madrid", "Berlin", "Lisabon"], "Paris", 10, "geografija"),
  new Question("Koja grupa izvodi pesmu 'Zabranjujem'?", ["Leb i Sol", "Idoli", "Ekatarina Velika", "Darkwood Dub"], "Ekatarina Velika", 10, "muzika"),
  new Question("Koji je glavni grad Španije?", ["Paris", "Madrid", "Berlin", "Lisabon"], "Madrid", 10, "geografija"),
  new Question("Koji je glavni grad Nemačke?", ["Paris", "Madrid", "Berlin", "Lisabon"], "Berlin", 10, "geografija"),
  new Question("Koji je glavni grad Portugala?", ["Paris", "Madrid", "Berlin", "Lisabon"], "Lisabon", 10, "geografija"),
  new Question("Glavni grad koje zemlje je Prag?", ["Češke", "Slovačke", "Poljske", "Bugarske"], "Češke", 10, "geografija"),
  new Question("Glavni grad koje zemlje je Sofija?", ["Češke", "Slovačke", "Poljske", "Bugarske"], "Bugarske", 10, "geografija"),
  new Question("Glavni grad koje zemlje je Varšava?", ["Češke", "Slovačke", "Poljske", "Bugarske"], "Poljske", 10, "geografija"),
  new Question("Glavni grad koje zemlje je Bratislava?", ["Češke", "Slovačke", "Poljske", "Bugarske"], "Slovačke", 10, "geografija"),
  new Question("Koja reka protiče kroz Pariz?", ["Sena", "Laba", "Rona", "Loara"], "Sena", 10, "geografija"),
  new Question("Ko je osvojio mundijal 2006. godine?", ["Brazil", "Italija", "Francuska", "Argentina"], "Italija", 10, "sport"),
  new Question("Ko je osvojio LŠ 2005. godine?", ["Liverpul", "Milan", "Barselona", "Arsenal"], "Liverpul", 10, "sport"),
  new Question("Koja je merna jedinica za pritisak?", ["Paskal [Pa]", "Njutn [N]", "Tesla [T]", "[N/m]"], "Paskal [Pa]", 10, "priroda"),
  new Question("Koja je merna jedinica za silu?", ["Paskal [Pa]", "Njutn [N]", "Tesla [T]", "Vat [W]"], "Njutn [N]", 10, "priroda"),
  new Question("Električni potencijal", ["Paskal [Pa]", "Njutn [N]", "Volt [V]", "Vat [W]"], "Volt [V]", 10, "priroda"),
  new Question("Koja je merna jedinica za snagu?", ["Paskal [Pa]", "Njutn [N]", "Volt [V]", "Vat [W]"], "Vat [W]", 10, "priroda"),
  new Question("Jačina magnetnog polja", ["Paskal [Pa]", "Volt [V]", "Tesla [T]", "Amper [A]"], "Tesla [T]", 10, "priroda"),
  new Question("Kada se dešava pojava kratkodnevnica?", ["decembar", "jun", "mart", "septembar"], "decembar", 10, "priroda")
];
