console.log(quizQuestions)
var timerElement = document.querySelector(".timer");
var startElement = document.getElementById("start");
var startScreenElement = document.getElementById("start-screen");
var QuestionContainerElement = document.getElementById("questions");
var ChoicesElement = document.getElementById("choices");
var EndElement = document.getElementById("end-screen");
var finalScoreElement = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var submitButton = document.getElementById('submit');
var FeedbackElement = document.getElementById("feedback");
var questionTitle = document.getElementById('question-title')
var choicesContainer = document.getElementById('choices')
var currentQuestionIndex = 0;
var timer;
var timerCount; 

startElement.addEventListener('click', startQuiz);

function startQuiz() {
  timerCount = 100;
  startTimer()
  displayQuestion();
  startScreenElement.classList.add('hide')
  QuestionContainerElement.classList.remove('hide')
}


//Displays question and answer buttons
function displayQuestion() {
    console.log("questions displayed!")
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
      timerCount = timerCount - 10
    }
    currentQuestionIndex++;
    // Checks if there are more questions
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
        //TODO add end to quizz
      endQuiz();
    }
  }




// Starts timer
  function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }


var userscore
function endQuiz(){
  QuestionContainerElement.classList.add('hide')
  EndElement.classList.remove('hide')
  clearInterval(timer)
  var userScore = timerCount
  finalScoreElement.textContent = userScore

}

submitButton.addEventListener('click', handleScoreSubmission);

function handleScoreSubmission() {
  var userInitials = initialsInput.value.trim();
  if (userInitials === '') {
    alert('Please enter your initials.');
    return;
  }
    var scoreData = {
      initials: userInitials,
      score: userscore,
    };
    saveScoreToLocalStorage(scoreData);
  }

function saveScoreToLocalStorage(scoreData){
  var existingScores
  var storedScores = localStorage.getItem("scores")
  if (storedScores) {
    existingScores = JSON.parse(storedScores);
  } else {
    existingScores = []
  }
  existingScores.push(scoreData)
  existingScores.sort((a, b) => b.score - a.score);
  localStorage.setItem('scores', JSON.stringify(existingScores))
}


