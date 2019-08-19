    var Wins = 0;
    var Losses = 0;
    var Ties = 0;

    var computerGuesses = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    document.onkeyup = function (){
        var userGuess = String.fromCharCode(event.keyCode).
            toUpperCase();

        console.log(userGuess);
    }