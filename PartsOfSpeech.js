$(document).ready(function () {

var messages = ["Nice <em>emphasized</em> job!",
					"Excellent  <em>emphasized</em>  clickin'!",
					"That was <em>emphasized</em>  Awesome!",
					"Man are <em>emphasized</em>  you good!",
					"Boom! <em>emphasized</em>  ",
					"You're  <em>emphasized</em>  a pro!",
					"Unbelievable! <em>emphasized</em>  ",
					"Insanity! <em>emphasized</em> ",
					"You're on fire! <em>emphasized</em>  ",
					"That <em>emphasized</em>  was crazy!",
					"You are <em>emphasized</em>  blowin' my mind!"]
	var levels = 0;
	var questionNumber = 0;
	var radioContNbr = 0;
	var radioGridNumber = 0;

	radioButtons0 = new Object();
	radioButtons0.r0="Noun";
	radioButtons0.r1="Verb";
	radioButtons0.r2="Adj";
	radioButtons0.r3="Adv";
	
	radioButtons1 = new Object();
	radioButtons1.r0="Verb";
	radioButtons1.r1="Noun";
	radioButtons1.r2="Adv";
	radioButtons1.r3="Adj";

	radioButtons2 = new Object();
	radioButtons2.r0="Adv";
	radioButtons2.r1="Noun";
	radioButtons2.r2="Verb";
	radioButtons2.r3="Adj";

	radioButtons3 = new Object();
	radioButtons3.r0="Verb";
	radioButtons3.r1="Adj";
	radioButtons3.r2="Adv";
	radioButtons3.r3="Noun";
	
	
	
	
	var daList =[];
	
	dalist[0]={question:"Nice <em>emphasized</em> job!",answer:2,reason:"noun"};
	
	var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}
	

// absolute phrases || adjectives || adverbs || articles || conjunctions || direct and indirect objects || interjections || modifiers || nouns || predicates || prepositions || pronouns || subjects || verbals || verbs 

		
		function dalist(){
			this.question = question;
			this.answer=answer;
			this.reason=reason;
		}
	
	
	
	function setup(){
		var dalist=new dalist("Nice <em>emphasized</em> job!",2,"noun");
	}
	
	
	
	function newQuestion() {

		var newQuestion = messages[levels];
		document.getElementById('question').innerHTML = newQuestion;
		questionNumber = levels;
		
		levels += 1;
		
		if(levels>10)
		{ 
			levels = 0;
		}
		
	}	

	//function newAnswerGrid() {}
			//$('input[type=radio]').click(function(){
			//alert(this.value);
			//document.radioContainer.partofSpeech[0].text = "Fred";
		//});

	
	function newRadioGrid(rgNumber){
		
		var isRadioLabel = 0;

		var rCounter = 0;
		
		var r0Text = "";
		var r1Text = "";
		var r2Text = "";
		var r3Text = "";
		
		// rgNumber which # to use.
	

				switch (rgNumber)
				{
					case 0:
						// use the 0 radio button layout
						r0Text = radioButtons0.r0;
						r1Text = radioButtons0.r1;
						r2Text = radioButtons0.r2;
						r3Text = radioButtons0.r3;
						break;
					
					case 1:
						// use the 1 radio button layout
						r0Text = radioButtons1.r0;
						r1Text = radioButtons1.r1;
						r2Text = radioButtons1.r2;
						r3Text = radioButtons1.r3;
					break;
					case 2:
						// use the 2 radio button layout
						r0Text = radioButtons2.r0;
						r1Text = radioButtons2.r1;
						r2Text = radioButtons2.r2;
						r3Text = radioButtons2.r3;
					break;
					case 3:
						// use the 3 radio button layout
						r0Text = radioButtons3.r0;
						r1Text = radioButtons3.r1;
						r2Text = radioButtons3.r2;
						r3Text = radioButtons3.r3;
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
  
	
	$('#formA input[type=radio]').click(function(){
		//alert(this.value);
	});
	
	
	function radioGridControl()
	{
			newRadioGrid(radioGridNumber);
		
		radioGridNumber += 1;
		if (radioGridNumber > 3)
		{
			radioGridNumber = 0;
		}

	}
	
	$('#radioCntrl').click(function(){
		radioGridControl();
	});

		
	$('#button').click(function(){
		newQuestion();		
	});
	
	
	$('#nextQuestion').click(function(){
		newQuestion();	
		radioGridControl();
		objectLoop();
	});
	
	
	function objectLoop()
	{
		//question:"Nice <em>emphasized</em> job!",answer:2,reason:"noun"	
		/*
		var myQ = dalist[0].question;
		var myA = dalist[0].answer;
		var myR = dalist[0].reason;
		alert("my alert "+myQ+" "+myA+" "+myR);
		*/
		
		var q = 
		
		var myQ = "";  //daList[0].question;
		var myA = "";
		var myR = "";
		alert("my alert "+myQ+" "+myA+" "+myR);
	}

});
