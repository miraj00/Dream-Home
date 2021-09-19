
// --- get initial and score values from local storage ------------------------------------

var init = localStorage.getItem("initial");
console.log(init); 

var x = localStorage.getItem("Score");
console.log(x); 


//-------Style IDs -----------------------------------------------------------------------

var highScoresEl = document.querySelector("#high-scores");
highScoresEl.setAttribute("style", "text-align:center; margin: 100px auto 0 auto; padding-bottom: 20px;");

    //------ add init and x values to show it to user -------------
var listEl = document.querySelector("#list");
listEl.textContent = init + " - "+ x;
listEl.setAttribute("style", "text-align:center; border: 4px solid black; width: 20%; font-size: 40px; margin: 0 auto 0 auto; padding: 10px;");

var goBackEl = document.querySelector("#btn-goBack");
goBackEl.setAttribute("style", "margin: 50px auto 0 700px; background-color: blue; color: white; font-size: 40px;");

var btnClear = document.querySelector("#btn-clear");
btnClear.setAttribute("style", "margin: 50px auto 0 50px; background-color: blue; color: white; font-size: 40px;");

//----- created function to clear / hide local storage values ----------------

function clearStorage() {
    localStorage.clear();  
    listEl.hidden = true;
}

//-----  function to perform upon button click --------------
btnClear.addEventListener('click', clearStorage);


