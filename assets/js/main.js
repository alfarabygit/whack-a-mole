const ground = document.querySelectorAll(".tanah");
const mole = document.querySelectorAll(".tikus");
const start = document.querySelector(".start");

let groundBefore;
let clear;

function randomGround(ground) {
  const g = Math.floor(Math.random() * ground.length);
  const gRandom = ground[g];
  if (gRandom == groundBefore) {
    randomGround(ground);
  }
  groundBefore = gRandom;
  return gRandom;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function appearMole() {
  const gRandom = randomGround(ground);
  const tRandom = randomTime(300, 1000);
  gRandom.classList.add("muncul");

  setTimeout(() => {
    gRandom.classList.remove("muncul");
    appearMole();
  }, tRandom);
}

function startPlay() {
  appearMole();
  setTimeout(() => {}, 10000);
}
