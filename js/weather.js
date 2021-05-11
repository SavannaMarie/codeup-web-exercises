"use strict";
// This function gets the weather for each day'
// $(document).ready(function() {
    var coordinates = [29.4241, -98.4936];
    $.get("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=current,hourly,minutely&appid=" + WEATHER_MAP_TOKEN)
        .done(function (city) {
            console.log(city);
// Display the 5 day forecast
            var displayWeather = '';
            for (var n = 0; n < 5; n++) {
                var date = city.daily[n];
                var displayDate = new Date(date.dt * 1000).toDateString();
                displayDate = displayDate.slice(0, displayDate.length-4)
                displayWeather += `<div class= "card w-25 m-2 col">`
                displayWeather += `${displayDate}<br><br>`
                displayWeather += `<img style='margin: auto' width="100px" src="http://openweathermap.org/img/w/${city.daily[n].weather[0].icon}.png"/>`
                displayWeather += `<p>${city.daily[n].weather[0].main}<br>`
                displayWeather += `Hi: ${Math.round(city.daily[n].temp.max)} Lo: ${Math.round(city.daily[n].temp.min)}<br>`
                displayWeather += `Humidity: ${city.daily[n].humidity}%<br>`
                displayWeather += `Chance of rain: ${Math.round(city.daily[n].rain)}%<br>`
                displayWeather += `</p></div>`
                $('#container').html(displayWeather);
            }
        });










//
//
// // gets today's weather
//     function weather(city) {
//         var search = city.toString();
//         var currentWeather = [];
//         $.get("http://api.openweathermap.org/data/2.5/weather", {
//             APPID: WEATHER_MAP_TOKEN,
//             q: search,
//             units: "imperial"
//         }).done(function (weather) {
// // today's variables
//             var temp = Math.round(weather.main.temp);
//             var clouds = weather.weather[0].description;
//             var newText = document.createTextNode(clouds);
//             var newP = document.createElement('p');
//             $('h1').html(searchResult + "<br>" + clouds + '<br>' + temp);
//             console.log(weather);
//
//         });
//         var searchResult = city;
//     }
//
//     var button = document.querySelector('#button')
//     button.addEventListener('click', function (e) {
//         e.preventDefault();
//         var newSearch = document.querySelector('#weatherSearch').value;
//         weather(newSearch);
//     });
//
// });







