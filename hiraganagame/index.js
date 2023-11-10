var quizone = [
  ["あ", "a"],
  ["い", "i"],
  ["う", "e"],
  ["え", "e"],
  ["お", "o"]
];
function new() {
  var randomIndex = Math.floor(Math.random() * quizone.length);
  var question = quizone[randomIndex][0];
  document.getElementById("spot").innerHTML = question;
}

function check() {
  var userAnswer = document.getElementById("answerInput").value;
  var correctAnswer = quizone[randomIndex][1];
  if (userAnswer === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Try again.");
  }
}
