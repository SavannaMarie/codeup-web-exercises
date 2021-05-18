'use strict';
// let user = 'SavannaMarie'
// fetch(`https://api.github.com/users/${user}/events/public`, {
//     method: 'GET',
//     headers: {'Authorization': GITHUB_TOKEN}
// }).then (resp => resp.json()).then(resp => console.log(resp[0].payload.commits[0]));
//

$('#btn').click( () => {
    let userName = $('input').val();
    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': GITHUB_TOKEN}})
.then(response => {
        return response.json();
    })
        .then(data => {
            console.log(data)
            $('#events').append(`<h3> ${userName}'s last commit was on: ${data[0].created_at}</h3>`);
        })
})