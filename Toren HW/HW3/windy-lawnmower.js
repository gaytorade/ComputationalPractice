function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height - 10, x + random(1, 10), height - 10 - random(h));

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width + 2, height - 15);
    h = 10;
  }

  noStroke();
  fill(40, 100, 60);
  rect(0, height - 10, width, 10);
}
