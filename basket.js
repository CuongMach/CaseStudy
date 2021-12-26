class Basket {
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
        this._speed = value;
    }

    moveLeft() {
        this._x = this._x - this._speed;
    }

    moveRight() {
        this._x = this._x + this._speed;
    }

    drawBasket(ctx) {
        let imageBasket = new Image();
        imageBasket.src = this._src;
        ctx.drawImage(imageBasket, this._x, this._y, this._width, this._height);
    }
}