let ZabeelPark;

function preload() {
  ZabeelPark = loadImage('Zabeel-park.jpg');
}

function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();

  // Resize image to match canvas
  ZabeelPark.resize(width, height);
}

function draw() {
  // Draw a limited number of dots each frame
  for (let i = 0; i < 300; i++) {

    // Random scattered positions
    let x = random(width);
    let y = random(height);

    // Get pixel color from image
    let c = ZabeelPark.get(int(x), int(y));

    fill(c);

    // Small random circle size for pointillism effect
    let dotSize = random(2, 6);

    ellipse(x, y, dotSize, dotSize);
  }
}