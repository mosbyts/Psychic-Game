    var Wins = 0;
    var Losses = 0;
    var Guesses = 5;

    var computerGuesses = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    document.onkeyup = function (){
        var userGuess = String.fromCharCode(event.keyCode).
            toUpperCase();

        console.log(userGuess);

        var computerGuess = computerGuesses[Math.floor(Math.random()*computerGuesses
        .length)];

        console.log(computerGuess);
        console.log("------------");

        if(userGuess==computerGuess){
            Wins++;
            console.log("You have won!");
            console.log("Wins: " + Wins);
        }

        if(userGuess!==computerGuess){
            Losses++;
            Guesses--;
            console.log("Wins: " + Wins)
            console.log("Losses: " + Losses);
            console.log("Guesses left: " + Guesses);
        }

    }