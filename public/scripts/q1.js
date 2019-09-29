// q1.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

$(document).ready(function() {


    //modifying q1.html

    let convertButton = $('#convert');

    let clickFunction = function(event) {
        // get the string the user typed into the text box
        let centimetreString = $('#cm').val();

        // convert the Celsius string to a number
        let centimetreNum = Number(centimetreString);

        // calculate the Fahrenheit value of celsiusNum
        let inches = centimetreNum * 0.39;

        // get the Fahrenheit element
        let inchesDisplay = $('#inches');

        // set the Fahrenheit value as the text of fahrenheitDisplay
        inchesDisplay.text(inches);
    }

    // attach the clickFunction to the button
    convertButton.click(clickFunction);
});
