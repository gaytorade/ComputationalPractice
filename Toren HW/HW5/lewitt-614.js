function setup() {
  createCanvas(500, 500);
  strokeWeight(8);
  background(255);
}

function draw() {
  line(width / 3, 0, width / 3, 2 * (height / 3));
  line(width / 3, height / 3, width, height / 3);
  line(0, 2 * (height / 3), width, 2 * (height / 3));
}
