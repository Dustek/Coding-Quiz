var timerElement = document.querySelector(".timer");
var startElement = document.getElementById("start");
var QuestionContainerElement = document.getElementById("questions");
var ChoicesElement = document.getElementById("choices");
var EndElement = document.getElementById("end-screen");
var FeedbackElement = document.getElementById("feedback");
var questionTitle = document.getElementById('question-title')
var choicesContainer = document.getElementById('choices')

import quizQuestions from './questions.js';


var currentQuestionIndex = 0;
var timer;
var timerCount; 

//Displays question and answer buttons
function displayQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    // Clear previous choices
    choicesContainer.innerHTML = '';
    for (let index = 0; index < currentQuestion.choices.length; index++) {
        var choice = currentQuestion.choices[index];
        var button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', function () {
          handleAnswerClick(choice);
        });
        choicesContainer.appendChild(button);
      }
}

function handleAnswerClick(selectedAnswer) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Handle correct answer
      console.log("Correct!");
    } else {
      // Handle incorrect answer (subtract time, etc.)
      console.log("Incorrect!");
    }
    currentQuestionIndex++;
    // Checks if there are more questions
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }





function startGame() {
    isWin = false;
    timerCount = 100;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    //TODO figure out this function
    renderBlanks()
    startTimer()
  }






// Starts timer
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