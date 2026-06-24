function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
  noLoop(); // Draw only once
}

function draw() {
  background(220);
  stroke(50, 100, 255);

  for (let x = -50; x < width + 50; x += 20) {
    // Static wave
    let offset = sin(x * 0.05) * 20;

    line(
      x,
      offset,
      x + 100,
      height + offset
    );
  }
}