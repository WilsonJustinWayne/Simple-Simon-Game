(function () {
    "use strict";

    // Assigning buttons to variables
    var blueButton = $('.bluebutton');
    var greenButton = $('.greenbutton');
    var redButton = $('.redbutton');
    var yellowButton = $('.yellowbutton');
    var delayDuration = 0;

    // Randomly choose 1 of the 4 buttons
    var randomNumber = Math.floor((Math.random() * 4) + 1);
    console.log(randomNumber);
    switch (randomNumber) {
        case 1:
            flashRedButton();
            break;
        case 2:
            flashBlueButton();
            break;
        case 3:
            flashGreenButton();
            break;
        case 4:
            flashYellowButton();
            break;
        default:
            console.log('NUMBER WAS NOT 1-4');
    }

    function flashBlueButton() {
    }

    function flashGreenButton() {
    }

    $('#redButton').animate({backgroundColor:"#F77"}, 200).delay(delayDuration).animate({backgroundColor:"red"}, 200);

    function flashRedButton() {
        console.log("red button pressed");
    }

    function flashYellowButton() {
    }

})();
