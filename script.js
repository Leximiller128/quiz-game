//document query selectors
var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("timerEl");
var startTitle = document.getElementById("start-title");
var questionContainer = document.getElementById("question-container");
var endGameEl = document.getElementById("end-game");

//Game variables
var currentQuestion = 0;
var score = 0;
var secondsRemaining = 75;
var timer;

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
  //timer starts when quiz begins
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
  //show first question
  questionContainer.classList.remove("hidden");
  showQuestion();
}
//a quiz question appears
function showQuestion() {
  questionContainer.innerHTML = `
    <h2>${questions[currentQuestion].questionText}</h2>
    <button class="option"data = "a">${questions[currentQuestion].options["a"]}</button>
    <button class="option"data = "b">${questions[currentQuestion].options["b"]}</button>
    <button class="option"data = "c">${questions[currentQuestion].options["c"]}</button>
    <button class="option" data = "d">${questions[currentQuestion].options["d"]}</button>
  `;

  var optionBtns = document.querySelectorAll(".option");
  console.log(optionBtns);
  //go to the next question
  for (let i = 0; i < optionBtns.length; i++) {
    optionBtns[i].addEventListener("click", function (e) {
      let userAnswer = e.target.attributes.data.value;
      //if the answer is correct then will moveto current question
      //else subtract 10 seconds and move on to next question
      currentQuestion++;
      //if answer is correct, go to the next question
      if (currentQuestion < questions.length) {
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
}

//if the answer is incorrect, loose 15 seconds and go to the next question
function subtract() {
  subtract(timer);
}

// let subtract = timerEl.subtract(15);
// console.log(format);

//if all questions are answered correctly- game is over

//score and initial are kept in the local storage

//at the end of the quiz
//view high scores button

//restart quiz button
