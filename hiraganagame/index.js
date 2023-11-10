addEventListener("load", newQu);

var quizone = [
  ["あ", "a"],
  ["い", "i"],
  ["う", "u"],
  ["え", "e"],
  ["お", "o"]
];

var quiztwo = [
  ["あ", "a"],
  ["い", "i"],
  ["う", "u"],
  ["え", "e"],
  ["お", "o"],
  ["か", "ka"],
  ["き", "ki"],
  ["く", "ku"],
  ["け", "ke"],
  ["こ", "ko"],
  ["が", "ga"],
  ["ぎ", "gi"],
  ["ぐ", "gu"],
  ["げ", "ge"],
  ["ご", "go"],
];

var randomIndex; 
var hiracoins = 0;
var correct = 0;
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
    hiracoins = hiracoins + 1;
    correct = correct + 1;
    streak = streak + 1;
    newQu();
  } else {
    alert("Try again.");
    streak = 0;
  }
}
