var triviaQuestions = [
	{
		question: "What is the longest river in the World?",
		answerList: ["Nile", "Congo", "Amazon", "Mekong"],
		answer: 2
	},
	{
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
	}
];

var currentQuestion
var counter;
var right;
var wrong;
var timer;
var liveQuestion;









/* Ambers code*/

// start game - game logic function
// append buttons and my answers
$("#startBtn").on("click", function(){
	$("#startGame").addClass("hide");
	$("#timeWrap, #finishGame").removeClass("hide");
	createHTML();
})

// create html elements using jquery append to the page
	// loop through the triviaQuestions array
	// for each obj grag the question create a tag and add the question as text
	// add an attribute for each group 1-n
	// loop through the option availble for each question 
	// create an elemetn and add properties
// display all questions and options with 1 timer at once

/*


<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
</div>



*/



function createHTML(){
	triviaQuestions
	// loop through the triviaQuestions array objects
	for(var i = 0;i < triviaQuestions.length; i++){
		console.log("current object in outer loop", i);
		// current triva object
		//console.log(triviaQuestions[i]);
		var $question = $("<h2>"); 
		$question.text(triviaQuestions[i].question);
		$question.attr("data-qgroup",i);
		$question.addClass("question");
		$("#questionsWrap").append($question);
		
		// create the container for all the button options
		// var buttonWrap = `<div class="btn-toolbar" data-toggle="buttons">`;
		var buttonWrap = $("<div>");
		buttonWrap.addClass("btn-group");
		buttonWrap.attr("role","group");
		buttonWrap.attr("aria-label","Basic example");
		
		//loop through options 
		//loop through the length of the answerL:ist array
		for(var j = 0; j< triviaQuestions[i].answerList.length;j++){
			console.log("these options belong to the current object in the first loop", i, "this is the", j, "option in the anserList array which is a array that lives inside the object")
			// create buttons
			// append to container created outside of for loop
			// each button should have a group attr and a unique id
				 //<button type="button" class="btn btn-secondary">Left</button>
				 var button = $("<button>")
				 button.attr("type", "button");
				 button.attr("data-qgroup",+i);
				 button.attr("value",j);
				 button.addClass("btn btn-primary");
				 button.text(triviaQuestions[i].answerList[j]);
				 $(buttonWrap).append(button)
		}
		
		$("#questionsWrap").append(buttonWrap);
	}
}

var answer = [null,null,null,null,null,null,null,null,null];
//answer.splice(index, number of items replacing, what you are replacing with);

// use splice method to replace null with an actual value
// create a click event that gets thewn value of the data attibute data-qgroup which is a number which represents the index that the value will be pushed to.
// gets the value from the button clicked
// save the value to the answers array at the value of the data-qgroup


// on click of finish evaluate if each button selected is correct (answer array check against the triviaQuestions .answer)
// update game data accordingly
// displat final data

// evaluate answers array also if the user runs out of time


// timer will start and text will show (time) when start is clicked
// create a timer
// set interval every x amount of seconds
// deduct from time every x second in interval function
// update the text everytime the number what 
	// if time out disable buttons,
	// remove page contents 
	// dispaly final data 

	// when counter hits 0 interval should stop or when the user clicks finish




/*end Amber's code*/

$('#startBtn').on('click', function () {
		$(this).hide();
		// not hiding the text
		$("#my-4").hide();
		newGame();
	});

	function newGame() {
			$('#finalMessage').empty();
			$('#rightAnswer').empty();
			$('#wrongAnswers').empty();
			
			counter = 0;
			right = 0;
			wrong = 0;
			unanswered = 0;
			liveQuestion = 0;
			
		}
	// $('#q-a').html('Question #'+(question+1)+'/'+triviaQuestions.length);
		
		
	// 	for(i = 0; i <= 8; i++) {
	// 		console.log(i);
	// 	}
		
	// 		$('<h2>').text("question: " + [i]);
		
// trying this not working not sure what the syntax is
			function newQuestion(){
				$('#message').empty();
				$('#right').empty();
				answered = true;
				
				//trying to dynamically generate questions witht his mess
				$('#liveQuestion').html('Question #'+(liveQuestion+1)+'/'+triviaQuestions.length);
				$('#liveQuestion').html('<h2>' + triviaQuestions[liveQuestion].question + '</h2>');
				for(var i = 0; i < 4; i++){
					var choices = $('<div>');
					choices.text(triviaQuestions[liveQuestion].answerList[i]);
					choices.attr({'data-index': i });
					choices.addClass('thisChoice');
					$('#answerBtn').append(choices);
				};
			};
				




