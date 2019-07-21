// declare variables to keep scores for game
var wins = 0;
var losses = 0;
var totalScore = 0;

// ranNumber is picking a number between 19-120
var ranNumber = Math.round(Math.random() * 120) + 19;
console.log(ranNumber)

// this function checks the total score to the random number
function endGame() {
    if(totalScore === ranNumber) {
        alert("You Win!");
        wins++;
        $("#wins").html(wins);
        startGame();
        console.log("win");
    }
    
    else if(totalScore >= ranNumber){
        alert("You lose");
        losses++;
        $("#losses").html(losses);
        startGame();
    }
}

// startGame will generate random values for each image and reset the game
function startGame() {
    wins = 0;
    losses = 0;
    totalScore = 0;
    ranNumber = Math.round(Math.random() * 120) + 19;

    // here we select each image the class selector "card" with .each
    // then use .attr to to give each image a random number value
    $(".card").each(function(i) {
        $(this).attr("data-num", Math.round(Math.random() * 12) + 1);
    });   

    // prints random number to html
    $("#random-number").html(ranNumber);

    // click function will set the value for each image
    $(".card").on("click", function() {
    var imageVal = $(this).attr("data-num");

    // need to parse the string to an integer and add to total score
    totalScore += parseInt(imageVal, 10);
    $("#total-score").text(totalScore);
    endGame();
});

};

startGame();


