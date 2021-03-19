// alert("Hello from external Javascript!");
// var favoriteColor = prompt("What is your favorite color?");
//
// alert(favoriteColor + " is my favorite color too!");
//
// var mermaid = parseFloat(prompt("How many days do you need to rent The Little Mermaid?"));
// console.log(mermaid);
// var brotherBear = parseFloat(prompt("And how many days do you need to rent Brother Bear?"));
// console.log(brotherBear);
// var hercules = parseFloat(prompt("And finally, how many days do you need to rent Hercules?"));
// console.log(hercules);
// var rentalRate = 3;
//
// var totalDue = (mermaid * rentalRate) + (brotherBear * rentalRate) + (hercules * rentalRate);
// alert("Thank you!")
// alert("Each movie is $3 per day. Your total comes out to $" + totalDue.toFixed(2) + " Thank you for renting a movie today!");
//
//
// alert("Please input your hours so we can calcutate your payment:");
// var firstJob = parseFloat(prompt("How many hours at Google?"));
// alert("You worked " + firstJob + " hours at Google");
// var secondJob = parseFloat(prompt("How many hours at Amazon?"));
// alert("You worked " + secondJob + " hours at Amazon");
// var thirdJob = parseFloat(prompt("How many hours at Facebook?"));
// alert("You worked " + thirdJob + " hours at Facebook");
//
// var firstJobPay = firstJob * 400;
// var secondJobPay = secondJob * 380;
// var thirdJobPay = thirdJob * 350;
//
// var totalJobPay = firstJobPay + secondJobPay + thirdJobPay;
// alert("Your total pay is: $" + totalJobPay.toFixed(2) + " for those 3 jobs!");

// var classHasRoom = confirm("Is there room in this class?");
// var scheduleConflict = confirm("Can you take this class at 8am?")
//
// alert("You can take this class: " + (classHasRoom && scheduleConflict));


var offerValid = confirm("Is the offer valid?");
var boughtAtLeastTwo = parseFloat(prompt("How many items are you buying today?"));
var premiumMember = confirm("Are you a premium member?");
var discountApplies = alert(((premiumMember || (boughtAtLeastTwo >= 2)) && offerValid) && boughtAtLeastTwo >= 1);
console.log(discountApplies);

