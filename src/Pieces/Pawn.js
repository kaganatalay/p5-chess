class Pawn extends Piece {
    constructor(cx, cy, type) {
        super(cx, cy, type);
        
        this.continuous = false;
        this.pattern = [
            [' ', 'X', ' '],
            [' ', 'O', ' '],
            [' ', ' ', ' ']
        ];
    }
}