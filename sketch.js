let board;
function setup() {
  createCanvas(800, 800); 
  imageMode(CENTER);
  board = new Board();
}

function draw() {
  background(51);

  board.start();
}