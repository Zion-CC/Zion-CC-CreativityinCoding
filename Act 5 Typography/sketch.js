let txt = "TYPOGRAPHY";

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textFont("Arial");
  textStyle(BOLD);
}

function draw() {
  background(20);

  let s = 70 + sin(frameCount * 0.08) * 15;
  let angle = sin(frameCount * 0.04) * 0.3;

  push();
  translate(width / 2, height / 2);
  rotate(angle);

  textSize(s);

  // Animated gold-orange color
  let r = 255;
  let g = 180 + sin(frameCount * 0.05) * 75;
  let b = 50 + sin(frameCount * 0.08) * 30;

  fill(r, g, b);
  noStroke();

  text(txt, 0, 0);
  pop();
}