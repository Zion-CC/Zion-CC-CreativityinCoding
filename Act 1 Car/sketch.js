function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); // Light gray background
  
  // CAR BODY
  fill(0, 0, 255); // Blue body
  noStroke();
  rect(80, 200, 150, 60); // Main body rect(x, y, w, h)
  
  // Car Roof
  fill(0, 0, 200); // Slightly darker blue for the roof
  quad(110, 200, 140, 150, 200, 150, 220, 200); 
  
  // Windows
  fill(150, 200, 255); // Light blue
  quad(115, 195, 145, 155, 195, 155, 215, 195);
  
  // WHEELS
  fill(50); // Dark gray tires
  ellipse(110, 260, 50, 50); // Back wheel ellipse(x, y, w, h)
  ellipse(200, 260, 50, 50); // Front wheel
  
  fill(200); // Silver hubcaps
  ellipse(110, 260, 25, 25);
  ellipse(200, 260, 25, 25);
  
  // HEADLIGHT (front)
  fill(255, 255, 150); // Pale yellow lens
  rect(225, 215, 18, 10, 3); // Headlight housing, slight rounding
  
  // Headlight glow
  fill(255, 255, 100, 80); // Semi-transparent yellow glow
  ellipse(243, 220, 30, 18);
  
  // TAIL LIGHT (back)
  fill(255, 50, 50); // Bright red tail light
  rect(80, 215, 12, 10, 3);
}