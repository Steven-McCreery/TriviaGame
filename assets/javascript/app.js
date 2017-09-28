
// ready when loading is complete
$(document).ready(function() {
	// submit button functionality
	$(".button").on("click", function() {
		submit();
	});

	// radio button functionality, table blank space selection fix
	$(".table tbody tr").click(function(event) {
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

submit = function() {
	running = false;
	questionSelect();
}

checkAnswer = function() {
	return;
}

countDown = function() {
	if (running === false) {
		time = 3;
		interval = setInterval(function() {
			time--;
			$("#timer").text(time);
		}, 1000);
        running = true;

	
		if (time === 0) {
			clearInterval(countDown);
			score();
		}
	}
}

score = function() {
	return;
}