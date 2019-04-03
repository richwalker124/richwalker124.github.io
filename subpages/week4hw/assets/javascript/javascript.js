//need 4 variables to each crystal, each with a random value between 1-12
var kirbyOGsc = 1;
var kirbyFatsc = 2;
var kirbySucksc = 3;
var kirbyRunsc = 4;

//Possible image set to a variable


//Need a two more variables, one that is the goal (******THE GOAL (between 19 and 120) IS RANDOMLY SELECTED******) and one that holds the users current amount of points
var pointGoal = 21;
var userPoints = 0;

//Counter for wins and losses
var wins = 0;
var losses = 0;

//Logic for game
//Goal is to click on the crystals until you match the goal
//If you are under nothing happens, If you are over you lose, if it is exact you win
//Needs to have a win state that resets itself after you win
function gameLogic (){
    if (userPoints === pointGoal){
        alert("You win!")
        wins += 1
        //**********Re random point goal and kirby values */
        userPoints = 0
        randomer();
    }
    if (userPoints > pointGoal){
        alert("You lost!")
        losses += 1;
        userPoints = 0;
        randomer();
    }
}

function randomer (){
    //GOAL
    pointGoal = Math.floor(Math.random() *100 + 20)
    alert(pointGoal)
    //Kirby
    kirbyOGsc = Math.floor(Math.random() * 11 + 1)
    kirbyFatsc = Math.floor(Math.random() * 11 + 1)
    kirbySucksc = Math.floor(Math.random() * 11 + 1)
    kirbyRunsc = Math.floor(Math.random() * 11 + 1)

    //Resets the dom
    $("#user-score").html(userPoints);
    $("#wins").html(wins)
    $("#losses").html(losses)
    $("#goal").html(pointGoal)
}

$(document).ready(function(){

    $("#wins").html(wins)
    $("#losses").html(losses)

//DOM INTERACTION and Stuff that needs to be reset in event of a new game

$("#goal").html(pointGoal)
 //Set a randomizer to redefine variables   



//MAkes the images interactable. Selects the images and adds points when they are clicked, as well as updating the user score.

$("#kirby-og").click(function (){

    userPoints += kirbyOGsc;
    $("#user-score").html(userPoints);
    gameLogic();
   
    
})

$("#kirby-fat").click(function (){
 
    userPoints += kirbyFatsc;
    $("#user-score").html(userPoints);
    gameLogic();
   
})

$("#kirby-run").click(function (){
    
    userPoints += kirbyRunsc;
    $("#user-score").html(userPoints);
    gameLogic();
})

$("#kirby-suck").click(function (){
    userPoints += kirbySucksc;
    $("#user-score").html(userPoints);
   gameLogic();
})
})

