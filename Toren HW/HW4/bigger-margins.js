function setup() {
  createCanvas(1080, 1920);
}

function draw() {
  background(255);
  var a = 0;
  for (var x = 50; x < width - 50; x = x + 10) {
    line(x, height / 2, mouseX, mouseY);
    a++;
  }
}
