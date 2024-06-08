let birdimg = document.createElement("img");
let birdIndex = 0;
birdimg = document.createElement("img");
document.body.appendChild(birdimg);
birdimg.className = "bird";
const width = window.innerWidth;
birdimg.style.right = Math.random() * width + "px";
birdimg.style.top = "39%";
const birdFly = () => {
  const birdIamge = ["./assets/Bird/Bird1.png", "./assets/Bird/Bird2.png"];
  birdimg.src = birdIamge[birdIndex];
  if (birdIndex < birdIamge.length - 1) birdIndex += 1;
  else birdIndex = 0;
};

const birdMove = () => {
  const currentBirdRight = birdimg.style.right;
  const NostringBirdRight = Number(currentBirdRight.split("px")[0]);
  if (NostringBirdRight > window.innerWidth) {
    birdimg.style.transition = "none";
    birdimg.style.right = -5000 + "px";
    birdimg.addEventListener("transitionend", () => {
      if (birdimg.style.transition === "none")
        birdimg.style.transition = "all 100ms";
    });
  } else {
    birdimg.style.right = NostringBirdRight + 50 + "px";
  }
};
export const BirdMove = () => {
  return setInterval(birdMove, 100);
};
export const createBird = () => setInterval(birdFly, 250);
