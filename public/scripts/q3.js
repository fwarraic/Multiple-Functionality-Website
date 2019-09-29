// q1.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

$(document).ready(function() {


    //modifying q3.html

    let qouteText = $('#qoute');

    //checkbox modificaitons
    //uppercase lowercase conundrum
    let uppercaseCheckbox = $('#uppercase');
    let uppercaseClickFunction = function(event) {
        if (uppercaseCheckbox.prop('checked')) {
            qouteText.css('text-transform', 'uppercase');
        } else {
            qouteText.css('text-transform', 'lowercase');
        }
    }

    // attach the clickFunction to the checkbox
    uppercaseCheckbox.click(uppercaseClickFunction);

    

    //border line conundrum
    let borderCheckbox = $('#border');
    let borderClickFunction = function(event) {
        if (borderCheckbox.prop('checked')) {
            qouteText.css('border', 'solid black');
        } else {
            qouteText.css('border', 'white');
        }
    }

    // attach the clickFunction to the checkbox
    borderCheckbox.click(borderClickFunction);


    //Radio Button modifications
    // get a reference to "font" radio buttons element
    let radioButtons = $('input[name="font"]');

    // create the function that will be called when a radio button is clicked
    let fontClickFunction = function(event) {

    let fontName = $('input[name="font"]:checked').val();
     qouteText.css('font-family', fontName);
     
    }

    // add the click function to the radioButtons
    radioButtons.click(fontClickFunction);
   
});
