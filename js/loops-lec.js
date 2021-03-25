// var slices = 8;
// while (slices > 0){
//     console.log("I have a slice!");
//     slices = slices - 1;
//     if (slices > 1){
//         console.log("Now there's " + slices + " left!");
//     } else {
//     console.log("Now there's " + slices + " slices left!");
//      }
// }
// console.log("Now there's no more pizza!");


//Ask the user input
//Get the user input
//Declare a user input variable
//Store user input in the variable
//Declare the variable to store the total (accumulator)
//Add the cost of the new item to the total
//Keep storing the new totals in the accumulator
//Tell the user how to end the program (sentinel value)
//Loop back around and do it all again, over and over until the user tells it to stop

// var priceOfItem = parseFloat(prompt("Enter the price of your first item: "));
// alert("The price of your item was " + priceOfItem);
// //create accumulator variable
// var totalCost = priceOfItem;
// var userInput = "";
// //Create a sentinel value
// while(userInput !== "STOP") {
//     userInput = (prompt("Enter the price of your next item: \r\n\ Enter STOP when you are done"));
//     if (userInput === "STOP"){
//         alert("OK. Your final total is " + totalCost);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost = totalCost + priceOfItem;
//         alert("Your total is now " + totalCost.toFixed(2));
//     }
// }


// while loops

var counter = 8;
while (counter >= 0){
    console.log(counter);
    counter = counter - 1;
}


//do while loops

var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);


// for loops

for (var i = 4; i < 10; i++) {
    console.log('for loop iteration #' + i);
}

// for loops example 2 (multiple variables separated by a comma

for (var i = 0, j = 9; i < 10; i++, j--) {
    console.log('for loop iteration #' + i + ', j = ' + j);
}













