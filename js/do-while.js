var allCones = Math.floor(Math.random() * 50) + 50;

var conesSold = Math.floor(Math.random() * 5) + 1;

do {
    console.log("There are currently " + allCones + " cones for purchase!");
    allCones = allCones - conesSold;
    conesSold = Math.floor(Math.random() * 5) + 1;
    console.log("we sold " + conesSold);
} while (conesSold <= allCones)
    console.log("There are " + allCones + " left for purchase");


// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     if (conesBought > allCones) {
//         console.log("I cant sell " + conesBought + " I only have  " + allCones + " left sorry");
//     } else {
//         allCones = allCones - conesBought;
//         console.log("Cones Sold " + conesBought + " I have " + allCones + " left to sell");
//     }
// } while (allCones > 0);