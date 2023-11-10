window.addEventListener("load", function() {
  newQu();
  update();

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      check();
    }
  });
});


var set = [
  ["あ", "a"],
  ["い", "i"],
  ["う", "u"],
  ["え", "e"],
  ["お", "o"]
];

var setago = [
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

var setazo = [
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
  ["さ", "sa"],
  ["し", "shi"],
  ["す", "su"],
  ["せ", "se"],
  ["そ", "so"],
  ["ざ", "za"],
  ["じ", "ji"],
  ["ず", "zu"],
  ["ぜ", "ze"],
  ["ぞ", "zo"],
];

var randomIndex; 
var hiracoins = 0;
var correct = 0;
var streak = 0;
var setagounlocked = false;
var setazounlocked = false;


function newQu() {
  randomIndex = Math.floor(Math.random() * set.length);
  var question = set[randomIndex][0];
  document.getElementById("spot").innerHTML = question;
}

function check() {
  var userAnswer = document.getElementById("answerInput").value;
  var correctAnswer = set[randomIndex][1];
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
  if (streak === 20) {
    set = setago;
    setagounlocked = true;
    alert("Congratulations! You have unlocked A-Go!");
  }
  update()
}

function update() {
  hiracount.innerHTML = "Hiracoins: " + hiracoins;
  streakcount.innerHTML = "Answer streak: " + streak;
}


document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    check();
  }
});


window.onload = function () {
  const savedData = JSON.parse(localStorage.getItem('savedData'));
  if (savedData) {
    hiracoins = savedData.hiracoins || 0;
    streak = savedData.streak || 0;
    correct = savedData.correct || 0;
  }
};

setInterval(function () {
  const data = {
    hiracoins: hiracoins,
    streak: streak,
    correct: correct,
  };
  localStorage.setItem('savedData', JSON.stringify(data));
}, 1000);


