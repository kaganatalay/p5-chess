class Pawn extends Piece {
    constructor(cx, cy, type) {
        super(cx, cy, type);

        this.move = createVector(0, -1);
    }
}