function Letter (letter) {
    this.letter = letter;
    this.guess = false;
    this.display = function() {
        if (this.guess == true) {
            return letter;
        } else {
            return "_";
        }
    }
    this.verify = function(char) {
        if (char == this.letter) {
            this.guess = true;
            return true;
        } else {
            return false;
        }
    }
    this.isComplete = function() {
        return this.guess;
    }
};

module.exports = Letter;