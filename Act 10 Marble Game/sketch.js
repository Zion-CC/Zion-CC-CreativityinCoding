let player;
let target;
let score = 0;

function setup() {
  createCanvas(600, 400);

  player = {
    x: 80,
    y: height / 2,
    r: 15,
    vx: 0,
    vy: 0
  };

  target = {
    x: random(300, 550),
    y: random(50, 350),
    r: 20
  };

  textFont("Arial");
}

function draw() {
  background(230);

  // Score
  fill(0);
  textSize(24);
  textAlign(LEFT);
  text("Score: " + score, 20, 35);

  // Instructions
  textSize(14);
  text("Click anywhere to shoot.", 20, 60);

  // Aim line
  stroke(100);
  line(player.x, player.y, mouseX, mouseY);

  // Player marble
  noStroke();
  fill(0, 100, 255);
  circle(player.x, player.y, player.r * 2);

  // Target marble
  fill(255, 60, 60);
  circle(target.x, target.y, target.r * 2);

  // Move player marble
  player.x += player.vx;
  player.y += player.vy;

  // Slow down (friction)
  player.vx *= 0.99;
  player.vy *= 0.99;

  // Bounce off walls
  if (player.x < player.r || player.x > width - player.r) {
    player.vx *= -1;
  }

  if (player.y < player.r || player.y > height - player.r) {
    player.vy *= -1;
  }

  player.x = constrain(player.x, player.r, width - player.r);
  player.y = constrain(player.y, player.r, height - player.r);

  // Collision
  let d = dist(player.x, player.y, target.x, target.y);

  if (d < player.r + target.r) {
    score++;

    // Reset player
    player.x = 80;
    player.y = height / 2;
    player.vx = 0;
    player.vy = 0;

    // New target position
    target.x = random(250, width - 30);
    target.y = random(30, height - 30);
  }
}

function mousePressed() {
  let angle = atan2(mouseY - player.y, mouseX - player.x);

  let speed = 8;

  player.vx = cos(angle) * speed;
  player.vy = sin(angle) * speed;
}