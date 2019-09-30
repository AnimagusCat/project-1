console.log("Hello");

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    var time = 240 / 2, // your time in seconds here
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);

};

//keeps track of points earned
var points = 0;
//keeps track of wrong match
var strikes = 0;
//customer in queue
var customerMatch = "";

//Types of customers
var customers = [
    {
        type: "bigman",
        food: "fishandchips"
    },
    {
        type: "vegan",
        food: "salad"
    },
    {
        type: "darkman",
        food: "steak"
    }
];
//plate alignment at the start
var plateLine = [customers[0].food, customers[1].food, customers[2].food];

//food on plate
var plateMatch = plateLine[0];

//randomize customers and assign one to customerMatch
//run this again after user gets correct answer
var getCustomer = function() {
    var randomNumber = Math.floor(Math.random() * 3);
    customerMatch = customers[randomNumber].food;
    return;
};
getCustomer();


//generates a new plate to the end of the plateLine array
var newPlateLine = function(){
    //generates new plate
    var randomNumber = Math.floor(Math.random() * 3);
    var newPlate = customers[randomNumber].food;
    console.log("new plate: " + newPlate);
    console.log("current plateLine before push: " + plateLine);
    //push new plate to plateLine
    plateLine.push(newPlate);
    console.log("current plateLine after push: " + plateLine);
    return;
};

//runs when player hits the spacebar to pop food in first array
var popPlate = function(){
    //deletes plate from plateLine
    var deletePlate = plateLine.shift();
    console.log("deleted plate: " + deletePlate);
    //console.log("current plateMatch: " + plateMatch);
    console.log("current plateLine: " + plateLine);

    newPlateLine();
    plateMatch= plateLine[0]
}

//addEventLister - > spacebar to activate function newPlateLine
//document.addEventLister("keydown", popPlate);
/*document.addEventListener("keyup", function(event) {
    if (event.code == "Backspace"){
        popPlate();
    }
  console.log(event.which);
});*/

//checks whether customerMatch and plateMatch are true
var order = function (customerMatch, plateMatch){
    if (customerMatch === plateMatch) {
        console.log("correct!");
        points += 10;
        getCustomer();
        popPlate();
    } else if (customerMatch !== plateMatch) {
        console.log("wrong!");
        fail();
    }
    return;
};

var fail = function() {
    if (strikes <= 2){
        console.log("WRONG! Strike no. " + strikes);
        strikes++;
    } else if (strike === 3){
        console.log("GAME OVER Strike no. " + strikes);
        //show option to restart game
    }
    return;
};

/*var success = function(){
    if (maxTime <= 0) {
        //stop game
        //show option to restart game
    }
};*/

/*var gameStart = function (){
    var points = 0;
    var strikes = 0;
    getCustomer();
    startTimer();
};*/