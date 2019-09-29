// main.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

function setup() {
    createCanvas(500, 500).parent('p5canvas');
    background(200);

    
}

function draw() {

    if (mouseIsPressed) {

    	ellipse(mouseX, mouseY, 50, 50);
    	if (keyIsPressed)
    		if (key === 'r' || key === 'R') {
    			fill(255, 0, 0);
        		ellipse(mouseX, mouseY, 50, 50);
    		} else if (key === 'g' || key === 'G') {
    			fill(0, 128, 0);
        		ellipse(mouseX, mouseY, 50, 50);
        	} else if (key === 'b' || key === 'B') {
        		fill(0, 0, 255);
        		ellipse(mouseX, mouseY, 50, 50);
        }
    	
    }
}

