var triviaQuestions = [
	{
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
	}
];

var currentQuestion
var counter;
var right;
var wrong;
var timer;
var liveQuestion;





/*

what the button group should look like when appended to the page



<div class="btn-toolbar" data-toggle="buttons">
    <label class="btn btn-primary">
        <input type="radio" name="optionsA" id="option1" autocomplete="off" value="1"> OPT 1
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="optionsA" id="option2" autocomplete="off" value="2"> OPT 2
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="optionsA" id="option3" autocomplete="off" value="3"> OPT 3
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="optionsA" id="option4" autocomplete="off" value="4"> OPT 4
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="optionsA" id="option5" autocomplete="off" value="5"> OPT 5
    </label>
</div>

*/



/* Ambers code*/

// start game - game logic function
// append buttons and my answers
$("#startBtn").on("click", function(){
	$("#startGame").addClass("hide");
	$("#timeWrap, #finishGam").removeClass("hide");
	createHTML();
})

// create html elements using jquery append to the page
	// loop through the triviaQuestions array
	// for each obj grag the question create a tag and add the question as text
	// add an attribute for each group 1-n
	// loop through the option availble for each question 
	// create an elemetn and add properties
// display all questions and options with 1 timer at once
function createHTML(){
	triviaQuestions
	// loop through the triviaQuestions array 
	for(var i = 0;i < triviaQuestions.length; i++){
		// current triva object
		//console.log(triviaQuestions[i]);
		var $question = $("<h2>"); 
		$question.text(triviaQuestions[i].question);
		$question.attr("data-qgroup",i);
		$question.addClass("question");
		$("#questionsWrap").append($question);
		//console.log($question);
		// other option for creating a element
		//var question = "<h2>"+triviaQuestions[i].question+"</h2>"

		// vcreate the container for all the button options
		//<div class="btn-toolbar" data-toggle="buttons">

		//loop through options 

		for(var j = 0; j< triviaQuestions[1].answerList.length;j++){

	// 		<div class="btn-toolbar" data-toggle="buttons">
    // <label class="btn btn-primary">
    //     <input type="radio" name="optionsA" id="option1" autocomplete="off" value="1"> OPT 1
    // </label>
			
			// create buttons
			// append to container created outside of for loop
			// each button should have a group attr and a unique id
		}
	}
}


// on click of finish evaluate if each button selected is correct
// update game data accordingly
// display final data




// create a timer
	// if time out disable buttons,
	// remove page contents 
	// dispaly final data 




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
				




