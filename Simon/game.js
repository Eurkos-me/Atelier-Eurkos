var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomChosenColor = "";
var started = false;
var gameOver = false;
var level = 0;

$("div.btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
});

$(document).keypress(function () {
    if (!started) {
        $('#level-title').text("Level " + level);
        nextSequence();
        started = true;
    } else if (gameOver) {
        gameOver = false;
        started = true;
        $('#level-title').text("Level " + level);
        nextSequence(); 
    }
});

function nextSequence () {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(250).fadeOut(250).fadeIn(250);
    playSound(randomChosenColor);
    level++;
    $('#level-title').text("Level " + level)    
};

function checkAnswer (currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $('#level-title').text("Game Over, Press Any Key to Restart.");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
        gameOver = true;
    }
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
  
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver () {
    level = 0
    gamePattern = [];
    started = false;
}






