import { centerDiv } from "./trackMove.mjs";

const dino = document.createElement("img");

centerDiv.appendChild(dino);
let normalTimer;
let downTimer;
let dinoImageIndex = 0;
const dinoImages = ["./assets/Dino/DinoRun1.png", "./assets/Dino/DinoRun2.png"];
const dionoMove = () => {
  dino.src = dinoImages[dinoImageIndex];
  if (dinoImageIndex < dinoImages.length - 1) dinoImageIndex += 1;
  else dinoImageIndex = 0;
};

const ArrowDownDinoImages = [
  "./assets/Dino/DinoDuck1.png",
  "./assets/Dino/DinoDuck2.png",
];
const DuckDinoMove = () => {
  dino.src = ArrowDownDinoImages[dinoImageIndex];
  if (dinoImageIndex < ArrowDownDinoImages.length - 1) dinoImageIndex += 1;
  else dinoImageIndex = 0;
};
dino.className = "dino";

dino.addEventListener("animationend", () => {
  dino.className = "dino";
});

const keyDownFunction = (e) => {
  if (e.code === "ArrowUp") {
    dino.className = "dinoJump";
    dino.src = "./assets/Dino/DinoJump.png";
  } else if (e.code === "ArrowDown") {
    dino.className = "dinodown";
    if (!downTimer) {
      clearInterval(normalTimer);
      normalTimer = undefined;
      downTimer = setInterval(DuckDinoMove, 100);
    }
  }
};

const keyUpFunction = (e) => {
  if (e.code === "ArrowDown") {
    if (!normalTimer) {
      clearInterval(downTimer);
      downTimer = undefined;
      normalTimer = setInterval(dionoMove, 100);
    }
  }
};

window.addEventListener("keydown", keyDownFunction);
window.addEventListener("keyup", keyUpFunction);

export const createDino = () => {
  normalTimer = setInterval(dionoMove, 100);
  return [dino, normalTimer];
};

export const stopDino = () => {
  stopDinoTimer();
  window.removeEventListener("keydown", keyDownFunction);
  window.removeEventListener("keyup", keyUpFunction);
};

export const startMoveDino = () => {
  window.addEventListener("keydown", keyDownFunction);
  window.addEventListener("keyup", keyUpFunction);
};
export const stopDinoTimer = () => {
  const timers = [normalTimer, downTimer];
  for (const timer of timers) {
    clearInterval(timer);
  }
};
