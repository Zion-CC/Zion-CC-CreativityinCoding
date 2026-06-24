let Goldenhour;
let fft;
let playButton;

function preload() {
  Goldenhour = loadSound("JVKE-goldenhour.mp3");
}

function setup() {
  createCanvas(400, 400);

  fft = new p5.FFT();
  fft.setInput(Goldenhour);

  noFill();

  // Create Play/Pause button
  playButton = createButton("▶ Play");
  playButton.position(10, 10);
  playButton.size(90, 35);
  playButton.style("background", "#FFD700");
  playButton.style("color", "#000");
  playButton.style("border", "none");
  playButton.style("border-radius", "8px");
  playButton.style("font-size", "16px");
  playButton.style("cursor", "pointer");
  playButton.mousePressed(toggleMusic);
}

function draw() {
  background(15, 10, 0);
  // Rename waveform
  let drawWave = fft.waveform();

  stroke(255, 215, 0);
  strokeWeight(3);
  noFill();

  beginShape();
  for (let i = 0; i < drawWave.length; i++) {
    let x = map(i, 0, drawWave.length, 0, width);
    let y = map(drawWave[i], -1, 1, height * 0.2, height * 0.8);
    vertex(x, y);
  }
  endShape();

  // Bass-reactive circles
  let bass = fft.getEnergy("bass");

  fill(255, 223, 50, 180);
  noStroke();
  ellipse(width / 2, height / 2, bass + 50);

  noFill();
  stroke(255, 200, 0, 150);
  strokeWeight(5);
  ellipse(width / 2, height / 2, bass + 90);
}

// Play/Pause button function
function toggleMusic() {
  userStartAudio();

  if (Goldenhour.isPlaying()) {
    Goldenhour.pause();
    playButton.html("▶ Play");
  } else {
    Goldenhour.play();
    playButton.html("⏸ Pause");
  }
}