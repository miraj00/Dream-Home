var questions = [
  {
    question: "How knowledgeable or unknowledgeable would you say our service team member was?",
    choices: ["Extermely knowledgeable", "Moderately knowledgeable", "Slightly knowledgeable", "Neither knowledgeable nor unknowledgeable"],
  },
  {
    question:
      "Which alternative approach did you attempt?",
    choices: ["Online chat agent", "Self-service through the website", "Call center agent", "Self-service through the mobile app"],
  },
  {
    question:
      "Were you able to accomplish your goal today?",
    choices: ["Extremely difficult", "Somewhat difficult", "Neither easy nor difficult", "Somewhat easy", "Extremely easy"],
  },
  {
    question: "Based on your most recent support call, how easy or difficult was it to interact with Dream Home?",
    choices: ["Extremely difficult", "Somewhat difficult", "Neither easy nor difficult", "Somewhat easy", "Extremely easy"],
  },
  {
    question: "Overall, how satisfied were you with Dream Home?",
    choices: ["Extremely satisfied", "Somewhat satisfied", "Neither satisfied nor dissatisfied", "Somewhat dissatisfied", "Extremely dissatisfied"],
  }
];

//-------Page 1 style set -------------------------------------------
var btnStart = document.querySelector("#btn-start");
btnStart.setAttribute("style", "background-color: coral; color: white; font-size: 40px;");

var mainEl = document.querySelector("#main");
mainEl.setAttribute("style", "text-align:center; padding-bottom: 20px;");

var instructionEl = document.querySelector("#instruction");
instructionEl.setAttribute("style", "margin: auto; text-align:center; padding-bottom: 40px;");

//------Question, Answers and Question Result style set---------------
var questionEl = document.querySelector("#question");
questionEl.setAttribute("style", "margin: auto; text-align:center; font-size: 60px; font-weight: bold; padding: 100px 0 50px 0;");

var optionListEl = document.querySelector("#option-list");
optionListEl.setAttribute("style", "margin: 30px auto 30px auto; width: 50%; text-align:center; font-size: 50px; padding: 20px 0 20px 0;");

// var questionResultEl = document.querySelector("#question-result");
// questionResultEl.setAttribute("style", "text-align:center; color: red; font-size: 30px; padding: 5px 0 20px 0; margin: 30px;");

// var scorePageEl = document.querySelector("#score-page");
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
  //  scorePageEl.hidden = true;
   startTimer();
}
//------Timer Set -------------------------------------------------
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 2,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};
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
// //--------true / false answer display-----------------------------------------------------
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

//  // -------- if no more question or timeLeft = 0, go to score Page function ------------
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

  //  if (timeLeft == '0') {
  //    timeCaught = 0;
  //    localStorage.setItem('Score', timeCaught);
  //    scorePage();
  //  }

     console.log(questionIndex);
     renderQuestion();
 }

// //--------Directing to Score Page---------------------------
// function scorePage() {
//   window.location.href = "./assets/score.html";
// }


optionListEl.addEventListener('click', trueFalse);

btnStart.addEventListener('click', hidePage1);



