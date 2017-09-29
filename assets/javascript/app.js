
// ready when loading is complete
$(document).ready(function() {
	// submit button functionality
	$("#submit").on("click", function() {
		submit();
	});
	$("#begin").on("click", function() {
		begin();
	});
	$("#startOver").on("click", function() {
		startOver();
	});

	// radio button functionality, table blank space selection fix
	$(".table tbody tr").on("click", function(event) {
	  if (event.target.type !== "radio") {
	    $(":radio", this).trigger("click");
	  }
	});

	$("#timer").text(time);
});


// defining variables
var currentQuestion = 0;

var correct = 0;

var incorrect = 0;

var unanswered = 0;

var answered = 0;

var time = 3;

var interval;

var running = false;

// question and answer structure with correct and incorrect identifiers
var questions = [
	{question: "Who?",
	answer1: {value : "true",
		string: "One"},
	answer2: {value : "false",
		string: "Two"},
	answer3: {value : "false",
		string: "Three"},
	answer4: {value : "false",
		string: "Four"},
	},
	{question: "What?",
	answer1: {value : "false",
		string: "A"},
	answer2: {value : "true",
		string: "B"},
	answer3: {value : "false",
		string: "C"},
	answer4: {value : "false",
		string: "D"},
	},
	{question: "When?",
	answer1: {value : "false",
		string: "Red"},
	answer2: {value : "false",
		string: "Green"},
	answer3: {value : "true",
		string: "Blue"},
	answer4: {value : "false",
		string: "Yellow"},
	},
	{question: "Where?",
	answer1: {value : "false",
		string: "Stop"},
	answer2: {value : "false",
		string: "Go"},
	answer3: {value : "false",
		string: "Forward"},
	answer4: {value : "true",
		string: "Reverse"},
	},
];

console.log(questions);

// looping through questions and corresponding answers to determine what should be displayed 
questionSelect = function() {
	if (currentQuestion < questions.length) {
		console.log("questionSelect");

		// setting timer
		countDown();

		// clearing and adding the current question to the page
		$("#question").empty();
		$("#question").text(questions[currentQuestion].question);

		// clearing and adding the current answer selections
		$("#answer1").empty();
		$("#answer1").text(questions[currentQuestion].answer1.string);
		$("#answer2").empty();
		$("#answer2").text(questions[currentQuestion].answer2.string);
		$("#answer3").empty();	
		$("#answer3").text(questions[currentQuestion].answer3.string);
		$("#answer4").empty();
		$("#answer4").text(questions[currentQuestion].answer4.string);

		// tracking responses
		if (true) {}

		// advancing to the next question and answers
		currentQuestion++;
	}
	else {
		score();
	}
}

begin = function() {
	$("#begin").addClass("hidden");
	$("#submit").removeClass("hidden");
}

submit = function() {
		if (time !== 0) {
			score();
		}
	// if (answered < questions.length) {
	}else {
		transition();
	}
}

transition = function() {

	// displaying transitionary area while hiding the question/answers portions
	$("#submit").addClass("hidden");
	$("#answers").addClass("hidden");

	// checking user's answer against data
	$("#correctResponse").removeClass("hidden");
	$("#incorrectResponse").removeClass("hidden");
	$("#unanswered").removeClass("hidden");

	// ajax query for gif


	// advancing to next question after answer check and gif timeout
	setTimeout(function(){
		questionSelect();
	}, 1000 * 5)

}

checkAnswer = function() {
	$("#startOver").removeClass("hidden");
	$("#results").removeClass("hidden");
	return;
}

startOver = function() {
	currentQuestion = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	answered = 0;
	questionSelect();
	console.log("startOver");
}

countDown = function() {
	
	// checking if the clock is not running
	time = 3;
	$("#timer").text(time);
	console.log(time);
	if (running === false) {
		interval = setInterval(function() {
			time--;
			console.log(time);
			$("#timer").text(time);
			if (time === 0) {
				running = false;
				clearInterval(interval);
				score();
			}
		}, 1000 * 1);
        running = true;

	}

	else {
		// clearInterval(interval);
		return;
	}
}

score = function() {
	answered++;
	console.log("score!"); 
	if (questionsAnswered = questions.length) {
		checkAnswer();
	}
	// questionSelect();
	// return;

}