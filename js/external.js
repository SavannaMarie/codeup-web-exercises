alert("Hello from external Javascript!");
favoriteColor = prompt("What is your favorite color?");

alert(favoriteColor + " is my favorite color too!");

var mermaid = prompt("How many days do you need to rent The Little Mermaid?");
console.log(mermaid);
var brotherBear = prompt("And how many days do you need to rent Brother Bear?");
console.log(brotherBear);
var hercules = prompt("And finally, how many days do you need to rent Hercules?");
console.log(hercules);
var rentalRate = 3;

var totalDue = (mermaid * rentalRate) + (brotherBear * rentalRate) + (hercules * rentalRate);
alert("Thank you!")
alert("Each movie is $3 per day. Your total comes out to " + totalDue + " Thank you for renting a movie today!");


alert("Please input your hours so we can calcutate your payment:");
var firstJob = prompt("How many hours at Google?");
alert("You worked " + firstJob + " hours at Google");
var secondJob = prompt("How many hours at Amazon?");
alert("You worked " + secondJob + " hours at Amazon")3;
var thirdJob = prompt("How many hours at Facebook?");
alert("You worked " + thirdJob + " hours at Facebook");

var firstJobPay = firstJob * 400;
var secondJobPay = secondJob * 380;
var thirdJobPay = thirdJob * 350;

var totalJobPay = firstJobPay + secondJobPay + thirdJobPay;

alert("Your total pay is: " + totalJobPay + " for those 3 jobs!");

var offerValid = confirm("Is the offer valid?");
var boughtAtLeastTwo = parseFloat(prompt("How many items are you buying today?"));
var premiumMember = confirm("Are you a premium member?");
var discountApplies = alert((premiumMember || (boughtAtLeastTwo >= 2)) && offerValid);
console.log(discountApplies);