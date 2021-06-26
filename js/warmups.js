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
console.log(person2);

const numbers = [1, 2, 3, 4, 10];
const evenNumbers = numbers.filter( x => x % 2 === 0 );
console.log(evenNumbers);

const items = [
    { name: 'item1', id: 1 , price: 200 },
    { name: 'test2', id: 2 , price: 300 },
    { name: 'test3', id: 3 , price: 400 },
    { name: 'test4', id: 4 , price: 500 }
];

const filteredItems = items.filter( item => item.price > 300 );
console.log(filteredItems);

const cars = ['BMW', 'Toyota', 'Tesla', 'Audi'];
console.log(cars.includes('Toyota'));
console.log(cars.includes('mercedes'));

let newCarsArray = [...cars];
console.log(newCarsArray);
console.log(cars)


const array1 = [1,2,3];
const array2 = [4,5];
const array3 = [...array1,...array2];
console.log(array3);



const str = 'Hello world, welcome to the javascript.';
console.log(str.startsWith('Hello'));
console.log(str.startsWith('Help'));
console.log(str.endsWith('javascript.'));
console.log(str.endsWith('hello'));

const dest1 = { a: 1};
const source = { b: 2, c: 3};
Object.assign(dest1,source);
console.log(dest1);



//The Object.assign() method can be used to copy all enumerable own properties values to a target
// object from one or more source objects.
const dest2 = { aa: 1};
const source1 = { bb: 2, cc: 3};
const source2 = { dd: 4, ee: 5};
Object.assign(dest2, source1, source2);
console.log(dest2);
