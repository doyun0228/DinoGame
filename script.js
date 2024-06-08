import { createBird, BirdMove } from "./move/birdMove.mjs";
import { createCactus, removeCactus } from "./move/cactusMove.mjs";
import { createCloud } from "./move/cloudMove.mjs";
import { createDino, stopDino, startMoveDino } from "./move/dinoMove.mjs";
import {
  centerDiv,
  createTrack,
  stopTrack,
  startTrack,
} from "./move/trackMove.mjs";
const Bdiv = document.createElement("div");
const stopGame = () => {
  bird = document.querySelector(".bird");
  clearInterval(cactusTimer);
  stopTrack();
  clearInterval(cloudTimer);
  clearInterval(birdTimer);
  clearInterval(birdTimer2);
  clearInterval(timer);
  clearInterval(scoreTimer);
  stopDino();
  dino.src = "./assets/Dino/DinoDead.png";
  centerDiv.appendChild(Bdiv);
  Bdiv.addEventListener("click", restart);
};
const cactuscheck = () => {
  const cactusArray = document.querySelectorAll(".cactus");
  const dinoRect = dino.getBoundingClientRect();
  const dinoX = dinoRect.x + dinoRect.width;
  const dinoY = dinoRect.y;
  for (const cactus of cactusArray) {
    const cactusRect = cactus.getBoundingClientRect();
    const cactusX = cactusRect.x;
    const cactusY = cactusRect.y;
    if (dinoX > cactusX && dinoY >= cactusY) {
      stopGame();
      x = true;
    }
  }
};

const birdCheck = () => {
  if (bird) {
    const dinoRect = dino.getBoundingClientRect();
    const dinoX = dinoRect.x + dinoRect.width;
    const dinoY = dinoRect.y;
    const birdP = bird.getBoundingClientRect();
    const birdx = birdP.x;
    const birdy = birdP.y;
    const birdh = birdP.height;
    if (dinoX > birdx && birdy < dinoY && dinoY < birdy + birdh) {
      stopGame();
    }
  }
};

const Gameover = () => {
  const Text = document.createElement("h2");
  const Replay = document.createElement("img");
  Replay.src = "./assets/replay.png";
  Text.innerText = "GAME OVER";
  Text.className = "Text";
  Replay.className = "imgsize";
  Replay.style.width = "30px";
  Replay.style.height = "30px";
  Bdiv.appendChild(Text);
  Bdiv.appendChild(Replay);
  Bdiv.className = "bdiv";
};

const score = document.querySelector(".score");
let a = 0;
const scoreAdd = () => {
  a++;
  score.textContent = "Score:" + a;
};

let scoreTimer = setInterval(scoreAdd, 100);
let cactusTimer = createCactus();
let cloudTimer = createCloud();
createTrack();
const [dino, timer] = createDino();
let birdTimer2 = createBird();
let birdTimer = BirdMove();
Gameover();
let x = false;
let bird = document.querySelector(".bird");

setInterval(() => {
  if (x === false) {
    cactuscheck();
    birdCheck();
  }
}, 100);

const restart = () => {
  removeCactus();
  cactusTimer = createCactus();
  startMoveDino();
  startTrack();
  birdTimer2 = createBird();
  birdTimer = BirdMove();
  cloudTimer = createCloud();
  createDino();
  a = 0;
  scoreTimer = setInterval(scoreAdd, 100);
  centerDiv.removeChild(Bdiv);
  x = false;
};
