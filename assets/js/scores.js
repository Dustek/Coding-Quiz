var scoresElement = document.getElementById("highscores");
var storedScores = localStorage.getItem('scores');
console.log(storedScores)
var scores = JSON.parse(storedScores)
console.log(scores)

// for (let i = 0; i < scores.length; i++) {
// var ol = document.createElement("ol")
// ol.textContent = scores.
//   } 




var clearButton = document.getElementById("clear")
clearButton.addEventListener("click", function(){
localStorage.removeItem("scores");
})