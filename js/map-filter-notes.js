"use strict";

//======Array iteration methods=======


//.forEach();
// let output = '';
// let prices = [32.99, 11.99, 6.96, 45.32, 8.98, 5.99];

// prices.forEach(function (item, index) {
//     output = output + '<p>' + item + ' is at index: [' + index + ']</p>';
//     $('#output').html(output)
// });

// prices.forEach(function (item, index) {
//     let tax = (item * 0.0825).toFixed(2);
//     let total =(parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output = output + '<p>Item number ' + (index + 1) + ". Price: $" + item + '. Tax: $' + tax + ". Total $" + total + '</p>';
//     $('#output').html(output)
// });

// prices.forEach( (item, index) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total $${total}</p>`;
//     $('#output').html(output);
// });

//=======.map()

let output = '';
let prices = [32.99, 11.99, 6.96, 45.32, 8.98, 5.99];
let pricesAfterTax = [];

pricesAfterTax = prices.map(function (price){
   let tax = (price * 0.0825).toFixed(2);
   let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
   return parseFloat(total);
});
//
// pricesAfterTax.forEach(function(item) {
//     output = output + "<p>" + item + "</p>";
//     $("#output").html(output);
// });

// let things = ['book', 'pencil', 'eraser'];
// let pluralThings = things.map((thing, index) =>{
//     return thing;
// });
//
// pluralThings.forEach(function (thing, index){
//     if (index === 0) {
//         output = `<p>You must bring the following items: </p>`
//     }
//         output += `<p>${thing}s</p>`;
//     $('#output').html(output);
//     return thing;
// });


//=====Reduce

let totalCost = pricesAfterTax.reduce(function (total, itemPrice, index){
    console.log(`The index is: ${index} the total is: ${total}, the item price is: ${itemPrice}`)
    return total + itemPrice;

});

var averagePrice = pricesAfterTax.reduce(function (total, itemPrice, index, array) {
    total = total + itemPrice;
    if (index === array.length - 1) {
        return total/array.length;
    } else {
        return total;
    }

});

console.log(averagePrice.toFixed(2));

totalCost = prices.reduce(function (total, price, index) {
    console.log(`The index is: ${index} the total is: ${total}, the item price is: ${price}`)
    return total + price;
}, 158.76);
console.log(totalCost.toFixed(2))