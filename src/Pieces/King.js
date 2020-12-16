class King extends Piece {
    constructor(cx, cy, type) {
        super(cx, cy, type);

        this.continuous = false;
        this.pattern = [
            ['X', 'X', 'X'],
            ['X', 'O', 'X'],
            ['X', 'X', 'X']
        ];
    }
}