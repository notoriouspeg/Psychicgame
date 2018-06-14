
console.log ("Hi")

var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var psychicGuess;
var playerGuess;
var numberOfGuesses=9;
var numberOfWins=0;
var numberOfLosses=0;
var lettersGuessed=[];



function startGame() {
psychicGuess=alphabet[Math.floor(Math.random()*alphabet.length)]
numberOfGuesses=9;
console.log("COMPUTER", psychicGuess)
}

startGame();

document.onkeyup = function(event){
var playerGuess = event.key;
console.log(playerGuess);

if (playerGuess === psychicGuess) {
    numberOfWins++
    console.log("WIN",numberOfWins);
    alert("You won!")
    $("#wins").html(numberOfWins)
    startGame();
}

else {
    numberOfGuesses--
    console.log("GUESSES LEFT",numberOfGuesses);
    $("#guessesleft").html(numberOfGuesses);
    alert("Nope. Try again buddy!");
    $("#lettersguessed").html(lettersGuessed)
    // I didn't get the "letters guessed" piece working like I wanted.
}   
    if (numberOfGuesses === 0) {
        numberOfLosses++
        console.log("LOST",numberOfLosses);
        $("#losses").html(numberOfLosses)
        startGame();
    }
}

//next is is the user's guess equal to the psychic's guess. If equal waht happens and if not equal, what happens. Conditionals.
// condition for what is a win and what is a loss
// Reset would be something we would be repeating in our code alot.  It will be another function. Will have to think about what needs to happen when I reset the game and what function will I write that happens everytime.


