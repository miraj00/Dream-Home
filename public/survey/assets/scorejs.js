// ---score value from local storage ------------------------------------

var x = localStorage.getItem("Score");
console.log(x); 


//-------Style IDs -----------------------------------------------------------------------
var quizCompleteEl = document.querySelector("#quiz-complete");
quizCompleteEl.setAttribute("style", "text-align:center; margin: 100px auto 0 auto; padding-bottom: 20px;");

var currentScoreEl = document.querySelector("#current-score");
currentScoreEl.textContent = 'Your Score is : ' +x;
currentScoreEl.setAttribute("style", "margin: 40px 0 40px 0; text-align:center; padding-bottom: 40px;");

var btnSubmit = document.querySelector("#btn-submit");
btnSubmit.setAttribute("style", "margin: 50px auto 0 900px; background-color: blue; color: white; font-size: 40px;");


//-----when clicked it will perform function and store initials in local storage -----------  
btnSubmit.addEventListener("click", store);

function store() {
var y = document.getElementById("initial").value;
localStorage.setItem('initial', y);
console.log(y);

//----- if inital is left blank, it will alert to put initial --------
if (!y) {
    alert("You need to put Initials to proceed further");
    return false;
}
//----- this directs to the next page ------
window.location.href='../assets/summary.html'
}
