function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);

  // ANTENNAE
  stroke(80, 200, 120);
  strokeWeight(3);
  line(185, 80, 160, 40);
  line(215, 80, 240, 40);
  noStroke();

  // Antenna tips
  fill(0, 255, 150);
  ellipse(160, 37, 14, 14);
  ellipse(240, 37, 14, 14);

  // NECK + 
  fill(80, 200, 120);
  noStroke();
  rect(186, 225, 28, 90); // 

  // HEAD 
  fill(80, 200, 120);
  noStroke();
  beginShape();
  curveVertex(200, 85);
  curveVertex(200, 85);
  curveVertex(255, 100);
  curveVertex(270, 160);
  curveVertex(240, 220);
  curveVertex(200, 230);
  curveVertex(160, 220);
  curveVertex(130, 160);
  curveVertex(145, 100);
  curveVertex(200, 85);
  curveVertex(200, 85);
  endShape(CLOSE);

  // EYES
  fill(0);
  ellipse(172, 165, 40, 30);
  ellipse(228, 165, 40, 30);

  // Eye shine
  fill(255);
  ellipse(178, 158, 9, 9);
  ellipse(234, 158, 9, 9);

  // MOUTH
  fill(50, 150, 80);
  arc(200, 210, 40, 20, 0, PI);

  // BODY (overlaps bottom of neck rect)
  fill(80, 200, 120);
  noStroke();
  ellipse(200, 310, 90, 100);

  // ARMS
  stroke(80, 200, 120);
  strokeWeight(12);
  line(158, 285, 110, 335);
  line(242, 285, 290, 335);
  noStroke();

  // HANDS
  fill(80, 200, 120);
  ellipse(104, 338, 18, 18);
  ellipse(296, 338, 18, 18);

  // LEGS
  stroke(80, 200, 120);
  strokeWeight(12);
  line(182, 358, 165, 420);
  line(218, 358, 235, 420);
  noStroke();

  // FEET
  fill(80, 200, 120);
  ellipse(160, 425, 30, 15);
  ellipse(240, 425, 30, 15);
}