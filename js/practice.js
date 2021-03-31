"use strict";

// function generates a random number that is both positive and even

function randomPositiveEvenNumber(){
    var randomNumber = Math.ceil(Math.random() * 100) +10;
    if (randomNumber % 2 !==  0){
        return randomPositiveEvenNumber();
    }
    return randomNumber;
}

function plusFive(x){
    return x + 5;
}

function AddOne(x){
    return x + 1;
}

function isPositive(num){
    return num > 0;
}

function isNegative(x){
    return x < 0;
}

function isOdd(num){
    return num % 2 !== 0;
}

function isEven(x){
    return x % 2 === 0;
}

function isNegativeEven(x){
    return x % 2 === 0 && x < 0;
}
function isMultipleOfThree(x){
    return x % 3 === 0;
}

function isMultipleOfFive(x){
    return x % 5 === 0;
}

function isMultipleOfThreeAndFive(x){
    return x % 3 === 0 && x % 5 === 0;
}

function quotient(x,y){
    return x/y;
}

function remainder(x,y){
    return x % y;
}

function areaOfARectangle(width, length){
    return width * length;
}

function isOneOrTwo(x){
    return x == 1 || x == 2;
}

function isOneTwoOrThree(x){
    return x ==1 || x == 2 || x == 3;
}

// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.

function isVowel(str) {
    var noCase = str.toLowerCase(str);
    return (
        noCase === "a" ||
        noCase === "e" ||
        noCase === "i" ||
        noCase === "o" ||
        noCase === "u"
    );
}




