function setup() {
  createCanvas(400, 400);
}

var x1 = 10;
var changeInX1 = 3;

var y1 = 10;
var changeInY1 = 5;

var x2 = 5;
var changeInX2 = 3;

var y2 = 5;
var changeInY2 = 3;

function draw() {
  background(220);

  ellipse(x1, y1, 50);
  ellipse(x2, y2, 50);

  x1 = x1 + changeInX1;
  y1 = y1 + changeInY1;

  x2 = x2 + changeInX2;
  y2 = y2 + changeInY2;

  if (x1 > width) {
    changeInX1 = -3;
  }

  if (x1 < 0) {
    changeInX1 = 3;
  }

  if (y1 > height) {
    changeInY1 = -3;
  }

  if (y1 < 0) {
    changeInY1 = 3;
  }

  if (x2 > width) {
    changeInX2 = -3;
  }

  if (x2 < 0) {
    changeInX2 = 3;
  }

  if (y2 > height) {
    changeInY2 = -3;
  }

  if (y2 < 0) {
    changeInY2 = 3;
  }
}
