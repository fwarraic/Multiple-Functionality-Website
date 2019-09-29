// main.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

$(document).ready(function() {

    // always call your code through ready to ensure the DOM is fully loaded
        // get a reference to the image element where we'll show the picture
    let fortune = $('#answer');

    // get a reference to the "Get pet" button
    let askButton = $('#askbutton');

    // create the function that will be called when the button is clicked
    let clickFunction = function(event) {
        // there are 5 possible answers, so choose a random number from 1 to 5
        let r = Math.floor(5 * Math.random() + 1)

        let response = "";
        if (r === 1) {
            response = "Yes";
        } else if (r === 2) {
            response = "No";
        } else if (r === 3) {
            response = "Absolutely!";
        } else if (r == 4) {
            response = "Definitely not!";
        } else {
            response = "Maybe";
        }

        
        fortune.text(response);
        fortune.fadeOut('slow');
        fortune.fadeIn('slow');

        }

        // add the click function to pet button
        askButton.click(clickFunction);

});
