"use strict";
console.log("Hello World")

console.log(parseInt("17 dogs."));

var whatIsTheWord = prompt("what is your favorite work appropriate word?");
console.log(whatIsTheWord);

function doTheThing(input){
    var output = input + " was pulled into the function. Now it is a concatenated string.";
    return output;

}

console.log(doTheThing("Hotdog"));

//another way to define functions. Function Expression
var coolGuyFunction = function (string){
    return string + ", but with sunglasses."
}
console.log(coolGuyFunction("skunk"));