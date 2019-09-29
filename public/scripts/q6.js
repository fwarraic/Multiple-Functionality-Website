// main.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

function setup() {
    createCanvas(750, 750).parent('p5canvas');
}

function draw() {
    background(150);

    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 300, 300);

    line(mouseX - 30, mouseY - 50, mouseX - 80, mouseY - 50);
    line(mouseX + 30, mouseY - 50, mouseX + 80, mouseY - 50);

    fill(26, 255, 0);
    triangle(mouseX, mouseY - 25, mouseX + 25, mouseY + 25, mouseX - 25, mouseY + 25);

    stroke(0, 43, 255);
    line(mouseX - 100, mouseY + 50, mouseX + 100, mouseY + 50);

    //background(200, 200, 200);

    //rectangle(mouseX, mouseY, 50, 50);

}