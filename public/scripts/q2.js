// q1.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

$(document).ready(function() {


    //modifying q2.html

    let calculateButton = $('#calculate');

    let clickFunction = function(event) {
        // get the string the user typed into the text box
        let widthString = $('#width').val();

        // get the string the user typed into the text box
        let heightString = $('#height').val();

        // get the string the user typed into the text box
        let lengthString = $('#length').val();

        // convert the Celsius string to a number
        let widthNum = Number(widthString);

        // convert the Celsius string to a number
        let heightNum = Number(heightString);

        // convert the Celsius string to a number
        let lengthNum = Number(lengthString);

        // calculate the Fahrenheit value of celsiusNum
        let x = ((widthNum * widthNum) + (heightNum * heightNum));
        let sqrt_x = Math.sqrt(x);
        let PPI = sqrt_x / lengthNum;

        // get the Fahrenheit element
        let PPI_Display = $('#PPI');

        // set the Fahrenheit value as the text of fahrenheitDisplay
        PPI_Display.text(PPI);
    }

    // attach the clickFunction to the button
    calculateButton.click(clickFunction);
});
