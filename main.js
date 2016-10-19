var word = "whatever";
var inquirer = require('inquirer');


function startGame(){
    console.log("--------------------");
    console.log("Welcome to Hangman");
    console.log("--------------------");
    console.log("Guess the Correct Word");
    console.log("--------------------");
    
    // randomWord();
    // userGuess();
    // wrongGueses();

};


 


function userGuess(){
var questions = [
  {
    type: 'input',
    name: 'You guessed',
    message: 'Guess the correct Word!',

    validate: function (value) {
      
      if (value.length < 2) {
        return true;
      }
      return 'Only one letter at a time!';
    }
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});

}


function wordSmith(guessWrong, quessRight, randomWords, guessesRe) {

}


inquirer.prompt({
  type: 'list',
  name: 'startTheGame',
  message: 'Start Hangman Game',
  choices: ['yes', 'no']


}).then(function (user) {
    if(user.startTheGame == 'yes'){
        startGame();
    } else {
        console.log("ok");
    }
 
});




