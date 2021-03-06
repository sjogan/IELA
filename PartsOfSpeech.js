$(document).ready(function () {

				
				
					
var qa_array = [
				{question:"I bought a <em>beautiful</em> dress at the mall.",radiobank:0,answer:1},
				{question:"What did <em>she</em> ask you to do?",radiobank:1,answer:5},
				{question:"I left my shoes <em>under</em> the kitchen table.",radiobank:2,answer:0},
				{question:"If we finish our work <em>quickly</em> we can go to the movies.",radiobank:3,answer:7},
				{question:"On Saturdays I <em>work</em> from nine to five.",radiobank:0,answer:2},
				{question:"I want to go to a <em>university</em> in the United States.",radiobank:1,answer:4},
				{question:"I'm sure I have <em>met</em> your sister before.",radiobank:2,answer:7},
				{question:"<em>Well</em>, I don't think I will be here to answer the phone.",radiobank:3,answer:2},
				{question:"Andy knocked on the door <em>but</em> nobody answered.",radiobank:0,answer:6},
				{question:"<em>After</em> lunch let's go out for a coffee.",radiobank:1,answer:2},
				{question:"The clown chased a dog around the <em>ring</em> and then fell flat on her face.",radiobank:2,answer:4},
				{question:"The geese <em>indolently</em> waddled across the intersection.",radiobank:3,answer:7},
				{question:"<em>Yikes!</em> I'm late for class.",radiobank:0,answer:7},
				{question:"Bruno's <em>shabby</em> thesaurus tumbled out of the book bag when the bus 15 suddenly pulled out into traffic",radiobank:1,answer:0},
				{question:"Mr. Frederick angrily <em>stamped</em> out the fire that the local hooligans had started on his deck.",radiobank:2,answer:0},
				{question:"Later that summer, she asked herself, 'What was <em>I</em> thinking of?'",radiobank:3,answer:0},
				{question:"Her greatest fear is that the world will end before she finds a comfortable pair <em>of</em> panty-hose.",radiobank:0,answer:2},
				]

				
	var numberLevels = 16;	
					
	var levels = 0;
	var questionNumber = 0;
	var radioContNbr = 0;
	var radioGridNumber = 0;
	var correctAnswer = 0;
	
	var score = 0;
	
	var isDone = false;
	var isStarted = false;
	

	radioButtons0 = new Object();
	radioButtons0.r0="Noun";
	radioButtons0.r1="Adjective";
	radioButtons0.r2="Verb";
	radioButtons0.r3="Adverb";
	radioButtons0.r4="Pronoun";
	radioButtons0.r5="Preposition";
	radioButtons0.r6="Conjunction";
	radioButtons0.r7="Interjection";
	
	radioButtons1 = new Object();
	radioButtons1.r0="Adjective";
	radioButtons1.r1="Noun";
	radioButtons1.r2="Adverb";
	radioButtons1.r3="Verb";
	radioButtons1.r4="Preposition";
	radioButtons1.r5="Pronoun";
	radioButtons1.r6="Interjection";
	radioButtons1.r7="Conjunction";
		
	radioButtons2 = new Object();
	radioButtons2.r0="Verb";
	radioButtons2.r1="Adverb";
	radioButtons2.r2="Pronoun";
	radioButtons2.r3="Preposition";
	radioButtons2.r4="Noun";
	radioButtons2.r5="Adjective";
	radioButtons2.r6="Conjunction";
	radioButtons2.r7="Interjection";
	
	radioButtons3 = new Object();
	radioButtons3.r0="Pronoun";
	radioButtons3.r1="Preposition";
	radioButtons3.r2="Conjunction";
	radioButtons3.r3="Interjection";
	radioButtons3.r4="Noun";
	radioButtons3.r5="Adjective";
	radioButtons3.r6="Verb";
	radioButtons3.r7="Adverb";
	
	
	
	$('#nextQuestion').click(function(){
		nextQuestion();	
	});


	$('#start').click(function(){
		isStarted = true;
		document.getElementById("start").disabled = true; 
		nextQuestion();	
	});	
	

	function newQuestion() {

		var newQuestion = messages[levels];
		document.getElementById('question').innerHTML = newQuestion;
		questionNumber = levels;
		
		levels += 1;
		
		if(levels>numberLevels)
		{ 
			levels = 0;
		}
		
	}	


	function nextQuestion() {
		
		var newQuestion = qa_array[levels].question;
		var newRadioBank = qa_array[levels].radiobank;

		correctAnswer = qa_array[levels].answer;
		document.getElementById('question').innerHTML = newQuestion;
		questionNumber = levels;
		
		levels += 1;
		
		if(levels>numberLevels)
		{ 
			levels = 0;
			isDone = true;
		}
		
		newRadioGrid(newRadioBank);
		
	}	
	
	function updateScoreOnScreen(){
		//score
		document.getElementById('scorebox').innerText = 'Your Score: '+ score;
	
	}
	
	function newRadioGrid(rgNumber){
		
		var isRadioLabel = 0;

		var rCounter = 0;
		
		var r0Text = "";
		var r1Text = "";
		var r2Text = "";
		var r3Text = "";
		var r4Text = "";
		var r5Text = "";
		var r6Text = "";
		var r7Text = "";
		
		// rgNumber which # to use.
	
				switch (rgNumber)
				{
					case 0:
						// use the 0 radio button layout
						r0Text = radioButtons0.r0;
						r1Text = radioButtons0.r1;
						r2Text = radioButtons0.r2;
						r3Text = radioButtons0.r3;
						r4Text = radioButtons0.r4;
						r5Text = radioButtons0.r5;
						r6Text = radioButtons0.r6;
						r7Text = radioButtons0.r7;
						break;
					
					case 1:
						// use the 1 radio button layout
						r0Text = radioButtons1.r0;
						r1Text = radioButtons1.r1;
						r2Text = radioButtons1.r2;
						r3Text = radioButtons1.r3;
						r4Text = radioButtons1.r4;
						r5Text = radioButtons1.r5;
						r6Text = radioButtons1.r6;
						r7Text = radioButtons1.r7;
					break;
					case 2:
						// use the 2 radio button layout
						r0Text = radioButtons2.r0;
						r1Text = radioButtons2.r1;
						r2Text = radioButtons2.r2;
						r3Text = radioButtons2.r3;
						r4Text = radioButtons2.r4;
						r5Text = radioButtons2.r5;
						r6Text = radioButtons2.r6;
						r7Text = radioButtons2.r7;
					break;
					case 3:
						// use the 3 radio button layout
						r0Text = radioButtons3.r0;
						r1Text = radioButtons3.r1;
						r2Text = radioButtons3.r2;
						r3Text = radioButtons3.r3;
						r4Text = radioButtons3.r4;
						r5Text = radioButtons3.r5;
						r6Text = radioButtons3.r6;
						r7Text = radioButtons3.r7;
					break;
					
				}
		
		$('#radioContainer').contents().each(function() {
			if (this.nodeName == '#text' && isRadioLabel == 1) {
				isRadioLabel = 2;
			}

			if (isRadioLabel == 2) {
			
				switch (rCounter)
				{
					case 0:
						this.nodeValue = r0Text;
						break;
					case 1:
						this.nodeValue = r1Text;
						break;
					case 2:
						this.nodeValue = r2Text;
						break;
					case 3:
						this.nodeValue = r3Text;
						break;
					case 4:
						this.nodeValue = r4Text;
						break;
					case 5:
						this.nodeValue = r5Text;
						break;
					case 6:
						this.nodeValue = r6Text;
						break;
					case 7:
						this.nodeValue = r7Text;
						break;
				}
				
				isRadioLabel = 0;
				rCounter += 1;
			}

			if (this.type == 'radio') {
				isRadioLabel = 1;
			} else {
				isRadioLabel = 0;
			}
			
		})
		
		radioContNbr += 1;
		
		if (radioContNbr > 3)
		{ 
			radioContNbr = 0;
		}
		
		uncheckRadio();
	}
	
	function uncheckRadio()
	{
		var ele = document.getElementsByName("partofSpeech");
		for(var i=0;i<ele.length;i++)
		{
			ele[i].checked = false;
		}
	}
  
	
	$('input[type=radio]').click(function(){
	
		if(isStarted==true){
			if(isDone==false){
				if(this.value == correctAnswer)
				{
					// correct answer!
					alert("correct!");
					score = score + 1;
				}
				else 
				{
					// incorrect answer.
					alert("incorrect!");
				}
				updateScoreOnScreen();
				nextQuestion();	
						}
			else{
				// now what?  reset?
				alert("All Done!");
				document.getElementById("start").disabled = false; 
			}
		}
		else
		{
			alert("Please press the start button to begin.");
		}
	
	});

});
