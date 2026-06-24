let dots = [];

function setup() {
  createCanvas(600, 600);

  for (let x = 20; x < width; x += 20) {
    for (let y = 20; y < height; y += 20) {
      dots.push({
        x: x,
        y: y,
        homeX: x,
        homeY: y
      });
    }
  }

  noStroke();
}

function draw() {
  background(15);

  for (let d of dots) {
    let distance = dist(mouseX, mouseY, d.x, d.y);

    if (distance < 100) {
      let angle = atan2(d.y - mouseY, d.x - mouseX);
      let force = map(distance, 0, 100, 8, 0);

      d.x += cos(angle) * force;
      d.y += sin(angle) * force;
    }

    // Return to original position
    d.x = lerp(d.x, d.homeX, 0.05);
    d.y = lerp(d.y, d.homeY, 0.05);

    fill(
      map(d.x, 0, width, 50, 255),
      map(d.y, 0, height, 50, 255),
      255
    );

    circle(d.x, d.y, 8);
  }
}