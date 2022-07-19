//document query selectors
var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("timerEl");
var startTitle = document.getElementById("start-title");
var questionContainer = document.getElementById("question-container");
var endGameEl = document.getElementById("end-game");
var restartBtn = document.getElementById("restart-quiz");
var scoreEl = document.getElementById("score");
var submitScoreForm = document.getElementById("submit-score");
var viewHighscores = document.getElementById("view-highscores");

//Game variables
var currentQuestion = 0;
var score = 0;
var secondsRemaining = 75;
var timer;
var correctAnswer;

//Questions array
var questions = [
  {
    questionText: "What is an API",
    options: {
      a: "Apple Property Investment ",
      b: "Answer People Intervals ",
      c: "Application Programmig Interface",
      d: "American Petroleum Institute",
    },
    correctAnswer: "c",
  },
  {
    questionText: "What is an example of a self closing tag?",
    options: {
      a: "Header",
      b: "IMG",
      c: "Main",
      d: "Body",
    },
    correctAnswer: "b",
  },
  {
    questionText: "What is Pesudo code?",
    options: {
      a: "Something not useful",
      b: "Something imaginary",
      c: "fake code",
      d: "The outline for your code",
    },
    correctAnswer: "d",
  },
];

//event listener on startBtn that calls startGame()
startBtn.addEventListener("click", startGame);

//start button begins quiz
function startGame() {
  //hide start button by adding class 'hidden'
  startBtn.classList.add("hidden");
  startTitle.classList.add("hidden");
  scoreEl.classList.remove("hidden");
  scoreEl.textContent = `Score: ${score}`;
  //timer starts when quiz begins
  //show timer by removing class'hidden'
  timerEl.textContent = `Time left: ${secondsRemaining}`;
  timerEl.classList.remove("hidden");
  viewHighscores.classList.add("hidden");
  //start the timer
  timer = setInterval(function () {
    secondsRemaining--;
    timerEl.textContent = `Time left: ${secondsRemaining}`;
    if (secondsRemaining <= 0) {
      endGame();
    }
  }, 1000);
  //show first question
  questionContainer.classList.remove("hidden");
  showQuestion();
}
//a quiz question appears
function showQuestion() {
  questionContainer.innerHTML = `
    <h2>${questions[currentQuestion].questionText}</h2>
    <button class="option" data="a">${questions[currentQuestion].options["a"]}</button>
    <button class="option" data="b">${questions[currentQuestion].options["b"]}</button>
    <button class="option" data="c">${questions[currentQuestion].options["c"]}</button>
    <button class="option" data="d">${questions[currentQuestion].options["d"]}</button>
  `;

  var optionBtns = document.querySelectorAll(".option");
  //go to the next question
  for (let i = 0; i < optionBtns.length; i++) {
    optionBtns[i].addEventListener("click", function (e) {
      const userAnswer = e.target.attributes.data.value;
      const correctAnswer = questions[currentQuestion].correctAnswer;

      console.log("user answer: ", userAnswer);
      console.log("correct answer: ", correctAnswer);

      if (userAnswer === correctAnswer) {
        //add points to score
        score += 15;
        scoreEl.textContent = `Score: ${score}`;
      } else {
        secondsRemaining -= 15;
        timerEl.textContent = `Timer: ${
          secondsRemaining < 0 ? 0 : secondsRemaining
        }`;
        if (secondsRemaining <= 0) {
          endGame();
        }
      }

      //goes to next question
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
      } else {
        endGame();
      }
    });
  }
}
//ends the game
function endGame() {
  //if timer runs out- game is over
  clearInterval(timer);
  questionContainer.classList.add("hidden");
  endGameEl.classList.remove("hidden");
  restartBtn.classList.remove("hidden");
  submitScoreForm.classList.remove("hidden");
  viewHighscores.classList.remove("hidden");
}

//restart quiz button
restartBtn.addEventListener("click", resetApp);

function resetApp() {
  //hide the end-game element
  endGameEl.classList.add("hidden");
  restartBtn.classList.add("hidden");
  secondsRemaining = 75;
  score = 0;
  currentQuestion = 0;

  startTitle.classList.remove("hidden");
  startBtn.classList.remove("hidden");
  timerEl.classList.add("hidden");
  scoreEl.classList.add("hidden");
  submitScoreForm.classList.add("hidden");
}

//score and initial are kept in the local storage
submitScoreForm.addEventListener("submit", saveScoreToStorage);

function saveScoreToStorage(e) {
  e.preventDefault();
  const initials = e.target.children[0].value;
  const scoreObject = { initials, score };
  let scoresToStore = [];
  if (localStorage.getItem("savedScores")) {
    scoresToStore = JSON.parse(localStorage.getItem("savedScores"));
  }
  scoresToStore.push(scoreObject);
  localStorage.setItem("savedScores", JSON.stringify(scoresToStore));
}
