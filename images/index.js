var randomNumber1 = Math.floor(Math.random() * 6+1);
var dice1 = "dice"+randomNumber1+".png" ;
var randomNumber2 = Math.floor(Math.random() * 6+1);
var dice2 = "dice"+randomNumber2+".png" ;
document.getElementsByTagName("img")[1].setAttribute("src" , dice2);
document.getElementsByTagName("img")[0].setAttribute("src" , dice1);

if (dice1 > dice2){
    document.querySelector("h1").innerText= "Player 1 wins 🍾";
}
else if (dice1 < dice2){
    document.querySelector("h1").innerText= "Player 2 wins 🍾";
}
else{
    document.querySelector("h1").innerText= "It's a draw";
}
