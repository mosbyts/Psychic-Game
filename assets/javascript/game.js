    var Wins = 0;
    var Losses = 0;
    var guessesLeft = 5;
    var userGuesses = [];
    var computerGuesses = "qwertyuiopasdfghjklzxcvbnm"; 
    var computerChoice = " ";

    var updateGuessesLeft = function(){
        document.querySelector("#guesses-left").innerHTML = guessesLeft;
    };

    function computerGuesses1() {
        computerChoice = computerGuesses.charAt(Math.floor(Math.random()*computerGuesses.length));
        return computerChoice;
    }

    var userGuessed = function(){
        document.querySelector("#user-guesses").innerHTML = userGuesses.join(", ");
    };

    var reset = function(){
        guessesLeft = 5;
        userGuesses = [];
        updateGuessesLeft();
        computerGuesses1();
        userGuessed();
    };

    updateGuessesLeft();
    computerGuesses1();
    

    document.onkeyup = function (){
        guessesLeft--;
        var userGuess = event.key.toLowerCase();
        userGuesses.push(userGuess);
        updateGuessesLeft();
        userGuessed();

        if(userGuess == computerGuesses1()){
            Wins++;
            document.querySelector("#wins").innerHTML = Wins;
            alert("You have won! The correct letter was: " + computerGuesses1() + ".");
            reset();
        }

        if(guessesLeft===0){
            Losses++;
            document.querySelector("#losses").innerHTML = Losses;
            reset();
        }

    }

