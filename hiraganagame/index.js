
window.addEventListener("load", classcode);
  
document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    document.getElementById('submitAnswer').click();
  }
});

function classcode() {
  const code = prompt("Enter class code:");
  if (code === "classcode101") {
    enterclass1();
  } else {
     if (code === "classcode202") {
    enterclass2();
    } else {
    alert("This class does not exist!");
    document.getElementById("game").style.display = "none";
    document.getElementById("erroralerts").style.display = "block";
}
}
}

function enterclass1() {
  set = set;
  alert("Put you in A-O Level 1!")
  document.getElementById("game").style.display = "block";
  document.getElementById("erroralerts").style.display = "none";
  newQu();
}

function openshop() {
    document.getElementById("notshop").style.display = "none";
    document.getElementById("shop").style.display = "block";
}

function closeshop() {
    document.getElementById("notshop").style.display = "block";
    document.getElementById("shop").style.display = "none";
}

function openowned() {
    document.getElementById("cosmeticsclick").style.display = "none";
    document.getElementById("owned").style.display = "block";
}

function closeowned() {
    document.getElementById("cosmeticsclick").style.display = "block";
    document.getElementById("owned").style.display = "none";
}

var set = [
  ["あ", "a"],
  ["い", "i"],
  ["う", "u"],
  ["え", "e"],
  ["お", "o"]
];

var setao = [
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
  update();
}

function check() {
  var userAnswer = document.getElementById("answerInput").value;
  var correctAnswer = set[randomIndex][1];
  if (userAnswer === correctAnswer) {
    alert("Correct!");
    hiracoins++;
    correct++;
    streak++;
  } else {
    alert("Try again.");
    streak = 0;
  }
  update();
  newQu();
}

function update() {
  hiracount.innerHTML = "Hiracoins: " + hiracoins;
  streakcount.innerHTML = "Answer streak: " + streak;
} 

window.onload = function () {
  const savedData = JSON.parse(localStorage.getItem('savedData'));
  if (savedData) {
    setagounlocked = savedData.setagounlocked || false;
    setazounlocked = savedData.setazounlocked || false;
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
  localStorage.setItem('savedData', JSON.stringify(data));closecosmeticsclick
}, 1000);

/*
  if (streak > 20 && !setagounlocked) { 
    set = setago;
    setagounlocked = true;
    alert("Congratulations! You have unlocked A-Go!");
  }
  if (streak > 50 && !setazounlocked) { 
    set = setazo;
    setazounlocked = true;
    alert("Congratulations! You have unlocked A-Zo!");
  }
  */   


function blueWall() {game.style.backgroundColor = "#759aff";}
function pinkWall() {game.style.backgroundColor = " #ffc4ec";}
function blueBord() {game.style.border = "#759aff 10px groove";}
function pinkBord() {game.style.border = "#ff6be4 10px groove";}
