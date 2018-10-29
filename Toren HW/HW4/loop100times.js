function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  for (var i = 0; i < 100; i++) {
    var x = random(width);
    var y = random(height);

    stroke(x, y, 100);
    point(x, y);
  }
}
