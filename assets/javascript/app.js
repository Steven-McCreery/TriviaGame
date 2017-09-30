
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

var time = 20;

var interval;

var running = false;

var returnAnswer;

// question and answer structure with correct and incorrect identifiers
var questions = [
	{question: "Which state is it illegal to catch mice without a hunting liscense?",
	answer: "Ohio",
	answer1: {value : "true",
		string: "Ohio"},
	answer2: {value : "false",
		string: "Alabama"},
	answer3: {value : "false",
		string: "North Carolina"},
	answer4: {value : "false",
		string: "California"},
	},
	{question: "A group of unicorns known as a?",
	answer: "Blessing",
	answer1: {value : "false",
		string: "Gander"},
	answer2: {value : "true",
		string: "Blessing"},
	answer3: {value : "false",
		string: "Frolic"},
	answer4: {value : "false",
		string: "Distraction"},
	},
	{question: "Where was the fortune cookie invented?",
	answer: "America",
	answer1: {value : "false",
		string: "Finland"},
	answer2: {value : "false",
		string: "China"},
	answer3: {value : "true",
		string: "America"},
	answer4: {value : "false",
		string: "Tanzania"},
	},
	{question: "The Empire State Building is composed of how many bricks?",
	answer: "10 million",
	answer1: {value : "false",
		string: "100 million"},
	answer2: {value : "false",
		string: "1 billion"},
	answer3: {value : "false",
		string: "1 million"},
	answer4: {value : "true",
		string: "10 million"},
	},
	{question: "What modern vehicle was invented to circumvent trench warfare?",
	answer: "Tank",
	answer1: {value : "false",
		string: "Plane"},
	answer2: {value : "false",
		string: "Helicopter"},
	answer3: {value : "true",
		string: "Tank"},
	answer4: {value : "false",
		string: "Swift Boat"},
	},
	{question: "The dot over the letter 'i' and 'j' called? a/an",
	answer: "Tittle",
	answer1: {value : "false",
		string: "Puntie"},
	answer2: {value : "true",
		string: "Tittle"},
	answer3: {value : "false",
		string: "Dot"},
	answer4: {value : "false",
		string: "Fulfin"},
	},
	{question: "In addition to a dagger and spear a gladiator armed with a/an?",
	answer: "Net",
	answer1: {value : "false",
		string: "Trident"},
	answer2: {value : "true",
		string: "Net"},
	answer3: {value : "false",
		string: "Grenade"},
	answer4: {value : "false",
		string: "Shield"},
	},
	{question: "Where would you find the Sea of Tranquility?",
	answer: "Moon",
	answer1: {value : "false",
		string: "Brazil"},
	answer2: {value : "false",
		string: "Germany"},
	answer3: {value : "false",
		string: "America"},
	answer4: {value : "true",
		string: "Moon"},
	},
	{question: "Which kind of flower bulbs were once exchanged as a form of currency?",
	answer: "Tulip",
	answer1: {value : "true",
		string: "Tulip"},
	answer2: {value : "false",
		string: "Rose"},
	answer3: {value : "false",
		string: "Lilly"},
	answer4: {value : "false",
		string: "Iris"},
	},
	{question: "What California city did the last Pony Express ride end in?",
	answer: "Sacramento",
	answer1: {value : "true",
		string: "Sacramento"},
	answer2: {value : "false",
		string: "Los Angeles"},
	answer3: {value : "false",
		string: "San Francisco"},
	answer4: {value : "false",
		string: "San Diego"},
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
		$("img").remove();

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
	
	
	

	// ajax query for gif
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        returnAnswer + "&api_key=dc6zaTOxFJmzC&limit=1";

	$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	console.log(response);

      	var currentImage = $("<img>");
      	var imageUrl = response.data["0"].images.fixed_height.url;

      	currentImage.attr("src", imageUrl);
        currentImage.attr("alt", "a gif image of " + returnAnswer);

      	$("#transition").append(currentImage);
      })




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
		$("img").remove();
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
	}, 1000 * 5)
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
	time = 20;
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