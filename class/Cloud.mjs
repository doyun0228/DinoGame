export class Cloud {
  constructor() {
    this.cloud = document.createElement("img");
    const width = window.innerWidth;
    const height = 200;
    this.cloud.src = "./assets/Cloud.png";
    this.cloud.className = "absolute";
    document.body.appendChild(this.cloud);
    this.cloud.style.right = Math.random() * width + "px";
    this.cloud.style.top = Math.random() * height + "px";
    this.cloud.style.transition = "all";
  }
}
