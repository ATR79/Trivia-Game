
/*
//Thought a for loop would work well here with questions listed in an array
//Couldn't figure it out, so went back to html

var questions = [
    {
    question: "Where is the heart of a shrimp located?",
    answerList: ["stomach", "head", "tail", "a shrimp does not have a heart"],
    answer: 1
},{
    question: "How long can a snail sleep?",
    answerList: ["snails do not sleep", "30 seconds", "3 months", "3 years"],
    answer: 3
},{
    question: "What is the fear of fun called?",
    answerList: ["Cherophobia", "Everyone loves fun", "Funophobia", "Pleaseophobia"],
    answer: 0
},{
    question: "How many steps are in the Eiffel Tower?",
    answerList: ['3497', '1973', '1665', '2961'],
    answer: 2
},{
    question: "What is the Twitter bird's name?",
    answerList: ["Fred", "Scott", "Tweety", "Larry"],
    answer: 3
}];

var questionList = ["shrimp", "snail", "fun", "tower", "bird"];
var currentQuestion; var rightAnswer; var wrongAnswer; var seconds; var time; var answered; var userSelect;
var messages = {
    correct: "Yep!",
    incorrect: "Nope!",
    finished: "How'd you do?"
}

$("#resetBtn").on("click", function(){
    $(this).hide();
    newGame();
})

function newGame() {
    $("#finalMessage").empty();
    $("#rightAnswer").empty();
    $("#wrongAnswer").enpty();
    currentQuestion = 0;
    rightAnswer = 0;
    wrongAnswer = 0;
    newQuestion();
}

function newQuestion() {
    $("#message").empty();
    $("#rightAnswer").empty();
    $("#questionList").empty();
    answered = true;

    $("#currentQuestion").html((currentQuestion+1) + questions.length);
    $(".question").html("<h2>" + questions[currentQuestion].question + "</h2>");
    for(var i = 0; i<4; i++) {
        var choices = $("<div>");
        choices.text(questions[currentQuestion].answerList[i]);
        choices.attr({'data-index': i });
        choices.addClass('thisChoice');
        $('.answerList').append(choices);
    }

}
/*



