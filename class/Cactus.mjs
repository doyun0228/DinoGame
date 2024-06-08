export class Cactus {
  constructor() {
    this.cactus = document.createElement("img");
    this.cactus.className = "cactus";
    const cactusImages = [
      "./assets/Cactus/LargeCactus1.png",
      "./assets/Cactus/LargeCactus2.png",
      "./assets/Cactus/LargeCactus3.png",
      "./assets/Cactus/SmallCactus1.png",
      "./assets/Cactus/SmallCactus2.png",
      "./assets/Cactus/SmallCactus3.png",
    ];
    const width = window.innerWidth;
    const RandomImage = Math.floor(Math.random() * 5);
    this.cactus.src = cactusImages[RandomImage];
    this.cactus.style.position = "absolute";
    this.cactus.style.right = Math.random() + "px";
    this.cactus.style.bottom = "48%";
    document.body.appendChild(this.cactus);
  }
}
