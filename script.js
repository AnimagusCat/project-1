console.log("Hello");

/*var maxTime = 300000;
function countDown(){
}*/

//keeps track of points earned
var points = 0;
//keeps track of wrong match
var strike = 0;
//customer in queue
var customerMatch = "";

//Types of customers
var customers = [
    {
        type: "bigman",
        food: "hamburger"
    },
    {
        type: "vegan",
        food: "salad"
    },
    {
        type: "richman",
        food: "steak"
    }
];
//plate alignment at the start
var plateLine = [customers[0].food, customers[1].food, customers[2].food];
//food on plate
var plateMatch = plateLine[0];
//randomize customers and assign one to customerMatch
function getCustomer() {
    var randomNumber = Math.floor(Math.random() * 3);
    customerMatch = customers[randomNumber].food;
    return;
};
//run this again after user gets correct answer
getCustomer();

//runs when player hits the spacebar to pop food in first array and generates a new one to the end of the plateLine array
function newPlateLine() {
    //deletes plate from plateLine
    var deletePlate = plateLine.shift();
    console.log("deleted plate: " + deletePlate);
    console.log("current plateMatch: " + plateMatch);
    console.log("current plateLine: " + plateLine);
    debugger;
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

//addEventLister - > spacebar to activate function newPlateLine

//checks whether customerMatch and foodMatch are true
/*var order = function (){
    if (customerMatch === plateMatch)
}

var lose = function {

}*/