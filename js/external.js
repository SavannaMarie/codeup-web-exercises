// alert("Hello from external Javascript!");
// favoriteColor = prompt("What is your favorite color?");
//
// alert(favoriteColor + " is my favorite color too!");

// var mermaid = prompt("How many days do you need to rent The Little Mermaid?");
// var brotherBear = prompt("And how many days do you need to rent Brother Bear?");
// var hercules = prompt("And finally, how many days do you need to rent Herculese?");
// var rentalRate = 3;
// var totalDue = (mermaid * rentalRate) + (brotherBear * rentalRate) + (hercules * rentalRate);
// alert("Thank you!")
// alert("Each movie is $3 per day. Your total comes out to " + totalDue + " Thank you for renting a movie today!");

alert("Please input your hours so we can calcutate your payment:");
var firstJob = prompt("How many hours at Google?");
alert("You worked " + firstJob + " hours at Google");
var secondJob = prompt("How many hours at Amazon?");
var thirdJob = prompt("How many hours at Facebook?");

var firstJobPay = firstJob * 400;
var secondJobPay = secondJob * 380;
var thirdJobPay = thirdJob * 350;

var totalJobPay = firstJobPay + secondJobPay + thirdJobPay;

alert("Your total pay is: " + totalJobPay + " for those 3 jobs!");