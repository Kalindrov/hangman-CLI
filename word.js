var Letter = require('./letter.js');

function Word (word) {
    this.word = word;
    this.lets = [];
    for (var i = 0; i < this.word.length; i++) {
        var char = this.word.charAt(i);
        var letterObject = new Letter(char);
        this.lets.push(letterObject);
    };

    this.display = function() {
        var output = "";
        for (var i = 0; i < this.lets.length; i++) {
            output += this.lets[i].display();
            output += " ";
        }
        return output;
    }
    this.checkGuess = function(char) {
        var correct = false;
        for (var i = 0; i < this.lets.length; i++) {
            var right = this.lets[i].verify(char);
            if (right) {
                correct = true;
            }
        }
        return correct;
    }

    this.isComplete = function() {
        var finished = true;
        for (var i = 0; i < this.lets.length; i++) {
            finished &= this.lets[i].isComplete();
        }
        return finished;
    }
    this.getWord = function () {
        return this.word;
    }
}

module.exports = Word;