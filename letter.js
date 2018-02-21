function Letter (letter) {
    this.letter = letter;
    this.guess = false;
    this.correct = function() {
        if (this.guess = true) {
            return letter;
        } else {
            return "_";
        }
    }
    this.verify = function(char) {
        if (char === this.letter) {
            this.guess = true;
        }
    }
};