var targetNumber = Math.floor(Math.random() * 100) + 20;
var counter = 0;
var winCount = 0;
var lossCount = 0;
var countCrystal = 4;

$("#number-to-guess").text(targetNumber);

for (var i = 0; i < countCrystal; i++) {
    var imageCrystal = $("<button>");
    imageCrystal.addClass("crystal-image");
    var idString = 'crystal' + (i);
    imageCrystal.attr('id', idString);

    var returnString = "url('assets/images/gem" + (i + 1) + ".png')"
    imageCrystal.css('background-image', returnString);
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $("#crystals").append(imageCrystal);
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 20;
    $("#number-to-guess").text(targetNumber);
    for (var i = 0; i < countCrystal; i++) {
        $('#crystal' + i).attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    }
    $('#total-score').text('0');
    counter = 0;
}

$(".crystal-image").on("click", function () {
    $('#result').html('');
    $('#info').html('');
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    $('#total-score').text(counter);

    if (counter === targetNumber) {
        winCount++;
        $('#win').html(winCount);
        $('#result').html("You win!");
        $('#info').html("<br>" + counter + " is equal to the target of " + targetNumber);
        counter = 0;
        resetGame();
    }
    else if (counter >= targetNumber) {
        lossCount++;

        $('#loss').html(lossCount)
        $('#result').html("You lose!")
        $('#info').html("<br>" + counter + " is greater than the target of " + targetNumber);
        counter = 0;
        resetGame();
    }

});
