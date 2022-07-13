//document query selectors
var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("timerEl");
var startTitle = document.getElementById("start-title");

//Game variables
var currentQuestion = 0;
var score = 0;
var secondsRemaining = 5;
var timer;

//Questions array
var questions = [
  {
    questionText: "What is Jude's favorite color?",
    options: {
      a: "blue",
      b: "yellow",
      c: "pruple",
      d: "green",
    },
    correctAnswer: "c",
  },
  {
    questionText: "what is the weather like",
    options: {
      a: "cloudy",
      b: "sunny",
      c: "raining",
      d: "tornados",
    },
    correctAnswer: "b",
  },
  {
    questionText: "how many pets do I have",
    options: {
      a: "none",
      b: "1",
      c: "2",
      d: "3",
    },
    correctAnswer: "d",
  },
];

//event listener on startBtn that calls startGame()
startBtn.addEventListener("click", startGame);

function startGame() {
  //hide start button by adding class 'hidden'
  startBtn.classList.add("hidden");
  startTitle.classList.add("hidden");
  //show timer by removing class'hidden'
  timerEl.textContent = secondsRemaining;
  timerEl.classList.remove("hidden");
  //start the timer
  timer = setInterval(function () {
    secondsRemaining--;
    timerEl.textContent = secondsRemaining;
    if (secondsRemaining <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  //end the timer
  clearInterval(timer);
}

//start button begins quiz

//timer starts when quiz begins

//a quiz question appears

//if answer is correct, go to the next question

//if the answer is incorrect, loose 15 seconds and go to the next question

//if timer runs out- game is over

//if all questions are answered correctly- game is over

//score and initial are kept in the local storage

//at the end of the quiz
//view high scores button

//restart quiz button
