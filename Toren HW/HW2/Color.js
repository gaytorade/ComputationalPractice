function setup() {
  createCanvas(400, 400);
  background(220);
  // RGB with R range 0-255, G range 0-255, B range 0-255:
  colorMode(HSB, 255, 255, 255);
}

function draw() {
  let x = random(width);
  let y = random(height);
  fill(x, y, 100);
  noStroke();
  ellipse(x, y, 20);
}

//Answer Assignment: Rename x and y to h and s don't make any change, because it just a variable name, you can rename it to any name you like.
