function setup() {
  createCanvas(400, 400);
}
var margin = 0;
function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    if (i < 200) {
      line(i, 10, i, i * 2);
    } else {
      line(i, 10, i, 390);
    }
  }
}
