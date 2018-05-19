
//How many seconds for countdown
var number = 60;
var countDown;

//Create onclick event for start button
$("#start").on("click", run);

//Create run function and countdown by second
function run() {
    clearInterval(countDown);
    countDown = setInterval(decrement, 1000);
  }

  //Display the number decreasing by 1 per second
function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
if (number === 0) {
    stop();
    alert("You're Out of Time!!!");
    }
}

//Stop the timer
function stop() {
    clearInterval(countDown);
}

//Narrow down question values
$("#button").on("click", count);
function count() {
    var question1 = document.questions.shrimp.value;
    var question2 = document.questions.snail.value;
    var question3 = document.questions.fun.value;
    var question4 = document.questions.tower.value;
    var question5 = document.questions.bird.value;
    var correct = 0;
//Determine correct answers
    if(question1 == "head") {
        correct++;
    }
    if(question2 == "3 years") {
        correct++;
    }
    if(question3 == "Cherophobia") {
        correct++;
    }
    if(question4 == "1665") {
        correct++;
    }
    if(question5 == "Larry") {
        correct++;
    }
//How many correct
$("#number_correct").innerHTML = "You got " + correct + " correct! You so smaaat!";
}