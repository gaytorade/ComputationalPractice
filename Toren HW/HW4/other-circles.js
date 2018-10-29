function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    var xi = x[i];
    var yi = y[i];
    var size = 1 + (x.length - i);
    var halfSize = size / 2;

    rect(xi - halfSize, yi - halfSize, size, size);
    triangle(xi, yi, size, xi, yi, size);
  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
