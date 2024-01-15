var scoresElement = document.getElementById("highscores");
var storedScores = localStorage.getItem('scores');
console.log(storedScores)
var scores = JSON.parse(storedScores)
console.log(scores)

for (let i = 0; i < scores.length; i++) {
var ol = document.createElement("ol")
ol.textContent = scores[i].initials + " - score: " + scores[i].score
scoresElement.appendChild(ol)
  } 




var clearButton = document.getElementById("clear")
clearButton.addEventListener("click", function(){
localStorage.removeItem('scores');
scoresElement.innerHTML = "";
})