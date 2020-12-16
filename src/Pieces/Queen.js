class Queen extends Piece {
    constructor(cx, cy, type) {
        super(cx, cy, type);

        this.continuous = true;
        this.pattern = [
            ['X', 'X', 'X'],
            ['X', 'O', 'X'],
            ['X', 'X', 'X']
        ];
    }
}