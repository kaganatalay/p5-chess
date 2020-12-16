class Piece {
    constructor(cx, cy, figure) {
        this.coordinates = createVector(cx, cy);
        this.position = createVector();
        this.figure = figure;
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