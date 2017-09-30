
// ready when loading is complete
$(document).ready(function() {
	// submit button functionality
	$("#submit").on("click", function() {
		transition();
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



// defining variables
var currentQuestion = 0;

var correct = 0;

var incorrect = 0;

var unanswered = 0;

var answered = 0;

var time = 3;

var interval;

var running = false;

var returnAnswer;

// question and answer structure with correct and incorrect identifiers
var questions = [
	{question: "Who?",
	answer: "One",
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
	answer: "B",
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
	answer: "Blue",
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
	answer: "Reverse",
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

		// hide 
		$("#correctResponse").addClass("hidden");
		$("#incorrectResponse").addClass("hidden");
		$("#unansweredResponse").addClass("hidden");

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

		// setting answer to var
		returnAnswer = questions[currentQuestion].answer

		// clearing and adding the value of each answer to radio button's class
		$("#first").removeClass();
		$("#first").addClass(questions[currentQuestion].answer1.value);
		$("#second").removeClass();
		$("#second").addClass(questions[currentQuestion].answer2.value);
		$("#third").removeClass();	
		$("#third").addClass(questions[currentQuestion].answer3.value);
		$("#fourth").removeClass();
		$("#fourth").addClass(questions[currentQuestion].answer4.value);

		// increment currentQuestion
		currentQuestion++;
	}
}

begin = function() {
	$("#submit").removeClass("hidden");
	$("#clock").removeClass("hidden");
	$(".question").removeClass("hidden");
	$("#answers").removeClass("hidden");
	$("#begin").addClass("hidden");
	$("#begin").addClass("pull-right");
	$("#startOver").addClass("pull-right");
	$("#startOver").addClass("hidden");
	questionSelect();
	
}

transition = function() {

	// increment answered
	clearInterval(interval);
	$("#clock").addClass("hidden");
	running = false;
	answered++;
	console.log("answered!"); 
	
	// displaying transitionary area while hiding the question/answers portions
	$("#submit").addClass("hidden");
	$("#answers").addClass("hidden");

	// checking user's answer against data
	if (!$("#first").is(":checked") && !$("#second").is(":checked") && !$("#third").is(":checked") && !$("#fourth").is(":checked")) {
		unanswered++;
		console.log("unanswered" + unanswered);
		$("#unansweredResponse").removeClass("hidden");
		console.log(returnAnswer);
		$(".actualAnswer").text(returnAnswer);
	}else if ($("input:checked").hasClass("true")) {
		$("#correctResponse").removeClass("hidden");
		correct++;
		console.log("correct" + correct);
	}else{
		$("#incorrectResponse").removeClass("hidden");
		incorrect++;
		console.log("incorrect" + incorrect);
		console.log(returnAnswer);
		$(".actualAnswer").text(returnAnswer);
	}
	
	// user did not guess an answer
// var temp = $("input").hasClass("true").val();
// console.log(temp);
// $(".actualAnswer").text(temp);
	

	// ajax query for gif



	// removing user's selection of a radio button between questions
	$("input").prop("checked", false);


	// final scoring or advancing to next question after answer check and gif timeout

	setTimeout(function(){
	questionSelect();
	$("#submit").removeClass("hidden");
	$("#clock").removeClass("hidden");
	$(".question").removeClass("hidden");
	$("#answers").removeClass("hidden");
	$("#begin").addClass("hidden");
	$("#begin").addClass("pull-right");
	$("#startOver").addClass("pull-right");
	if (answered === questions.length) {
		$("#startOver").removeClass("hidden");
		$("#startOver").removeClass("pull-right");
		$("#results").removeClass("hidden");
		$("#submit").addClass("hidden");
		$("#answers").addClass("hidden");
		$("#clock").addClass("hidden");
		$(".question").addClass("hidden");		
		$("#correctResponse").addClass("hidden");
		$("#incorrectResponse").addClass("hidden");
		$("#unansweredResponse").addClass("hidden");
		$("#correct").text(correct);
		$("#incorrect").text(incorrect);
		$("#unanswered").text(unanswered);

	}
	}, 1000 * 3)
}

// reset the entire game and begin
startOver = function() {
	currentQuestion = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	answered = 0;
	begin();
	$("#results").addClass("hidden");
	console.log("startOver");
}

countDown = function() {
	
	// reset time and begin interval, if no submit, then auto transition at time of zero
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
				transition();
			}
		}, 1000 * 1);
        running = true;
	}else {
		return;
	}
}


});