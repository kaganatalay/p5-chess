class Piece {
    constructor(cx, cy, type) {
        this.coordinate = createVector(cx, cy);
        this.position = createVector();

        this.type = type;
        this.figure = null;
        this.parsed = null;
    }

    start() {
        if(this.parsed == null) {
            this.parsed = this.parsePattern();
        }

        this.render();
        this.update();
    }

    render() {
        image(this.figure, this.position.x, this.position.y, board.cell_size * 0.9, board.cell_size * 0.9);
    }

    update() {
        this.position.x = this.coordinate.x * board.cell_size + board.cell_size/2;
        this.position.y = this.coordinate.y * board.cell_size + board.cell_size/2;
    }

    getPossibleMoves() {
        let moves = [];
        for(let vector of this.parsed) {
            if(board.getPieceFromCoordinate(this.coordinate.x + vector.x, this.coordinate.y + vector.y) == null) {
                let move = createVector(this.coordinate.x + vector.x, this.coordinate.y + vector.y);
                moves.push(move);
            }
        }
        
        return moves;
    }

    parsePattern() {
        let parsed = [];
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(this.pattern[i][j] == 'X') {
                    let x = map(j, 0, 2, -1, 1);
                    let y = map(i, 0, 2, -1, 1);

                    let vector = createVector(x, y);
                    parsed.push(vector);
                }
            }
        }

        return parsed;
    }

}