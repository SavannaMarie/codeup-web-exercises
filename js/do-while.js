var allCones = Math.floor(Math.random() * 50) + 50;

var conesSold = Math.floor(Math.random() * 5) + 1;

do {
    console.log("There are currently " + allCones + " cones for purchase!");
    allCones = allCones - conesSold;
    conesSold = Math.floor(Math.random() * 5) + 1;
    console.log(allCones);
} while (conesSold <= allCones)
    console.log("There are " + allCones + " left for purchase");
