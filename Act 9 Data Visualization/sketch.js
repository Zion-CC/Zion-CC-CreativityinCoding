let songs = [
  { title: "Blinding Lights", streams: 5.2 },
  { title: "Shape of You", streams: 4.4 },
  { title: "Someone You Loved", streams: 4.0 },
  { title: "Sunflower", streams: 3.9 },
  { title: "As It Was", streams: 3.8 },
  { title: "Starboy", streams: 3.8 },
  { title: "Sweater Weather", streams: 3.7 },
  { title: "One Dance", streams: 3.6 },
  { title: "STAY", streams: 3.6 },
  { title: "Believer", streams: 3.5 }
];

function setup() {
  createCanvas(900, 600);
  textFont("Arial");
}

function draw() {
  background(245);

  fill(30);
  textSize(24);
  textAlign(CENTER);
  text("Top 10 Most Streamed Songs on Spotify", width / 2, 40);

  let chartX = 170;
  let chartY = 80;
  let chartW = 650;
  let barH = 35;
  let gap = 15;

  // Axes
  stroke(0);
  line(chartX, chartY - 10, chartX, chartY + songs.length * (barH + gap));
  line(chartX, chartY + songs.length * (barH + gap), chartX + chartW, chartY + songs.length * (barH + gap));

  noStroke();

  for (let i = 0; i < songs.length; i++) {

    let y = chartY + i * (barH + gap);

    // Animate bars
    let targetWidth = map(songs[i].streams, 0, 5.5, 0, chartW);
    let animatedWidth = min(targetWidth, frameCount * 8);

    // Bar
    fill(30, 215, 96); // Spotify green
    rect(chartX, y, animatedWidth, barH, 8);

    // Song title
    fill(40);
    textSize(14);
    textAlign(RIGHT, CENTER);
    text(songs[i].title, chartX - 10, y + barH / 2);

    // Stream value
    textAlign(LEFT, CENTER);
    text(songs[i].streams + "B", chartX + animatedWidth + 10, y + barH / 2);
  }

  // X-axis labels
  fill(60);
  textAlign(CENTER);
  textSize(12);

  for (let i = 0; i <= 5; i++) {
    let x = map(i, 0, 5, chartX, chartX + chartW);
    stroke(200);
    line(x, chartY - 10, x, chartY + songs.length * (barH + gap));
    noStroke();
    text(i + "B", x, chartY + songs.length * (barH + gap) + 20);
  }
}