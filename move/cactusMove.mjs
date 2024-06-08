import { Cactus } from "../class/Cactus.mjs";

let cactusArray = [];

const createCactusArray = () => {
  for (let a = 0; a < 3; a++) {
    const cactusInstance = new Cactus();
    const rightPx = cactusInstance.cactus.style.right.split("px")[0];
    cactusInstance.cactus.style.right =
      Number(rightPx) - (Math.random() * 2000 + 700) * a + "px";
    cactusArray.push(cactusInstance);
  }
};

const CactusMove = () => {
  let deleteCactus = undefined;
  for (const x of cactusArray) {
    const presentrightString = x.cactus.style.right;
    const presentright = Number(presentrightString.split("px")[0]);
    if (presentright >= window.innerWidth) {
      deleteCactus = x;
    } else {
      x.cactus.style.right = presentright + 2 + "px";
    }
  }

  if (deleteCactus) {
    document.body.removeChild(deleteCactus.cactus);
    const newCactusArray = [];
    for (const x of cactusArray) {
      if (x !== deleteCactus) {
        newCactusArray.push(x);
      }
    }

    cactusArray = newCactusArray;
    cactusArray.push(new Cactus());
  }
};

export const createCactus = () => {
  createCactusArray();
  const timer = setInterval(CactusMove, 0);
  return timer;
};

export const removeCactus = () => {
  for (const cactus of cactusArray) {
    document.body.removeChild(cactus.cactus);
  }
  cactusArray = [];
};
export const stopCactus = () => {};
