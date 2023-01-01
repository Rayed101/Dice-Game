// var randomNumber1 = Math.floor((Math.random() * 6) + 1)
// var randomNumber2 = Math.floor((Math.random() * 6) + 1)

// var dice1 = document.getElementById("dice1")
// var dice2 = document.getElementById("dice2")

// dice1.src = `images/dice${randomNumber1}.png` ;
// dice2.src = `images/dice${randomNumber2}.png` ;

var randomNumber1 = Math.floor((Math.random() * 6))
var randomNumber2 = Math.floor((Math.random() * 6))

const chobi = ["images/dice1.png", "images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",] ;

var dice1 = document.getElementById("dice1") ;
var dice2 = document.getElementById("dice2") ;

dice1.src = chobi[randomNumber1] ;
dice2.src = chobi[randomNumber2] ;

var win = document.getElementById("win") ;

if (randomNumber1 > randomNumber2){
    win.innerHTML = "Player 1 wins! <img class = 'flag' src = 'flag.png'> " 
} else if (randomNumber1 < randomNumber2){
    win.innerHTML = "Player 2 wins! <img class = 'flag' src = 'flag.png'> "
} else {
    win.innerHTML = "Draw"
}




