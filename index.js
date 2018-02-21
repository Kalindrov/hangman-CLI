var inquirer = require('inquirer');
var Word = require('./word.js');

var guessedCharacters = [];
var guesses = 10;
var randomWord = ["WASHINGTON", "MONROE", "LINCOLN", "MADISON", "ROOSEVELT", "BUSH", "CLINTON", "EISENHOWER", "KENNEDY", "TRUMAN"];
var pickedWord = getRandomInt(0,randomWord.length - 1);
var wordObject = new Word(randomWord[pickedWord]);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

console.log("\n PLAY THE PRESIDENT NAMING GAME!\n");

function askGuess() {
    inquirer.prompt([ 
        {
            type: "input",
            message: "What letter would you like to guess?",
            name: "guess"
          },
    ]).then(function(response) {
        var answer = response.guess.toUpperCase();
        if (answer.length > 1) {
            askGuess();
            return;
        }
        var foundChar = guessedCharacters.indexOf(answer);
        if (foundChar != -1 ) {
            askGuess();
            return;
        }

        var correct = wordObject.checkGuess(answer);
        console.log("\n");
        console.log(" " + wordObject.display());
        guessedCharacters.push(answer);
        console.log("\n");
        console.log(" " + guessedCharacters);
        if (correct) {
            console.log("\n You got it right!\n");
            if (wordObject.isComplete()) {
                console.log("\n You have won the game!\n");
                return;
            }
            askGuess();
        } else {
            console.log("\n You got it wrong!\n");
            guesses--;
            
            if (guesses == 0) {
                console.log("\n You have lost the game!\n");
                console.log("\n The correct president is \"" + wordObject.getWord() + "\".");
            } else {
                console.log("\n You have " + guesses + " guesses remaining!\n");
                askGuess();
                
            } 
        }

    });
}

askGuess();
