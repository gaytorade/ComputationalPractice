function setup() {
  createCanvas(450, 450);
  colorMode(RGB);
}

function draw() {
  noStroke();
  fill(72, 61, 139);
  rect(0, 0, 400, 400);

  stroke(255, 255, 255);
  strokeWeight(5);
  fill(0, 0, 0);
  rect(100, 100, 200, 200);
}
