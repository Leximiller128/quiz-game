var highScoresTableBody = document.getElementById("highscores-table");
var clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearScores);

function renderHighScoresTable() {
  //get scores out of local storage
  var scoresFromStorage = JSON.parse(localStorage.getItem("savedScores"));

  //loop over the scores array and generate a tr for each one
  scoresFromStorage.forEach((entry) => {
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${entry.initials}</td>
      <td>${entry.score}</td>  
    `;
    highScoresTableBody.append(newRow);
  });
}
renderHighScoresTable();

function clearScores() {
  localStorage.setItem("savedScores", JSON.stringify([]));
  location.reload();
}
