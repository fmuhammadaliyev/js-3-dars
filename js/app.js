//1- vazifa

let idish = 0;

while (idish !== 5) {
  idish = idish + 1;
  console.log("salom dunyo");
}

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
