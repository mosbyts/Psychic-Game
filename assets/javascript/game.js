    var Wins = 0;
    var Losses = 0;
    var guessesLeft = 8;
    var userGuesses = [];
    var computerGuesses = "qwertyuiopasdfghjklzxcvbnm"; 
    var computerChoice = " ";
    //var notAllowed = "1234567890!@#$%^&*()_+-={}[]|\;':",./<>?`~"";

    //Make updateGuessLeft a function that will update the HTML ID guesses-left and change the "Guesses Left" number.
    var updateGuessesLeft = function(){
        document.querySelector("#guesses-left").innerHTML = guessesLeft;
    };

    //Make computerGuesses 1 a function that will randomly choose the word the user must guess.
    function computerGuesses1() {
        computerChoice = computerGuesses.charAt(Math.floor(Math.random()*computerGuesses.length));
        return computerChoice;
    }

    //Make userGuessed a function that will update the HTML ID user-guesses and change the "You Guessed" number.
    var userGuessed = function(){
        document.querySelector("#user-guesses").innerHTML = userGuesses.join(", ");
    };

    //Make a reset function to reset the game without affecting wins/losses.
    var reset = function(){
        guessesLeft = 8;
        userGuesses = [];
        updateGuessesLeft();
        computerGuesses1();
        userGuessed();
    };

    //Call the functions to update the guesses left and the letter to guess.
    updateGuessesLeft();
    computerGuesses1();
    
    //When the user pushes a key, subtract a guess, change the key to lowercase and push the key to the "You Guessed" line.
    document.onkeyup = function (){
        guessesLeft--;
        var userGuess = event.key.toLowerCase();
        userGuesses.push(userGuess);
        updateGuessesLeft();
        userGuessed();

        //if(userGuess === notAllowed){
        //Do not subtract a guess.
            //alert("You can only guess letters, try again.");
        //}

        //If the user guesses correctly update wins, alert to let the user know and run the reset function.
        if(userGuess == computerGuesses1()){
            Wins++;
            document.querySelector("#wins").innerHTML = Wins;
            alert("You have won! The correct letter was: " + computerChoice + ".");
            reset();
        }

        //If the user guesses incorrectly eight times update losses, alert to let the user know and run the reset function.
        if(guessesLeft === 0){
            Losses++;
            document.querySelector("#losses").innerHTML = Losses;
            alert("You have lost! Click ok then press any key to try again.")
            reset();
        }

    }

