class Piece {
    constructor(cx, cy) {
        this.coordinates = createVector(cx, cy);
        this.position = createVector();
    }

    start() {
        this.render();
        this.update();
    }

    render() {
        image(this.figure, this.position.x, this.position.y, board.cell_size * 0.8, board.cell_size * 0.8);
    }

    update() {
        this.position.x = this.coordinates.x * board.cell_size + board.cell_size/2;
        this.position.y = this.coordinates.y * board.cell_size + board.cell_size/2;
    }

}