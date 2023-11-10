addEventListener("load", newQu);

var quizone = [
  ["あ", "a"],
  ["い", "i"],
  ["う", "u"],
  ["え", "e"],
  ["お", "o"]
];

var randomIndex; 
var hiracoins = 0;
var corect = 0;
var streak = 0;



function newQu() {
  randomIndex = Math.floor(Math.random() * quizone.length);
  var question = quizone[randomIndex][0];
  document.getElementById("spot").innerHTML = question;
}

function check() {
  var userAnswer = document.getElementById("answerInput").value;
  var correctAnswer = quizone[randomIndex][1];
  if (userAnswer === correctAnswer) {
    alert("Correct!");
    newQu();
  } else {
    alert("Try again.");
  }
}
