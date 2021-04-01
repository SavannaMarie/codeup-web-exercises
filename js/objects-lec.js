"use strict";

var tacoma = {
    make: "Toyota",
    model: "Tacoma",
    truck: true,
    seat: 5,
    color: "Blue",
    mileage: 10,
    drive: function(){
        console.log("VROOM VROOM!!");
        this.mileage++
    }

}   