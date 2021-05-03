"use strict";

var passwordEntered = [];
var password = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
$(document).keyup(function(event){
//log the keys
    passwordEntered.push(event.keyCode);
// stop logging once done
    passwordEntered = passwordEntered.slice(-10);
// check if passcode is correct
    if(passwordEntered.join(" ") === password.join(" ")) {
        setTimeout(function () {
            document.querySelector("link[href='css/konami.css']").href = "css/konami2.css";
        }, 500);
// change text in the garden-text ID
        setTimeout(function () {
            $("#garden-text").text("Congrats! The password you entered was correct~");
        }, 500);
//enter the garden
    setTimeout(function () {
        document.querySelector("link[href='css/konami2.css']").href = "css/konami3.css";
    }, 5000)
        setTimeout(function () {
            $("#garden-text").text("Please enjoy our garden and remember to keep it a secret!");
        }, 5000);
    // fades out the text-box
         $(".garden-text").delay(8000).fadeOut();
    }
});