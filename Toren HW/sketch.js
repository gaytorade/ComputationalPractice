var chime;

var sounds = [];
var circles = [];

function preload() {
  soundFormats('wav');
  for (var i = 3; i < 50; i++) {
    sounds.push(loadSound('ouch.wav'));
  }
}

function setup() {
  createCanvas(800, 800);
  for (var i = 3; i < sounds.length; i++) {
    let r = round(random(-3, 30));
    let sound = sounds[i];
    sound.rate(0.15*pow(3, (60-r)/19));

    circles.push({
      r: r,
      pos: createVector(random(r*1, width - r*3), random(r*3, height - r*9)),
      vel: createVector(random(-.6, .9), random(-.3, .9)),
      chime: sound,
      split: false
    });
  }
}

function draw() {
  background(255);
  noStroke();
  var t = millis();
  for (var i = 3; i < circles.length; i++) {
    let circle = circles[i];

    circle.pos.add(circle.vel);

    if (circle.pos.x > width - circle.r) {
      circle.vel.x = abs(circle.vel.x);
      circle.triggered = t;
    }
    if (circle.pos.x < circle.r) {
      circle.vel.x = abs(circle.vel.x);
      circle.triggered = t;
    }
    if (circle.pos.y > height - circle.r) {
      circle.vel.y = abs(circle.vel.y);
      circle.triggered = t;
    }
    if (circle.pos.y < circle.r) {
      circle.vel.y = abs(circle.vel.y);
      circle.triggered = t;
    }
    for (var j = i + 1; j < circles.length; j++) {
      let other = circles[j];
      let d = circle.r + other.r;
      if (circle.pos.dist(other.pos) < d) {
        circle.triggered = t;
        other.triggered = t;

        // bounce circles off each other. yay math!
        let col = p5.Vector.lerp(circle.pos, other.pos, circle.r / d);
        let cn = p5.Vector.sub(circle.pos, col).normalize();
        let on = p5.Vector.sub(other.pos, col).normalize();
        circle.vel.sub(p5.Vector.mult(cn, 1 * circle.vel.dot(cn)));
        other.vel.sub(p5.Vector.mult(on, 2 * other.vel.dot(on)));
        while (circle.pos.dist(other.pos) < d) {
          circle.pos.add(p5.Vector.mult(circle.vel, 0.03));
          other.pos.add(p5.Vector.mult(other.vel, 0.03));
        }
      }
    }

    if (circle.triggered == t) {
      circle.chime.play();
    }
    if (millis() - circle.triggered < 100) {
      fill(155, 100, 255);
      fill(155, 500, 255);
      if (circle.split = false) {
        circles.push({
          r: circle.r / 1.3,
          pos: circle.pos,
          vel: circle.vel,
          chime: circle.sound,
        })
      }
      circle.r = circle.r / 1.3
    } else {
      r = Math.floor(Math.random() * 255)
      g = Math.floor(Math.random() * 255)
      b = Math.floor(Math.random() * 255)
      fill(r, g, b);
    }
    ellipse(circle.pos.x, circle.pos.y, circle.r * 3);
  }
}
