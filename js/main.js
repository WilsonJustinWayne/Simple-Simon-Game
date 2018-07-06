(function () {
    "use strict";

    // Assigning buttons to variables
    var colorFadeDuration = 200;
    var delayDuration = 0;
    var userArr = [];
    var gameArr = [];


    function grabRandomNumber() {
        // Randomly choose 1 of the 4 buttons
        var randomNumber = Math.floor((Math.random() * 4) + 1);

        // Uses randomNumber to choose
        switch (randomNumber) {
            case 1:
                flashRedButton(gameArr);
                break;
            case 2:
                flashBlueButton(gameArr);
                break;
            case 3:
                flashGreenButton(gameArr);
                break;
            case 4:
                flashYellowButton(gameArr);
                break;
            default:
                console.log('NUMBER WAS NOT 1-4');
        }
    }

    function flashBlueButton(arr) {
        $('#blueButton').animate({backgroundColor: "#77F"},
            colorFadeDuration).delay(delayDuration).animate({backgroundColor: "#00F"}, colorFadeDuration);
        return arr.push('blue');
    }

    function flashGreenButton(arr) {
        $('#greenButton').animate({backgroundColor: "#7F7"},
            colorFadeDuration).delay(delayDuration).animate({backgroundColor: "#0F0"}, colorFadeDuration);
        return arr.push('green');
    }

    function flashRedButton(arr) {
        console.log("red button pressed");
        $('#redButton').animate({backgroundColor: "#F77"},
            colorFadeDuration).delay(delayDuration).animate({backgroundColor: "#F00"}, colorFadeDuration);
        return arr.push('red');
    }

    function flashYellowButton(arr) {
        $('#yellowButton').animate({backgroundColor: "#FF7"},
            colorFadeDuration).delay(delayDuration).animate({backgroundColor: "#DD0"}, colorFadeDuration);
        return arr.push('yellow');

    }

    $('#blueButton').click(function () {
        flashBlueButton(userArr);
        console.log(userArr);
    });
    $('#greenButton').click(function () {
        flashGreenButton(userArr);
        console.log(userArr);
    });
    $('#redButton').click(function () {
        flashRedButton(userArr);
        console.log(userArr);
    });
    $('#yellowButton').click(function () {
        flashYellowButton(userArr);
        console.log(userArr);
    });

    function createGameArray(roundNumber) {
        for (var i = 0; i > roundNumber; i++) {
            grabRandomNumber().delay(800);
        }
    }

    function playRound(roundNumber) {
        console.log("setting up rounds");
        while (roundNumber < 10) {
            console.log("starting round");
            createGameArray(roundNumber);
            console.log("finishing Round");
            roundNumber++
        }
    }

    $('startButton').click(playRound(1));
})
();
