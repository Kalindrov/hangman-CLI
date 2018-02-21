var inquirer = require('inquirer');
var Word = require('./word.js');

var guesses = 10;
// var wordList = [];
var randomWord = "ship";


// ----- BEGIN GAME ----
function game (maxGuess, randomWord) {
    this.maxGuess = maxGuess;
    this.randomWord = randomWord;
    this.wordOject = new Word(randomWord);
};

var gameObject = new game(10,randomWord);

inquirer.prompt([ 
    {
        type: "input",
        message: "What letter would you like to guess?",
        name: "guess"
      },
]).then(function(response) {
    gameObject.wordObject.display();
    // if (response.guess == char) {

    //     console.log("you have guessed correctly!")

    // } else {
    //     console.log("you have guessed wrong!");
    //     guesses--;
    // }
});