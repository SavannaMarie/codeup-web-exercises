"use strict";
// for (let i = 0; i <= 30; i++ ) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i);
//     }
// }
//
// //Returns number 7
// const seven = () => console.log('7');
// seven();

//Warm up
function five(x){
    if (typeof x === "number") {
        return x * 5;
    } else {
        return 0;
    }
}

console.log(five(5));
console.log(five(50));
console.log(five(-50));
console.log(five("the"));
console.log(five("5"));


const people = [
    { name: 'test1', id: 1 , email: 'test1@test.com'},
    { name: 'test2', id: 2 , email: 'test2@test.com' },
    { name: 'test3', id: 3 , email: 'test3@test.com'},
    { name: 'test4', id: 4 , email: 'test3@test.com'}
];

const person2 = people.find( person => person.id === 2 );
console.log(person2); // { name: "test2", id: 2, email: "test2@test.com"}




