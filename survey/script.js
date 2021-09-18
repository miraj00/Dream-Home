var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "What is the original name of JavaScript?",
    choices: ["Lotus", "EScript", "Mocha", "JavaScript"],
    answer: "Mocha",
  },
  {
    question:
      "Which company developed JavaScript?",
    choices: ["Netscape", "Microsoft", "Sun Microsystems", "Apple"],
    answer: "Netscape",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: "<script>",
  },
  {
    question:
      "Which of the following is not considered a JavaScript operator?",
    choices: ["new", "typeof", "this", "delete"],
    answer: "this",
  },
  {
    question: "Using ________ statement is how you test for a specific condition.",
    choices: ["Select", "For", "switch", "if"],
    answer: "if",
  },
  {
    question:
      " _______________ is the tainted property of a window object.",
    choices: ["Host", "Defaultstatus", "Protocol", "Pathname"],
    answer: "Defaultstatus",
  },
  {
    question: "Is it possible to nest function in Javascript?",
    choices: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question:
      "What is mean by - this - keyword in javascript?",
    choices: ["It refers current object", "It referes previous object", "It is variable which contains value", "None of the above"],
    answer: "It refers current object",
  },
];

//-------Page 1 style set -------------------------------------------
var btnStart = document.querySelector("#btn-start");
btnStart.setAttribute("style", "background-color: blue; color: white; font-size: 40px;");

var mainEl = document.querySelector("#main");
mainEl.setAttribute("style", "text-align:center; padding-bottom: 20px;");

var instructionEl = document.querySelector("#instruction");
instructionEl.setAttribute("style", "margin: auto; text-align:center; padding-bottom: 40px;");

//------Question, Answers and Question Result style set---------------
var questionEl = document.querySelector("#question");
questionEl.setAttribute("style", "margin: auto; text-align:center; font-size: 60px; font-weight: bold; padding: 100px 0 50px 0;");

var optionListEl = document.querySelector("#option-list");
optionListEl.setAttribute("style", "margin: 30px auto 30px auto; width: 50%; text-align:center; font-size: 50px; padding: 20px 0 20px 0;");

var questionResultEl = document.querySelector("#question-result");
questionResultEl.setAttribute("style", "text-align:center; color: red; font-size: 30px; padding: 5px 0 20px 0; margin: 30px;");

var scorePageEl = document.querySelector("#score-page");
//-----------------------------------------------------------------
var startingPage = document.querySelector("#starting-page");

var questionIndex = 0;
var correctCount = 0;

//-------------------------------------------------------------
function hidePage1()  {
   renderQuestion();
   mainEl.hidden = true;
   instructionEl.hidden = true;
   btnStart.hidden = true;
   scorePageEl.hidden = true;
   startTimer();
}
//------Timer Set -------------------------------------------------
var timeLeft;
var timerEl;
function startTimer() {
  timeLeft = questions.length * 6;
  timerEl = document.querySelector("#timer");
  timerEl.setAttribute("style", "margin: 50px 150px 0 0; text-align: right; font-size: 40px; font-weight: bold;");


    var timeInterval = setInterval(function() {
       if (timeLeft > 0) {
         timerEl.textContent = 'Time : ' + timeLeft + ' second(s)';
         timeLeft--;
            }
          else if ( timeLeft == 0) {
          scorePage();
         timerEl.textContent = '';
         clearInterval(timeInterval);
           }
  }, 1000);
}

//--------------------------------------------------------------
function renderQuestion() {
  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;
  
  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.setAttribute("style", "border-style: solid; background: LightGray; text-align:center; font-size: 50px; padding: 5px 0 20px 0; margin: 30px;");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
       }
  }
//--------true / false answer display-----------------------------------------------------
function trueFalse(event) {
 var selectedChoice = event.target.textContent;
 var answer = questions[questionIndex].answer;
 console.log(selectedChoice);
 console.log(answer);
  if (selectedChoice == questions[questionIndex].answer) {
     questionResultEl.textContent = "Correct Answer!!";
    console.log("Your answer is correct");
  }
  else {
    questionResultEl.textContent = "Wrong Answer!!";
    console.log("Wrong Answer");
    timeLeft -= 5;
       };
 questionIndex++;

 // -------- if no more question or timeLeft = 0, go to score Page function ------------
  if (questionIndex == '10') {
    var timeCaught;
    timeCaught = timeLeft + 1;
    console.log("the score is:", timeCaught);
    
    localStorage.setItem('Score', timeCaught);
    
    questionEl.hidden = true;
    optionListEl.hidden = true;
    questionResultEl.hidden = true;
 
    event.preventDefault();

    scorePage();
  } 

  if (timeLeft == '0') {
    timeCaught = 0;
    localStorage.setItem('Score', timeCaught);
    scorePage();
  }

    console.log(questionIndex);
    renderQuestion();
}

//--------Directing to Score Page---------------------------
function scorePage() {
  window.location.href = "./assets/score.html";
}


optionListEl.addEventListener('click', trueFalse);

btnStart.addEventListener('click', hidePage1);

