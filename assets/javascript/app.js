
//ready when loading is complete
// $(document).ready(function() {
// 	;
// }


// defining variables
var correct = 0;

var incorrect = 0;

var unanswered = 0;

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
// for (var i = 0; i > question.length; i++) {
// 	;
// }









