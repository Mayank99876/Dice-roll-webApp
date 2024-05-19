
var randomNumber11 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage1 = "dice" + randomNumber11 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber22 = Math.floor(Math.random() * 6) + 1;

var randomImageSource22 = "images/dice" + randomNumber22 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource22);


//If player 1 wins
if (randomNumber11 > randomNumber22) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber22 > randomNumber11) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
