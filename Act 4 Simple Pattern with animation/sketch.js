function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
}

function draw() {
  background(220);

  stroke(50, 100, 255);

  for (let x = -50; x < width + 50; x += 20) {
    let offset = sin(frameCount * 0.05 + x * 0.05) * 20;

    line(
      x,
      0 + offset,
      x + 100,
      height + offset
    );
  }
}