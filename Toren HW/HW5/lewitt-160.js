function setup() {
  createCanvas(450, 450);
  strokeWeight(3);
  noFill();
}

function draw() {
  line(30, 30, 390, 390);
  line(30, 390, 390, 30);
  rect(0, 0, 430, 430);
}
