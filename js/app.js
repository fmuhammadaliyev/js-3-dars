//1- vazifa

let idish = 0;

while (idish !== 5) {
  idish = idish + 1;
  console.log("salom dunyo");
}
//uyga vazifa 1- masala
let son;

while (true) {
  son = prompt("1 dan 999 gacha son kiriting:");
  son = Number(son);

  if (son >= 1 && son <= 999) {
    break;
  } else {
    console.log("Iltimos, 1 dan 999 gacha son kiriting.");
  }
}

let birlik = [
  "",
  "bir",
  "ikki",
  "uch",
  "to'rt",
  "besh",
  "olti",
  "yetti",
  "sakkiz",
  "to'qqiz",
];
let onlik = [
  "",
  "o'n",
  "yigirma",
  "o'ttiz",
  "qirq",
  "ellik",
  "oltmish",
  "yetmish",
  "sakson",
  "to'qson",
];
let yuzlik = [
  "",
  "bir yuz",
  "ikki yuz",
  "uch yuz",
  "to'rt yuz",
  "besh yuz",
  "olti yuz",
  "yetti yuz",
  "sakkiz yuz",
  "to'qqiz yuz",
];

let yuz = Math.floor(son / 100);
let on = Math.floor((son % 100) / 10);
let bir = son % 10;

let natija = yuzlik[yuz] + " " + onlik[on] + " " + birlik[bir];

console.log("Natija: " + natija.trim());

//uyga vazifa 2- masala

while (true) {
  const num = Math.trunc(Math.random() * 23) + 44;
  const check = prompt("sen shu sonni oylaganmisan? : " + num);
  if (check === "y") {
    console.log("togri topdiz!");
    break;
  }
}

//uyga vazifa 3- masala
let gul = prompt("soz yozing:");

let f = 0;

while (f < gul.length) {
  console.log(gul[f]);
  f = f + 1;
}
