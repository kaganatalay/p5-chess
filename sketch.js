let board;
let figures = {
  white: {},
  black: {}
};

function setup() {
  createCanvas(800, 800); 
  imageMode(CENTER);
  board = new Board();
}

function draw() {
  background(51);

  board.start();
}

function mousePressed() {
  let coordinate = createVector();
  coordinate.x =  Math.trunc(mouseX / board.cell_size);
  coordinate.y = Math.trunc(mouseY / board.cell_size);
  
  let piece = board.getPieceFromCoordinate(coordinate.x, coordinate.y);
  console.log(piece);
}
 
function preload() {
  figures.white.pawn   = loadImage('assets/pawn-white.png'   );
  figures.white.rook   = loadImage('assets/rook-white.png'   );
  figures.white.knight = loadImage('assets/knight-white.png' );
  figures.white.bishop = loadImage('assets/bishop-white.png' );
  figures.white.queen  = loadImage('assets/queen-white.png'  );
  figures.white.king   = loadImage('assets/king-white.png'   );

  figures.black.pawn   = loadImage('assets/pawn-black.png'   );
  figures.black.rook   = loadImage('assets/rook-black.png'   );
  figures.black.knight = loadImage('assets/knight-black.png' );
  figures.black.bishop = loadImage('assets/bishop-black.png' );
  figures.black.queen  = loadImage('assets/queen-black.png'  );
  figures.black.king   = loadImage('assets/king-black.png'   );
}