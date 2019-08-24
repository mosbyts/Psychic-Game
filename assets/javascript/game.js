    var Wins = 0;
    var Losses = 0;
    var guessesLeft = 8;
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
        guessesLeft = 8;
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
            alert("You have won! The correct letter was: " + computerChoice + ".");
            reset();
        }

        if(guessesLeft===0){
            alert("You have lost! Click ok then press any key to try again.")
            Losses++;
            document.querySelector("#losses").innerHTML = Losses;
            reset();
        }

    }

