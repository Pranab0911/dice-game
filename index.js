var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomeDiceImage = "dice" + randomNumber1 + ".png";
var randomeImageSouce = "images/" + randomeDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomeImageSouce);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSouce2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSouce2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}