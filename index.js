var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1 - 6
var randomDice1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceSource1 = "images/" + randomDice1;  //images/dice1.png - images/dice6.png


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomDiceSource2 = "images/" + randomDice2;

var images = document.querySelectorAll("img");

var image1 = images[0];
var image2 = images[1];

image1.setAttribute("src", randomDiceSource1);
image2.setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player1 wins!";
}
 else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player2 wins!";
}
 else {
  document.querySelector("h1").innerText = "Draw";
}
