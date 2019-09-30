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
var chipsCustomer = document.createElement("img");
chipsCustomer.src = "images/bigman-cropped.png";
chipsCustomer.classList.add("chipsCustomer");
//document.getElementById("middle-customer").appendChild(chipsCustomer);

var saladCustomer = document.createElement("img");
saladCustomer.src = "images/lady-cropped.png";
saladCustomer.classList.add("saladCustomer");
//document.getElementById("middle-customer").appendChild(saladCustomer);

var steakCustomer = document.createElement("img");
steakCustomer.src = "images/darkman-cropped.png";
steakCustomer.classList.add("steakCustomer");
//document.getElementById("middle-customer").appendChild(steakCustomer);

//plate alignment at the start
var plateLine = [customers[0].food, customers[1].food, customers[2].food];

var chips = document.createElement("img");
chips.classList.add("chips");
chips.src = "images/fishchips.png";
document.getElementById("bottom-board1").appendChild(chips);

var greens = document.createElement("img");
greens.classList.add("greens");
greens.src = "images/salad.png";
document.getElementById("bottom-board2").appendChild(greens);

var meat = document.createElement("img");
meat.classList.add("meat");
meat.src = "images/steak.png";
document.getElementById("bottom-board3").appendChild(meat);

//food on plate
var plateMatch = plateLine[0];

//randomize customers and assign one to customerMatch
//run this again after user gets correct answer
var getCustomer = function() {
    var randomNumber = Math.floor(Math.random() * 3);
    customerMatch = customers[randomNumber].food;
       /* if (customerMatch === customers[0].food){
        document.getElementById("middle-customer").appendChild(chipsCustomer);
        div.removeChild(chipsCustomer);
        } else if (customerMatch === customers[1].food) {
        document.getElementById("middle-customer").appendChild(saladCustomer);
        div.removeChild(chipsCustomer);
        } else if (customerMatch === customers[2].food) {
        document.getElementById("middle-customer").appendChild(steakCustomer);
        div.removeChild(chipsCustomer);
        }*/
    return customerMatch;
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
    console.log("current plateLine: " + plateLine);

    newPlateLine();
    plateMatch= plateLine[0]
};



//addEventLister - > spacebar to activate function newPlateLine
//document.addEventLister("keydown", popPlate);
/*document.addEventListener("keyup", function(event) {
    if (event.code == "Backspace"){
        popPlate();
    }
  console.log(event.which);
});*/

//checks whether customerMatch and plateMatch are true
//check whether it runs without parameters??
var order = function (plateMatch, customerMatch){
    if (plateMatch === customerMatch) {
        console.log("correct!");
        points += 10;
        getCustomer();
        popPlate();
    } else if (plateMatch !== customerMatch) {
        console.log("wrong!");
        fail();
    }
};

var fail = function() {
    if (strikes <= 2){
        console.log("WRONG! Strike no. " + strikes);
        strikes++;
    } else if (strike === 3){
        console.log("GAME OVER Strike no. " + strikes);
        alert("GAME OVER");
        //show option to restart game
    }
    return;
};

var endGame = function (){

};
/*var success = function(){
    if (maxTime <= 0) {
        //stop game
        //show option to restart game
    }
};*/
/*var startMessage = document.createElement("div");
startMessage.classList.add("starMessage");
startMessage.textContent = "Instructions: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
document.appendChild(startMessage);*/

var gameStart = function (){
    var points = 0;
    var strikes = 0;
    getCustomer();
    startTimer();
};