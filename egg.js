class Egg {
    _x;
    _y;
    _width;
    _height;
    _src;
    _speed;

    constructor(x, y, width, height, src, speed) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._src = src;
        this._speed = speed;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._src = value;
    }

    moveDown() {
        this._y += this._speed;
    }

    drawEgg(ctx) {
        let imageEgg = new Image();
        imageEgg.src = this._src;
        ctx.drawImage(imageEgg, this._x, this._y, this._width, this._height)
    }
}