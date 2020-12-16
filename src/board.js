class Board {
    constructor() {
        this.cell_size = width / 8;
        this.pieces = [];
        this.position = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];

        this.pieces.push(new Pawn(0, 6));
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
    }

    update() {
        for(let piece of this.pieces) {
            piece.start();
        }
    }
}