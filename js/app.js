class Ground {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hits = 0;
        this.blue = 13;
    }

    update() {
        fill(0, 0, this.blue);
        rect(this.x, this.y, this.width, this.height);
    }

    hit() {
        this.hits ++;

        if (this.hits % 10 === 0) {
            this.blue += 20;
        }
    }
}

class Raindrop {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5 + Math.random() * 5;
        this.done = false;
    }

    update() {
        this.y = this.y + this.speed;
        this.speed = this.speed + .1;
        fill(0, 0, 255);
        ellipse(this.x, this.y, this.width, this.height);
    }
}

var raindrops = [];

var ground = new Ground(0, 600, 800, 100);

function setup() {
    createCanvas(800, 700);
}

var frame = 0;

function draw() {
    background(255, 255, 255);

    frame ++;

    if (frame === 10) {
        var x = 10 + Math.random() * 800;

        raindrops.push(new Raindrop(x, 10, 5, 5));

        frame = 0;
    }

    raindrops = raindrops.filter((r) => !r.done);

    for(var i = 0; i < raindrops.length; i ++) {
        raindrops[i].update();

        if (raindrops[i].y > 600) {
            ground.hit();
            raindrops[i].done = true;
        }
    }

    ground.update();
}