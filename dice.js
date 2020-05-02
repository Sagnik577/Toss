var player1 = (Math.floor(Math.random() * 6)) + 1;
var dice1="images/dice"+player1+".png";
document.querySelectorAll("img ")[0].setAttribute("src", dice1);

var player2 = (Math.floor(Math.random() * 6)) + 1;
var dice2 = "images/dice" + player2 + ".png";
document.querySelectorAll("img ")[1].setAttribute("src", dice2);

if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}