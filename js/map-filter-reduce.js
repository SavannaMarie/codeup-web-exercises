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

let totalYears = users.reduce(function (total, user){
    let yearsOfExperience = user.yearsOfExperience;
    return total + yearsOfExperience;
}, 0);

console.log(totalYears)

// Use .reduce to get the longest email from the list of users.

// same results as emails.map
let emails = users.reduce(function (accumulator, user, index, usersArray) {
    if (index === usersArray.length -1){
        accumulator.push(user.email);
        accumulator.sort(function (email1, email2) {
            return email2.length - email1.length;
        });
        return accumulator[0];
    } else {
        accumulator.push(user.email);
        return accumulator;
    }
}, []);
console.log(emails);

const longestEmails = users.reduce((longest, current) =>
    longest.email.length > current.email.length ? longest : current ).email;
console.log(longestEmails);


// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let names = users.reduce(function(accumulator, user) {
    accumulator.push(user.name);
    return accumulator;
}, [])
let namesJoined = names.join(', ');

let usersNames = users.reduce((accumulator, user, index, arr) => {
    if (index === arr.length -1) {
        accumulator += `${user.name}.`;
    } else {
        accumulator += `${user.name}, `;
    }
    return accumulator;
},'Users names are: ');

console.log(usersNames);

//======PROMISES
//====new promise
 const myPromise = new Promise((fulfill, reject) => {
    if (Math.random() > 0.5) {
        fulfill();
    } else {
        reject();
    }
});
console.log(myPromise)

// .then for the good path .catch to catch the errors

myPromise
    .then(() => console.log('yay!'))
    .catch(()=> console.log('aww!'));
// myPromise.catch(()=> console.log('aww!'));  












