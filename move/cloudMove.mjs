import { Cloud } from "../class/Cloud.mjs";

const cloudArray = [];
for (let a = 0; a < 4; a++) {
  cloudArray.push(new Cloud());
}

const cloudMove = () => {
  for (const x of cloudArray) {
    const currentRightString = x.cloud.style.right;
    const currentRight = Number(currentRightString.split("px")[0]);
    if (currentRight >= window.innerWidth) {
      x.cloud.style.right = 0 - x.cloud.width + "px";
    } else {
      x.cloud.style.right = currentRight + 0.3 + "px";
    }
  }
};

export const createCloud = () => {
  return setInterval(cloudMove, 0);
};
export const stopCloud = () => {
  return clearInterval(cloudMove, 0);
};
