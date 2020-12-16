class Knight extends Piece {
    constructor(cx, cy, type) {
        super(cx, cy, type);
        
        this.continuous = false;
        this.pattern = [
            [' ', ' ', ' '],
            [' ', 'O', ' '],
            [' ', ' ', ' ']
        ];

        // Can not use the pattern system so parsed vector array is written manually
        this.parsed = [
            createVector(1, 2),
            createVector(-1, 2),
            createVector(1, -2),
            createVector(-1, -2),

            createVector(2, 1),
            createVector(2, -1),
            createVector(-2, 1),
            createVector(-2, -1),
        ];
    }
}