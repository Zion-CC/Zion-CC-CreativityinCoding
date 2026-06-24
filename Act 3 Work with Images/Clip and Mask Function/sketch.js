let ZabeelPark;

function preload() {
  ZabeelPark = loadImage('Zabeel-park.jpg');
}

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(200);

  // Draw the clipping region
  drawingContext.save();

  drawingContext.beginPath();

  // Top inverted triangle
  drawingContext.moveTo(200, 20);
  drawingContext.lineTo(50, 20);
  drawingContext.lineTo(200, 250);
  drawingContext.closePath();

  // Bottom inverted triangle
  drawingContext.moveTo(350, 250);
  drawingContext.lineTo(50, 250);
  drawingContext.lineTo(200, 480);
  drawingContext.closePath();

  drawingContext.clip();

  // Draw the image after clipping
  image(ZabeelPark, 0, 0, width, height);

  drawingContext.restore();
}