'use strict';
$('#btn').click( () => {
    let user = $('input').val();
    fetch(`https://api.github.com/users/${user}/events/public`, {headers: {'Authorization': GITHUB_TOKEN}})
.then(response => {
        return response.json();
    })
        .then(data => {
            let lastPush;
            for(let events of data) {
                if(events.type === 'PushEvent')
                    lastPush = new Date(events.created_at);
                break;
            }
            $('#events').append(`<h3> ${user}'s last commit was on: ${lastPush}</h3>`);
            console.log(data)
        })
})
const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(`You\'ll see this after ${ms/1000} seconds`);
        }, ms);
    })
};
wait((1000)).then(message => console.log(message));
wait((3000)).then(message => console.log(message));
wait((4000)).then(message => console.log(message));


// //======PROMISES
// //====new promise
// const myPromise = new Promise((fulfill, reject) => {
//     if (Math.random() > 0.5) {
//         fulfill();
//     } else {
//         reject();
//     }
// });
// console.log(myPromise)
//
// // .then for the good path .catch to catch the errors
//
// myPromise
//     .then(() => console.log('yay!'))
//     .catch(()=> console.log('aww!'));
// // myPromise.catch(()=> console.log('aww!'));
