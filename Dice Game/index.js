function random() {
    return Math.floor(Math.random() * 6) + 1;
}

function changeDie1() {
    document.querySelector("img.img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
}

function changeDie2() {
    document.querySelector("img.img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
}

function declareWinner() {
    if (randomNumber1 === randomNumber2) {
        document.querySelector("p.winner").textContent="It's a tie!"
        ties++;
        document.querySelector(".tally3").textContent=ties
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("p.winner").textContent="Player 1 wins!"
        playerOneWins++;
        document.querySelector(".tally1").textContent=playerOneWins
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("p.winner").textContent="Player 2 wins!"
        playerTwoWins++;
        document.querySelector(".tally2").textContent=playerTwoWins
    }
}

var randomNumber1 = "";
var randomNumber2 = "";
var playerOneWins = 0;
var playerTwoWins = 0;
var ties = 0;

function roll() {
    randomNumber1 = random();
    randomNumber2 = random();
    changeDie1();
    changeDie2();
    declareWinner();
    document.querySelector("button.play").textContent="Roll Again"
}




