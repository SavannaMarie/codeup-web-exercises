"use strict";
// This function gets the weather for each day'
$(document).ready(function() {
    var coordinates = {
        lat: 29.4241,
        lng: -98.4936
    }
    function getWeather(coordinates) {
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            APPID: WEATHER_MAP_TOKEN,
            lat: coordinates.lat,
            lon: coordinates.lng,
            units: "imperial"
        })
            .done(function (city) {
                // console.log(city);
// Display the 5 day forecast
                var displayWeather = '';
                for (var n = 0; n < 5; n++) {
                    var date = city.daily[n];
                    var displayDate = new Date(date.dt * 1000).toDateString();
                    displayDate = displayDate.slice(0, displayDate.length - 4)
                    displayWeather += `<div class= "card w-25 m-2 col">`
                    displayWeather += `${displayDate}<br>`
                    displayWeather += `<img style='margin: auto' width="100px" src="http://openweathermap.org/img/wn/${city.daily[n].weather[0].icon}@2x.png\n"/>`
                    displayWeather += `<p>${city.daily[n].weather[0].main}<br>`
                    displayWeather += `Hi: ${Math.round(city.daily[n].temp.max)} Lo: ${Math.round(city.daily[n].temp.min)}<br>`
                    displayWeather += `Humidity: ${city.daily[n].humidity}%<br>`
                    displayWeather += `Chance of rain: ${Math.round(city.daily[n].rain)}%<br>`
                    displayWeather += `</p></div>`
                    $('#containerMain').html(displayWeather);
                }
            });
    }
getWeather(coordinates);



// gets today's weather
    function weather(city) {
        var search = city.toString();
        var currentWeather = [];
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: WEATHER_MAP_TOKEN,
            q: search,
            units: "imperial"
        }).done(function (data) {
            var temp = Math.round(data.main.temp);
            var clouds = data.weather[0].description;
            var newText = document.createTextNode(clouds);
            var newP = document.createElement('p');
            $('#navSearch').html(searchResult + "<br>" + clouds + '<br>' + temp);
            console.log(data);

        });
        var searchResult = city;
    }

    var button = document.querySelector('#button')
    button.addEventListener('click', function (e) {
        e.preventDefault();
        var newSearch = document.querySelector('#weatherSearch').value;
        weather(newSearch);
    });






// Attatch a map
// Instantiation of Map Object
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    var map = new mapboxgl.Map({
        container: 'map', // container ID
    });
    map.setStyle('mapbox://styles/mapbox/dark-v10')
    map.setZoom(9)
    map.setCenter([-98.4916, 29.4252])
    map.addControl(new mapboxgl.NavigationControl());

    // Instantiation of Marker Object
    var marker = new mapboxgl.Marker({
        color: 'lightblue',
    })
        .setLngLat([-98.4861, 29.4260])
        .setDraggable(true)
        .addTo(map);


    marker.on('dragend', function() {
        var lngLat = marker.getLngLat();
        getWeather(lngLat)
    })
    // Instantiation of Popup object

    // var popup = new mapboxgl.Popup()
    //     .setLngLat(marker.getLngLat())
    //     .setHTML("<p>Your Location</p>")
    //     .setMaxWidth("200px")
    //     .addTo(map);
    //
    // console.log(popup)

    // marker.setPopup(popup);
    // popup.addClassName('popup-font');
});


