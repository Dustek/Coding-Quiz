var timerElement = document.querySelector(".timer");
var startElement = document.getElementById("start");
var QuestionContainerElement = document.getElementById("questions");
var ChoicesElement = document.getElementById("choices");
var EndElement = document.getElementById("end-screen");
var FeedbackElement = document.getElementById("feedback");




var currentQuestionIndex = 0;
var timer;
var timerCount; 

function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }


  function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
        //TODO make losegame function
        loseGame();
      }
    }, 1000);
  }