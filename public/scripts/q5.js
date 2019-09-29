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
    let generateButton = $('#generate');

    let fam_person = $('#famous-person');
    //random famous person function.
    let fam_personClickFunction = function(event){

 		let r = Math.floor(4 * Math.random() + 1)

        let response = "";
        if (r === 1) {
            response = "my mother";
        } else if (r === 2) {
            response = "Bill Gates";
        } else if (r === 3) {
            response = "Beyonce";
        } else {
        	response = "Jennifer Lawrence's pool cleaner";
        }

        fam_person.text(response);
    }

    generateButton.click(fam_personClickFunction);


    let location = $('#location');
    //random location function
    let locationClickFunction = function(event){

 		let r = Math.floor(4 * Math.random() + 1)

        let response = "";
        if (r === 1) {
            response = "washing machine";
        } else if (r === 2) {
            response = "dashboard";
        } else if (r === 3) {
            response = "lawn mower";
        } else {
        	response = "bedside table";
        }

        location.text(response);
    }

    generateButton.click(locationClickFunction);


    let time = $('#time');
    //random time function
    let timeClickFunction = function(event){

 		let r = Math.floor(3 * Math.random() + 1)

        let response = "";
        if (r === 1) {
            response = "every third Tuesday around 10am";
        } else if (r === 2) {
            response = "once in a blue moon";
        } else {
        	response = "whenever I am feeling really hungry";
        }

        time.text(response);
    }

    generateButton.click(timeClickFunction);

    let picture = $('#picture');
    //random picture function
    let pictureClickFunction = function(event){

    	let r = Math.floor(3 * Math.random() + 1)

        let fileName = "";
        let altText = "";
        if (r === 1) {
            fileName = "funny_1.jpg";
            altText = "funny picture 1";
        } else if (r === 2) {
            fileName = "funny_2.jpg";
            altText = "funny picture 2";
        } else {
        	fileName = "funny_3.jpg";
        	altText = "funny picture 3";
        }

        picture.hide();
        picture.attr('src', 'images/' + fileName);
        picture.attr('alt', altText);
        picture.fadeIn()('slow');
    }

    generateButton.click(pictureClickFunction);



});
