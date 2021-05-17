'use strict';
let user = 'SavannaMarie'
fetch(`https://api.github.com/users/${user}/events/public`, {
    method: 'GET',
    headers: {'Authorization': GITHUB_TOKEN}
}).then (resp => resp.json()).then(resp => console.log(resp))
