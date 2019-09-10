function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
        console.log('right: ' + this.left);
    }

    this.moveLeft = function () {
        this.left -= this.speed;
        console.log('left: ' + this.left);
    }

    this.moveTop = function () {
        this.top -= this.speed;
        console.log('top: ' + this.top);
    }

    this.moveBottom = function () {
        this.top += this.speed;
        console.log('bottom: ' + this.top);
    }



}
var hero = new Hero('luffy.png', 20, 30, 200, 100);

function isAtTopLeft(object) {
    if (object.left === 30 && object.top === 20) {
        return true;
    }
}

function isAtTopRight(object) {
    if (object.left === 1030 && object.top === 20) {
        return true;
    }
}

function isAtBotRight(object) {
    if (object.left === 1030 && object.top === 1020) {
        return true;
    }
}

function isAtBotLeft(object) {
    if (object.left === 30 && object.top === 1020) {
        return true;
    }
}

let status = "topleft";

function start() {

    if(isAtTopRight(hero)){
        status="topright";
    }
    if(isAtTopLeft(hero)){
        status="topleft";
    }
    if(isAtBotRight(hero)){
        status="botright";
    }
    if(isAtBotLeft(hero)){
        status="botleft";
    }
    if (status == "topleft"){
        hero.moveRight()
    }
    if (status == "topright"){
        hero.moveBottom();
    }
    if(status=="botright"){
        hero.moveLeft();
    }
    if(status=="botleft"){
        hero.moveTop();
    }


    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
