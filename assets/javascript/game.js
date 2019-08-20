    var Wins = 0;
    var Losses = 0;
    var guessesLeft = 5;
    var userGuesses = [];
    var computerGuesses = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var computerChoice = null;

    var updateGuessesLeft = function(){
        document.querySelector("#guesses-left").innerHTML = guessesLeft;
    };

    var computerGuess = function(){
        computerGuesses[Math.floor(Math.random()*computerGuesses.length)];
        return computerGuesses;
    };

    var userGuessed = function(){
        document.querySelector("#user-guesses").innerHTML = userGuesses.join(", ");
    };

    var reset = function(){
        guessesLeft = 5;
        userGuesses = [];
        updateGuessesLeft();
        computerGuess();
        userGuessed();
    };

    updateGuessesLeft();
    computerGuess();


    document.onkeyup = function (){
        guessesLeft--;
        var userGuess = event.key.toUpperCase();
        userGuesses.push(userGuess);
        updateGuessesLeft();
        userGuessed();

        if(userGuess===computerChoice){
            Wins++;
            document.querySelector("#wins").innerHTML = Wins;
            alert("You have won!");
            reset();
        }

        if(guessesLeft==0){
            Losses++;
            document.querySelector("#losses").innerHTML = Losses;
            reset();
        }

    }

