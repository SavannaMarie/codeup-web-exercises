const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let triLanguages = users.filter(user => user.languages.length >= 3);
console.log(triLanguages);

//Use .map to create an array of strings where each element is a user's email address
let usersEmails = users.map(user =>  user.email);
console.log(usersEmails)


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce(function (total, user, index){
    return total + itemPrice;

});

// let totalYears = users.reduce(function (total, user){
//     return total + user.yearsOfExperience
// });
// console.log(totalYears);

// var averageYears = yearsExperience.reduce(function (years, index, array) {
//     years = years + years[index];
//     if (index === array.length - 1) {
//         return years/array.length;
//     } else {
//         return years;
//     }
// });
//
// console.log(averageYears)

// Use .reduce to get the longest email from the list of users.



// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let instructors = users.reduce(function (name, index){
//     return name[index];
// });
//
// console.log(instructors)














