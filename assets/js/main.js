const ground = document.querySelectorAll(".tanah");
const mole = document.querySelectorAll(".tikus");
const start = document.querySelector(".start");
const scoreBoard = document.querySelector(".score");
const pop = document.querySelector("#pop");

let groundBefore;
let clear;
let score;

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
    if (!clear) {
      appearMole();
    }
  }, tRandom);
}

function startPlay() {
  clear = false;
  score = 0;
  scoreBoard.textContent = 0;
  appearMole();
  setTimeout(() => {
    clear = true;
  }, 5000);
}

function pow() {
  score++;
  this.parentNode.classList.remove("muncul");
  pop.play();
  scoreBoard.textContent = score;
}

mole.forEach((m) => {
  m.addEventListener("click", pow);
});
