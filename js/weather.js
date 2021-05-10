"use strict";



function weather(city) {
    var search = city.toString();
    var currentWeather = [];
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: WEATHER_MAP_TOKEN,
        q: search,
        units: "imperial"
    }).done(function (data) {
        var temp = Math.round(data.main.temp);
        console.log(temp)
        var clouds = data.weather[0].description;
        var newText = document.createTextNode(clouds);
        var newP = document.createElement('p');
        $('h1').html(searchResult + "<br>" + clouds + '<br>' + temp);
        console.log(data);

    });
    var searchResult = city;
}

weather('San Antonio');







