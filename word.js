var Letter = require('./letter.js');

function Word(wrd) {
    this.word = wrd;
    this.letters = [];
    this.wordchoosen = false;

    this.getLets = function() {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    };
    this.didWeFindTheWord = function(){
        if(this.letters.every(function(lttr){
            return lttr.appear === true;
        })){
            this.wordFound = true;
            return true;
        }
    };
    this.checkIfLetterFound = function(guessedLetter) {
        var returnThis = 0;
        this.letters.forEach(function(lttr){
            if(lttr.letter === guessedLetter){
                ltter.appear = true;
                returnThis++;
            }
        })
        return returnThis;
    };
}