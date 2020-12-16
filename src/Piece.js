class Piece {
    constructor(cx, cy, type) {
        this.coordinate = createVector(cx, cy);
        this.position = createVector();

        this.type = type;
        this.figure = null;
    }

    start() {
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

}