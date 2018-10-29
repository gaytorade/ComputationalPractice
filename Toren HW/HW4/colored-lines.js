function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 400, 400, 100);
}

function draw() {
  background(255);
  var a = 0;
  for (var x = 10; x < width - 10; x = x + 10) {
    stroke(x, 100, 100);
    line(x, height / 2, mouseX, mouseY);
    a++;
  }
}
