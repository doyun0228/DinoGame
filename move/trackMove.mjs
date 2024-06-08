const track = document.createElement("img");
const track2 = document.createElement("img");

export const centerDiv = document.createElement("div");
const wrapperDiv = document.createElement("div");
wrapperDiv.appendChild(track);
wrapperDiv.appendChild(track2);

wrapperDiv.className = "animation";
track.src = "./assets/Track.png";
track2.src = "./assets/Track.png";
centerDiv.appendChild(wrapperDiv);
centerDiv.className = "center";
document.body.appendChild(centerDiv);
let x = 0;
let stop = false;

const move = () => {
  const element = track.getClientRects();
  const limitWidth = element[0].width;

  if (x > -limitWidth) x -= 10;
  else x = -10;

  wrapperDiv.style.transform = `translateX(${x}px)`;
  if (!stop) requestAnimationFrame(move);
  return centerDiv;
};

export const stopTrack = () => {
  stop = true;
};
export const createTrack = () => requestAnimationFrame(move);

export const startTrack = () => {
  stop = false;
  requestAnimationFrame(move);
};
