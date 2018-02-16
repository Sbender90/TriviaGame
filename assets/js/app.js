var triviaQuestions = [{
	question: "What is the longest river in the World?",
	answerList: ["Nile", "Congo", "Amazon", "Mekong"],
	answer: 2
},{
	question: "What is the largest inland body of water on Earth?",
	answerList: ["Caspian Sea", "Lake Michigan", "Lake Victoria", "Black Sea"],
	answer: 0
},{
	question: "What country has the highest average elevation?",
	answerList: ["Chile", "Bhutan", "Switzerland", "Nepal"],
	answer: 1
},{
	question: "Which country has the smallest population?",
	answerList: ["Marshall Islands", "Monaco", "San Marino", "Vatican City"],
	answer: 3
},{
	question: "What country has the most fresh water?",
	answerList: ["United States", "Russia", "Brazil", "Canada"],
	answer: 2
},{
	question: "What is the largest Archipelago in the World",
	answerList: ["British Isles", "Malay Archipelago", "Greater Antilles", "Japanese Archipelago"],
	answer: 1
},{
	question: "What is the largest Monolith on Earth?",
	answerList: ["Zuma Rock (nigeria)", "Uluru (Austraila)", "Sugarloaf Mountain (Brazil)", "Devils Tower (USA)"],
	answer: 1
},{
	question: "What is the Worlds longest cave system?",
	answerList: ["Optymistychna Cave", "Lechuguilla Cave", "John Mammoth Cave", "Shuanghedong Cave Network"],
	answer: 2
},{
	question: "Where is the most windy place on Earth?",
	answerList: ["Wellington, New Zealand", "Mount Washington, New Hampshire", "Commonwealth Bay, Antarctica", "Mount Everest"],
	answer: 2
}];

var liveQuestion;
var rightAnswers;
var incorrectAnswers;
var unansweredQuestions;
var userSelect;
var time;
var answered;
var seconds;

var answerMessage = {
	correct: "Correct on to the next one!",
	incorrect: "That's not right, lets move on.",
	timesUp: "You are out of time.",
	finished: "Let's see how you did!"

}

$('#startBtn').on('click', function () {
	$(this).hide();
	$("#my-4").hide();
	newGame();
});

function newGame() {
	$('#finalMessage').empty();
	$('#rightAnswer').empty();
	$('#wrongAnswers').empty();
	$('unansweredQuestions').empty();
	liveQuestion = 0;
	rightAnswers = 0;
	wrongAnswers = 0;
	unansweredQuestions = 0;
	generateQuestion ();
}

function generateQuestion () {
	$('#gameFeedBack').empty();
	$('rightAnswer').empty();
	answered = true;

	$('#liveQuestion').html((liveQuestion+1) + '/' + triviaQuestions.length);
	$('#question').html("<h2> + triviaQuestions[liveQuestion].question + '</h2>");

	for(i = 0; i < answerList.length; i ++) {
		var choiceList = $('<div>');
		choices.text(triviaQuestions[liveQuestion].answerList[i]);
		choices.attr ({"data-index": i });
		choices.addClass('userChoice');
		$('.answerList').append(choices);
	}
}
console.log(generateQuestion);
