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
        push();
        image(this.figure, this.position.x, this.position.y);
        pop();
    }

    update() {
        this.position = this.coordinates.mult(board.cell_size);
    }

}