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


var counter;
var right;
var wrong;
var timer;
var liveQuestion;

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
				




