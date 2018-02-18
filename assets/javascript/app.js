var correctAnswers;
var incorrectAnswers;
var seconds;
var answerKey = ["DT","zero","1997","DAL"];
var answers;
var interval;

reset();
displayClock();

 
$("#start").click(function(){
	reset();
	 
	event.preventDefault();
	interval = setInterval(countdown, 1000);
 
});

$("#end").click(function(){
	seconds = 0;
});


 
function countdown(){
	if (seconds != 0){	
		displayClock();
	} else {
		clearInterval(interval);	
		calculateScore();
	}
} 
function displayClock(){

	var divider = ":"

	if (seconds % 60 <= 9){
		divider = ":0";
	}

	var minutes = Math.trunc(seconds / 60);

	$('#clock').text("Time Remaining: " + minutes + divider + seconds % 60);

	--seconds;
}
function calculateScore(){

	$('#clock').text("You're Done");	
	
	answers[0] = $("input[name=sacks]:checked").val();

	answers[1] = $("input[name=playoffs]:checked").val();

	answers[2] = $("input[name=draft]:checked").val();

	answers[3] = $("input[name=city]:checked").val();

	 
	for (var i = 0; i < answerKey.length; i++) {

		if (answers[i] === answerKey[i]){
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
	}


  
	$("#correct").text("Correct Answers: " + correctAnswers);

	$("#incorrect").text("Incorrect Answers: " + incorrectAnswers);

} 
function reset(){
	seconds = 2 * 20;
	answers = [];
	correctAnswers = 0;
	incorrectAnswers = 0;
}