let ZabeelPark;

function preload() {
  ZabeelPark = loadImage('Zabeel-park.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(ZabeelPark, 0, 0, 400, 400);
}