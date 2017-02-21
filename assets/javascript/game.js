

	$(document).ready(function() {




var computerNumber = 0;
var crystalOneValue = 0;
var crystalTwoValue = 0;
var crystalThreeValue = 0;
var crystalFourValue = 0;

		var userScore = 0;

var losses = 0;

var wins = 0;


//function to set a random number
function randomNumber (min, max) {
	min = Math.ceil(min);
  	max = Math.floor(max);
 	return Math.floor(Math.random() * (max - min)) + min;
}

//assign random numbers to computer and crystals

function assignRandomNumbers() {
	computerNumber = randomNumber(20, 100);
	$("#compNum").html(computerNumber);
	$("#yourNum").html(0);
	crystalOneValue = randomNumber(0, 20);
	crystalTwoValue = randomNumber(0,20);
	crystalThreeValue = randomNumber(0,20);
	crystalFourValue = randomNumber(0,20);
}

//when one of the crystals is clicks, add the randomly generated value of the crystal to the user score and then compare
//the score to check if the user won, lost, or can continue to play
$("#crystalOne").on("click", function() {
	userScore += crystalOneValue;
	$("#yourNum").text(userScore);
	compareScores();
});

$("#crystalTwo").on("click",function() {
	userScore += crystalTwoValue;
	$("#yourNum").text(userScore);
	compareScores();
});

$("#crystalThree").on("click", function() {
	userScore += crystalThreeValue;
	$("#yourNum").text(userScore);
	compareScores();
});

$("#crystalFour").on("click", function() {
	userScore += crystalFourValue;
	$("#yourNum").text(userScore);
	compareScores();
});



function compareScores() {
	if (userScore > computerNumber) {
		alert("You Lose!! Sorry");
		$("#loss").html(losses);
	}
	else if (userScore === computerNumber) {
		alert("You Win!!!");
		wins++;
		$("#win").html(wins);

		}

}


function restartGame (){
	userScore = 0;
	assignRandomNumbers();
}
$("#resetBtn").on("click", function() {
 restartGame();


});


assignRandomNumbers();

});
