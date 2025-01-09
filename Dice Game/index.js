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
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("p.winner").textContent="Player 1 wins!"
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("p.winner").textContent="Player 2 wins!"
    }
}

var randomNumber1 = "";
var randomNumber2 = "";

function roll() {
    randomNumber1 = random();
    randomNumber2 = random();
    changeDie1();
    changeDie2();
    declareWinner();
    document.querySelector("button.play").textContent="Roll Again"
}




