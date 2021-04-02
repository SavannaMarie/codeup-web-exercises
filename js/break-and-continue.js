'use strict';

// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }

var userInputNum;

while(true) {
    userInputNum = parseInt(prompt("Enter an odd number between 1-50"));
    if (userInputNum % 2 !== 0 && userInputNum < 50) {
        console.log("The number to skip is " + userInputNum);
        break;
    }
}
for (var i = 0; i <= 50; ++i){
    if (i === userInputNum){
        console.log("YIKES! Skipping number " + userInputNum)
    } else if (i % 2 === 0){
        continue;
    } if (i === userInputNum){
        continue;
    } console.log("here is an odd number " + i);
}
