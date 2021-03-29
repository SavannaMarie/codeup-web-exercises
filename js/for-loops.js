"use strict";

////multiplication table
// function showMultiplicationTable(i) {
//     for (var i = 1; i < 11; i++) {
//         console.log("7 x " + i + " = " + (i * 7));
//     }
// }
// showMultiplicationTable();
//


//// random number between 20 - 200
// for(var i = 0; i < 10; i++) {
//     var random = Math.floor(Math.random() * 181 + 20);
//     if (random % 2 === 0) {
//         console.log(random + " is even!");
//     } else {
//         console.log(random + " is odd");
//     }
// }
//



// //Nested for loop number triangle
// for (let i = 0; i < 9; i++) {
//     let incNum = '';
//     for (let j = 0; j <= i; j++) {
//         incNum = incNum + (i + 1) + '';
//     }
//     console.log(incNum);
// }

////Javier's method loop number triangle
for (var i = 1; i < 10; i++) {
    var number = i;
// console.log(stringNumber);
    var count = 0;
    var outputString = "";
    while(count < number) {
        outputString = outputString + number.toString();
        // console.log("Time " + count + " through the loop " + stringNumber);
        count = count + 1;
    }
    console.log(outputString);
}


//for loop count by 5
for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}




