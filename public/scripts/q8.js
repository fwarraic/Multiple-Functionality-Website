// main.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

// global variables
let x1, y1;
let dx1, dy1;
let diam1;
let fillColor1;

let x2, y2;
let dx2, dy2;
let diam2;
let fillColor2;

let gameOver;

function setup() {
    createCanvas(500, 500).parent('p5canvas');
    textFont('Georgia');
    textSize(32);

    let gameOver = false;

    // initialize ball1
    x1 = 250;
    y1 = 250;
    dx1 = random(-5, 5);
    dy1 = random(-5, 5);
    diam1 = random(50, 150);
    fillColor1 = color(255, 0, 0);

    // initialize ball 2
    x2 = 250;
    y2 = 250;
    dx2 = random(-5, 5);
    dy2 = random(-5, 5);
    diam2 = random(50, 150);
    fillColor2 = color(random(256), random(256), random(256));
}

function draw() {
    if (gameOver === true) {
        textSize(90);
        text('Game over', 10, 250);
        return;
    }

    background(220);

    if (dist(x1, y1, mouseX, mouseY) < diam1 / 2) {
        gameOver = true;
    }

    updateBall1();
    updateBall2();

    fill(0);
    text('Score: ' + Math.floor(millis() / 1000), 20, 30);
}

function updateBall1() {
    fill(fillColor1);
    noStroke();
    ellipse(x1, y1, diam1, diam1);

    // update the position of the circle
    x1 += dx1;
    y1 += dy1;

    let radius = diam1 / 2;

    // off right?
    if (x1 + radius >= 500) {
        dx1 = -dx1;
    }

    // off bottom?
    if (y1 + radius >= 500) {
        dy1 = -dy1;
    }

    // off left?
    if (x1 - radius < 0) {
        dx1 = -dx1;
    }

    // off top?
    if (y1 - radius < 0) {
        dy1 = -dy1;
    }
}

function updateBall2() {
    fill(fillColor2);
    noStroke();
    ellipse(x2, y2, diam2, diam2);

    // update the position of the circle
    x2 += dx2;
    y2 += dy2;

    let radius = diam2 / 2;

    // off right?
    if (x2 + radius >= 500) {
        dx2 = -dx2;
    }

    // off bottom?
    if (y2 + radius >= 500) {
        dy2 = -dy2;
    }

    // off left?
    if (x2 - radius < 0) {
        dx2 = -dx2;
    }

    // off top?
    if (y2 - radius < 0) {
        dy2 = -dy2;
    }
}