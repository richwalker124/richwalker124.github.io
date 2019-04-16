//Need to swap questions, This will be done similarly to how it was done in week4Hard
//Question shows up, have an object that contains questions and answers as well as correct answer. 
//Use alctual checkboxes.
//Timer for the questions, 30 seconds if no answers, count answer as wrong
//Get a variable for correct questions and wrong questions, display at the end.
//Variables on the cards are answer1 answer2 answer3 answer4
//Once the time on the timer starts getting lower change the color of the card, blue at 30, yellow (warning) at 20, red (danger) at 10

//Questions
//Temp example question, considering putting question in an array so they can be selected in random order each time. Or having an array with all the object names in it.
//If randomized have the array randomize then go through one at a time.
var questionList = [
 questionOne = {
    question: "What event did Emperor Nero add to the Olympics?",
    a: "Cooking",
    b: "Singing",
    c: "Dancing",
    d: "Bodybuilding",
    correct : "b"
},
 questionTwo = {
    question: "What is the year before 1 AD?",
    a: "0 AD",
    b: "1 BC",
    c: "-1 AD",
    d: "0",
    correct : "b"
},
questionThree = {
   question: "What is it called when you gain more muscle after getting sore through excersize?",
   a: "Overgrowth",
   b: "Overcompensation",
   c: "Overexertion",
   d: "Overworking",
   correct : "b"
},
questionFour = {
   question: "What is the biggest canyon in the solar system?",
   a: "Grand Canyon",
   b: "Kurobe Canyon",
   c: "Valles Marineris",
   d: "Mariana Trench",
   correct : "c"
},
questionFive = {
   question: "What is the biggest mountain in the solar system?",
   a: "Mount Everest",
   b: "Pikes Peak",
   c: "Olympus Mons",
   d: "Gula Mons",
   correct : "c"
},
questionSix = {
   question: "How do we know the pyramids weren't built by slaves?",
   a: "Resumes",
   b: "Contracts",
   c: "Attendance Logs",
   d: "Employee ID Cards",
   correct : "c"
},
questionSeven = {
   question: "What was the name of the other famous novel that Sherlock Holmes appeared in?",
   a: "The Three Musketeers",
   b: "Arsene Lupin, Gentleman Burglar",
   c: "The Count of Monte Cristo",
   d: "The Big Sleep",
   correct : "b"
},
questionEight = {
   question: "Which Pirate claimed to have hidden his treasure in a certain place just before his execution?",
   a: "William Kidd",
   b: "Captain Hook",
   c: "John Silver",
   d: "Edward Teach",
   correct : "a"
},
questionNine = {
   question: "What quality gave the original blazers (jacket) their name",
   a: "Fire Patterns.",
   b: "They were brightly colored.",
   c: "They were made of hemp.",
   d: "They were worn by cool people.",
   correct : "b"
},
questionTen = {
   question: "When color TV came out, what other thing also started appearing in color?",
   a: "Movies",
   b: "Pencils",
   c: "Underwear",
   d: "Dreams",
   correct : "d"
},
questionEleven = {
   question: "How much gold has been mined by humanity over the course of history?",
   a: "Three Olympic Sized Pools",
   b: "Three Great Pyramids of Giza",
   c: "The Three Great Lakes",
   d: "Three Washington Monuments",
   correct : "a"
},
questionTwelve = {
   question: "What will happen if you keep washing your hair with water that is contaminated metal?",
   a: "It will change color.",
   b: "It will become straight.",
   c: "It'll start Shining",
   d: "It will fall out.",
   correct : "a"
},
questionThirteen = {
   question: "What do almost all shave-ice syrups have in common?",
   a: "They have the similar flavors.",
   b: "They have painkillers in them.",
   c: "The coloring comes from insects.",
   d: "They are all made with maple syrup",
   correct : "a"
},
questionFourteen = {
   question: "What is the name of the light-producing substance in fireflies?",
   a: "Lumarine",
   b: "Berberine",
   c: "Luciferin",
   d: "Luminescence",
   correct : "c"
},
questionFifteen= {
   question: "When did the earliest thrift stores appear?",
   a: "The 18th Century",
   b: "The 19th Century",
   c: "The 20th Century",
   d: "The 21st Century",
   correct : "b"
},
questionSixteen = {
   question: 'What country did the word "robot" originate from?',
   a: "Slovakia",
   b: "Czechoslovakia",
   c: "Slovenia",
   d: "Austria",
   correct : "b"
},
questionSeventeen = {
   question: "Why are soccer balls commonly black and white?",
   a: "To show up on TV more easily.",
   b: "To make it easy to referee.",
   c: "To make it easy to kick.",
   d: "There's no reason.",
   correct : "a"
},
questionEighteen = {
   question: 'What does the "S" stand for in "SOS"?',
   a: "Ship",
   b: "Save",
   c: "Soul",
   d: "Nothing",
   correct : "d"
},
questionNineteen= {
   question: "Why does someones voice sound different over the phone rather than in person?",
   a: "It's slower than normal.",
   b: "The pitch is lower than normal.",
   c: "It's heavily processed.",
   d: "You can't see their mouth.",
   correct : "c"
},
questionTwenty = {
   question: "Which king in a deck of cards is missing a moustache?",
   a: "King of Clubs",
   b: "King of Diamonds",
   c: "King of Spades",
   d: "King of Hearts",
   correct : "d"
}
]


//Time variables 
var timeLeft = 30;
var clockRunning = false;
var timeInterval ;
var timerGo = false;

//variables
var show = "show"
var hide = "hide"

var correctAnswers = 0;
var incorrectAnswers = 0;

//Holds an index for question array
var questionNumber = 0;
var userAnswer ;
var filler = questionList[questionNumber];

//FUNCTION CITY***************************************************************************************************

//These functions show and hide the different states of this game
//This is the start screen, if the string show or hide is typed in the function it will either hide or show the screen.
function startScreen(arg){
    if (arg === show){
    $(".row-start").show();
}
    if (arg === hide){
    $(".row-start").hide();
 }
}


//This is the question screen if hide or show is typed in the argument it will either display or hide the screen
function questionScreen(arg){
    if (arg === show){
        $(".row-question").show();
        $(".row-answer").show();   
    }
    if (arg === hide){
        $(".row-question").hide();
        $(".row-answer").hide();   
    }
}


//This will be the result screen
function resultScreen(arg) {
    if (arg === show){
        $(".row-result").show();
        populateResultScreen(filler);
    }
    if (arg === hide){
        $(".row-result").hide();
    }
}

function populateResultScreen (bigarg) {
    if (filler.correct === userAnswer){
        //alert(userAnswer);

        correctAnswers++;
        $(".result-text").html("You got the right answer! You know have answered " + correctAnswers + " correctly and " + incorrectAnswers + " incorrect answers.")
    } else if(bigarg.correct !== userAnswer){
        incorrectAnswers ++;
        
        $(".result-text").html("You got the wrong answer! You know have answered " + correctAnswers + " correctly and " + incorrectAnswers + " incorrect answers.")
        if (userAnswer === undefined){
            $(".result-text").html("You didn't put in an answer! You know have answered " + correctAnswers + " correctly and " + incorrectAnswers + " incorrect answers.")
        }
    }
}

//*************************** */These functions Change the content on a games state.
//Function Clear
function clearQuestion(){
$(".question-write").html();
$(".answer1").html()
$(".answer2").html()
$(".answer3").html()
$(".answer4").html()
clearInterval(timeInterval);
timerGo = false;
}

//Question Function
function questionStart(quest){
    $(".question-write").html(quest.question);
    $(".answer1").html(quest.a);
    $(".answer2").html(quest.b);
    $(".answer3").html(quest.c);
    $(".answer4").html(quest.d);
    timerInitialize();

}

//Starts the timer, call this function in the questions
function timerInitialize (){
    //Clears color classes from element
    timerGo = true;
    $("#timercard").removeClass("bg-info bg-danger bg-warning");
    //Adds initial class back to element
    $("#timercard").addClass("bg-info");
    clearInterval();
    timeLeft = 30;
    timeInterval = setInterval(timerFunction, 1000);
    $(".timer").text(timeLeft);

}

//Gets the information when 

//This function is called by timerInitialize and doesnt need to be called anywhere else.
function timerFunction(){
    timeLeft--
    $(".timer").text(timeLeft);
    if (timeLeft <21){
        $("#timercard").removeClass("bg-info")
        $("#timercard").addClass("bg-warning");  
    }
    if (timeLeft < 11){
        $("#timercard").removeClass("bg-warning")
        $("#timercard").addClass("bg-danger");  
    }
    if (timeLeft <= 0){
        timerGo = false;
        clearInterval(timeInterval)
        clearQuestion();
        questionScreen(hide);
        resultScreen(show);
    }
}

//grab the answer and take it into a variable
function answerClick(ansr){
   // var userAnswer = $(this).val()
  userAnswer = $(this).attr("value");
       // alert(userAnswer);
        
        
        if (userAnswer === ansr.correct){
            clearQuestion();

            questionScreen(hide);
            resultScreen(show);
        }
        else{
            clearQuestion();
            questionScreen(hide);
            resultScreen(show);
        }
    }

function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp
        
        }
    }



//
//Initialize document for the first time
startScreen(show);
questionScreen(hide);
resultScreen(hide);

//This is where game logic will go
$("document").ready(function(){

    //Shuffles the question array
    shuffleArray(questionList);
    console.log(questionList);
    //After start is pressed, open up the first question
    $(".start-button").click(function(){
        startScreen(hide);
        questionScreen(show);
        //Any question name can go in the question start
        questionStart(filler);
        
    })
    //Make logic for the answers (Picking the right one) (Picking an incorrect one) (Add in a timer) (Not picking an answer)
    $(".answer").on("click", answerClick);
    $("#next-question").on("click", function(){
        if (questionNumber === questionList.length){
            $(".result-text").html("You made it all the way through! Your final score was "+ correctAnswers + " correctly and " + incorrectAnswers + " incorrect answers. Refresh the page to play again!")
        } else {
            questionNumber++;
            filler = questionList[questionNumber];
            //alert(questionNumber);
            resultScreen(hide);
            questionScreen(show);
            questionStart(filler);

            
        }
    })    
    //Make logic for win screen (based off previous logic)

})