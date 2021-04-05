"use strict";

// // function generates a random number that is both positive and even
//
// function randomPositiveEvenNumber(){
//     var randomNumber = Math.ceil(Math.random() * 100) +10;
//     if (randomNumber % 2 !==  0){
//         return randomPositiveEvenNumber();
//     }
//     return randomNumber;
// }
//
// function plusFive(x){
//     return x + 5;
// }
//
// function AddOne(x){
//     return x + 1;
// }
//
// function isPositive(num){
//     return num > 0;
// }
//
// function isNegative(x){
//     return x < 0;
// }
//
// function isOdd(num){
//     return num % 2 !== 0;
// }
//
// function isEven(x){
//     return x % 2 === 0;
// }
//
// function isNegativeEven(x){
//     return x % 2 === 0 && x < 0;
// }
// function isMultipleOfThree(x){
//     return x % 3 === 0;
// }
//
// function isMultipleOfFive(x){
//     return x % 5 === 0;
// }
//
// function isMultipleOfThreeAndFive(x){
//     return x % 3 === 0 && x % 5 === 0;
// }
//
// function quotient(x,y){
//     return x/y;
// }
//
// function remainder(x,y){
//     return x % y;
// }
//
// function areaOfARectangle(width, length){
//     return width * length;
// }
//
// function isOneOrTwo(x){
//     return x == 1 || x == 2;
// }
//
// function isOneTwoOrThree(x){
//     return x ==1 || x == 2 || x == 3;
// }
//
// // Exercise 43
// // Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
//
// function isVowel(str) {
//     var noCase = str.toLowerCase(str);
//     return (
//         noCase === "a" ||
//         noCase === "e" ||
//         noCase === "i" ||
//         noCase === "o" ||
//         noCase === "u"
//     );
// }
//
//
// /**
//  * JS Array Practice
//  * Intermediate Array practice: array creation, iteration, and manipulation
//  */
//
// //Exercise 0. Write a function named first() that returns only the first element of an array
//
// var family = [
//     "Zeppelin",
//     "Marky",
//     "Dad",
//     "Mom",
//     "Killer!",
//     "Killer!"
// ]
// console.log(family);
//
// function first(){
//    return family.slice(0, 1);
// }
// console.log(first());
//
// // Exercise 1. Write a function named secondToLast() that returns the second to last element
//
// function secondToLast(){
//     var secondLast = family.length - 2;
//     var last = family.length - 1;
//     return family.slice(secondLast, last);
// }
// console.log(secondToLast());
//
// // Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.
//
// function rest(){
//     var lastName = family.length;
//     return family.slice(1, lastName);
// }
// console.log(rest());
//
// // Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
// function getLongestString(){
//     return family.sort(function(a,b){return b.length - a.length})[0];
// }
// console.log(getLongestString());
//
//
// // Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.
// function getShortestString(){
//     return family.sort(function(a, b){return a.length - b.length})[0];
// }
// console.log(getShortestString());
//
// // Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// // Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
//
// var array1 = [1, 2, 3];
// var array2 = [4, 5, 6];
//
// function addTwoArrays(x, y){
//     var array3 = (x).concat(y);
//     return array3;
//
// }
//
// console.log(addTwoArrays(array1, array2));
//
// // Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// // Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]
// var unique = ["a", "b", "a", "b", "c", "c"];
//
// function getUniqueValues(array){
//     var uniqueSet = Array.from(new Set(array));
//     return uniqueSet;
// }
// console.log(getUniqueValues(unique));
// console.log(getUniqueValues(family));
//
//
// // Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.
//
// function reverseArray(input){
//      return input.slice().reverse();
// }
// console.log(reverseArray(family));
// console.log(family);
//
// //Exercies 7. Write a function named getRandomQuote().
// //   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
// //   getRandomQuote should generate a random number between 0 and the array's length minus 1
// //   use the randomly generated number as your index
// //   return a random quote.
//
// function  getRandomQuote() {
//     var inspirationalQuotes = [
//         "Manifest your dreams!",
//         "Never give up!",
//         "Live, Laugh, Love",
//         "Have a beautiful day!",
//         "Never ignore your intuition!"
//     ]
//     var randomNumber = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
//     return randomNumber;
// }
//
// console.log(getRandomQuote());
//
// // Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// // The first argument should be a specific numeral or character
// // The second argument should be any given string
// // getIndexesOf() should return an array containing all of the indexes of that character in the string
// // Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// // Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"
//
// var fruits = [
//     "apple",
//     "banana",
//     "pear",
//     "strawberry",
//     "watermelon"
// ]
//
// function getIndexesOf(letter, end){
//     var end = fruits.length;
//     var indexStop = fruits.indexOf(letter);
//     }
// console.log(getIndexesOf("n", "end"));
//
// ////////////////////////////////////////////////////


// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers

// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]


// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]



// Write a loop that outputs the first 50 fibonacci numbers.
// https://en.wikipedia.org/wiki/Fibonacci_number
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 fibonacci numbers.
// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 primes.
// https://en.wikipedia.org/wiki/Prime_number


// Create a loop that sings 99 bottles of milk on the wall all the way through


// Create a function that counts all the vowels that exist in a string (ignore y)

////////////////////////////////////////////////////

// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
//
//   Example input: ["fred", true, 5, 3] Example output: [3, 5]

var mixedArray = [
    "Monster",
    "baby",
    31,
    50,
    false,
    "love bug",
    1,
    12
]
function filterNumbers(array){
    return array.filter(array => typeof array == "number").sort((a,b) => a-b);
}
console.log(filterNumbers(mixedArray));

// Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.

    var dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ]
console.log(dogs);

dogs.slice().forEach(function (dogAge) {
    dogAge.age = dogAge.age + 1
  console.log(dogAge);
 });













