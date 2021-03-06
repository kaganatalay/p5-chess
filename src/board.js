class Board {
    constructor() {
        this.cell_size = width / 8;
        this.pieces = [];
        this.selected = null;

        // White
        for(let i = 0; i < 8; i++) {
            this.placePiece(Pawn, i, 6, 'white');
        }

        this.placePiece(Rook, 0, 7, 'white');
        this.placePiece(Rook, 7, 7, 'white');

        this.placePiece(Knight, 1, 7, 'white');
        this.placePiece(Knight, 6, 7, 'white');

        this.placePiece(Bishop, 2, 7, 'white');
        this.placePiece(Bishop, 5, 7, 'white');

        this.placePiece(Queen, 3, 7, 'white');
        this.placePiece(King, 4, 7, 'white');
        
        // Black
        for(let i = 0; i < 8; i++) {
            this.placePiece(Pawn, i, 1, 'black');
        }

        this.placePiece(Rook, 0, 0, 'black');
        this.placePiece(Rook, 7, 0, 'black');

        this.placePiece(Knight, 1, 0, 'black');
        this.placePiece(Knight, 6, 0, 'black');

        this.placePiece(Bishop, 2, 0, 'black');
        this.placePiece(Bishop, 5, 0, 'black');

        this.placePiece(Queen, 3, 0, 'black');
        this.placePiece(King, 4, 0, 'black');
    }

    start() {
        this.render();
        this.update();
    }

    render() {
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                push();
                noStroke();
                fill(238, 238, 210);
                if((i % 2 == 0 && j % 2 != 0) || (i % 2 != 0 && j % 2 == 0)) {
                    fill(118, 150, 86);  
                }
                
                rect(j * this.cell_size, i * this.cell_size, this.cell_size, this.cell_size);
                pop();
            }
        }

        if(this.selected != null) {
            let moves = this.selected.getPossibleMoves();
            push();
            for(let move of moves) {      
                noStroke();
                fill(0, 150);
                ellipse(move.x * this.cell_size + this.cell_size/2, move.y * this.cell_size + this.cell_size/2, this.cell_size * 0.3);
            }

            fill(255, 255, 100);
            rect(this.selected.coordinate.x * this.cell_size, this.selected.coordinate.y * this.cell_size, this.cell_size, this.cell_size);
            pop();
        }
    }

    update() {
        for(let piece of this.pieces) {
            piece.start();
        }
    }

    getPieceFromCoordinate(cx, cy) {
        const coordinate = createVector(cx, cy);
        let piece = null;

        for(let p of this.pieces) {
            if(p.coordinate.x == coordinate.x && p.coordinate.y == coordinate.y) {
                piece = p;
            }
        }

        return piece;
    }

    placePiece(Name, cx, cy, type) {
        let piece = new Name(cx, cy, type);
        piece.figure = figures[piece.type][Name.name.toLowerCase()];
        this.pieces.push(piece);
    }
}