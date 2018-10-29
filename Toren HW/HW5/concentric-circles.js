function setup() {
  createCanvas(400, 400);
}
var x = 200;
var y = 200;

function draw() {
  background(220);
  noFill();
  for (var i = 10; i <= 390; i = i + 10) {
    ellipse(200, 200, i, i);
  }
}
