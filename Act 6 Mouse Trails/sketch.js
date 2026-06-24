let particles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(20, 20, 30);

  // Add a new particle
  particles.push({
    x: mouseX + random(-8, 8),
    y: mouseY + random(-8, 8),
    size: random(40, 80),   // Bigger circles
    color: color(random(255), random(255), random(255)),
    alpha: 255
  });

  // Draw particles
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];

    fill(red(p.color), green(p.color), blue(p.color), p.alpha);
    circle(p.x, p.y, p.size);

    p.alpha -= 3;      // Fade slower
    p.size *= 0.99;    // Shrink slower

    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }
}