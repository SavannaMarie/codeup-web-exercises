"use strict";

var coordinates = [29.4241, -98.4936];
$.get("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=current,hourly,minutely&appid=" + WEATHER_MAP_TOKEN)
    .done(function (city) {
        console.log(city);
        console.log(city.daily[2].temp.day);
        for (var i = 0; i <= city.length; i++){
            // var temp = city.daily[i].day;
            console.log(city.daily[i].temp.day);

        }





        var today = city.daily[0];
        var todayDate = new Date(today.dt * 1000);
        // console.log(todayDate);
    });



function weather(city) {
    var search = city.toString();
    var currentWeather = [];
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: WEATHER_MAP_TOKEN,
        q: search,
        units: "imperial"
    }).done(function (weather) {
        var temp = Math.round(weather.main.temp);
        var clouds = weather.weather[0].description;
        var newText = document.createTextNode(clouds);
        var newP = document.createElement('p');
        $('h1').html(searchResult + "<br>" + clouds + '<br>' + temp);
        console.log(weather);

    });
    var searchResult = city;
}

var button = document.querySelector('#button')
button.addEventListener('click', function (e) {
    e.preventDefault();
    var newSearch = document.querySelector('#weatherSearch').value;
    weather(newSearch);
});








