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
            if(this.type == 'black') {
                let temp = this.pattern[2];
                this.pattern.splice(2, 1);
                this.pattern.push(this.pattern[0]);
                this.pattern[0] = temp;
            }
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
            if(this.continuous == true) {
                let current = this.coordinate.copy();
                for(let i = 0; i < 8; i++) {
                    let piece = board.getPieceFromCoordinate(current.x + vector.x, current.y + vector.y);
                    if(piece == null) {
                        let move = createVector(current.x + vector.x, current.y + vector.y);
                        moves.push(move);
                        current.add(vector);
                    } else if (piece.type != board.selected.type) {
                        let move = createVector(current.x + vector.x, current.y + vector.y);
                        moves.push(move);
                    } else {
                        break;
                    }
                }
            } else {
                let piece = board.getPieceFromCoordinate(this.coordinate.x + vector.x, this.coordinate.y + vector.y);
                if(piece == null || piece.type != board.selected.type) {
                    let move = createVector(this.coordinate.x + vector.x, this.coordinate.y + vector.y);
                    moves.push(move);
                }
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