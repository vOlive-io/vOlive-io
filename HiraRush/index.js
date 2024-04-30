//////////////////////////////////////
//         EVENT LISTENERS          //
//////////////////////////////////////
document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    document.getElementById('submitAnswer').click();
  }
});


//////////////////////////////////////
//          LIGHT VARIABLES         //
//////////////////////////////////////
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


var setado = [
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
  ["た", "ta"],
  ["ち", "chi"],
  ["つ", "tsu"],
  ["て", "te"],
  ["と", "to"],
  ["だ", "da"],
  ["ぢ", "ji"],
  ["づ", "zu"],
  ["で", "de"],
  ["ど", "do"],
];

var setano = [
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
  ["た", "ta"],
  ["ち", "chi"],
  ["つ", "tsu"],
  ["て", "te"],
  ["と", "to"],
  ["だ", "da"],
  ["ぢ", "ji"],
  ["づ", "zu"],
  ["で", "de"],
  ["ど", "do"],
  ["な", "na"],
  ["に", "ni"],
  ["ぬ", "nu"],
  ["ね", "ne"],
  ["の", "no"],
];
var randomIndex; 
var hiracoins = 0;
var correct = 0;
var streak = 0;

var setagounlocked = false;
var setazounlocked = false;




//////////////////////////////////////
//          HEAVY VARIABLES         //
//////////////////////////////////////
var tut = false;


//////////////////////////////////////
//           CLASS CODE             //
//////////////////////////////////////
function classcode() {
  const code = prompt("Enter class code:");
  if (code === "aoclass") {
    enterclassAO();
    } else {
     if (code === "agoclass") {
    enterclassAGO();
    } else {
    if (code === "azoclass") {
    enterclassAZO();
    } else {
    if (code === "adoclass") {
    enterclassADO();
    } else {
    if (code === "shoojiaoem") {
    enterclassShoojiao();
    } else {
    alert("This class does not exist!");
    document.getElementById("game").style.display = "none";
    document.getElementById("erroralerts").style.display = "block";
}
}
}
}
}
}

function enterclassAO() {
  set = set;
  alert("Put you in A-O (Free class)")
  document.getElementById("game").style.display = "block";
  document.getElementById("erroralerts").style.display = "none";
  asksave();
  newQu();
}

function enterclassAGO() {
  set = setago;
  alert("Put you in A-GO (Free class)")
  document.getElementById("game").style.display = "block";
  document.getElementById("erroralerts").style.display = "none";
  asksave();
  newQu();
}

function enterclassAZO() {
  set = setazo;
  alert("Put you in A-ZO (Free class)")
  document.getElementById("game").style.display = "block";
  document.getElementById("erroralerts").style.display = "none";
  asksave();
  newQu();
}

function enterclassADO() {
  set = setazo;
  alert("Put you in A-DO (Free class)")
  document.getElementById("game").style.display = "block";
  document.getElementById("erroralerts").style.display = "none";
  asksave();
  newQu();
}

function enterclassShoojiao() {
  set = setao;
  alert("Setting up immersive class...")
  document.getElementById("game").style.display = "block";
  document.getElementById("erroralerts").style.display = "none";
  asksave();
  const allowtut = prompt("Would you like a tutorial about the hiragana and how to play (type yes or no):");
  if (code === "no") {
  } else {
  aotut();
  }
}



//////////////////////////////////////
//        TUTS AND IMMERSIVE        //
//////////////////////////////////////
function aotut() {
  alert("Tut coming soon!")
    update();
    newQu();
}



//////////////////////////////////////
//            QUESTIONS             //
//////////////////////////////////////
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


//////////////////////////////////////
//        OPEN/CLOSE MENUS          //
//////////////////////////////////////
function openach() {
    document.getElementById("achclick").style.display = "none";
    document.getElementById("ach").style.display = "block";
}

function closeach() {
    document.getElementById("achclick").style.display = "block";
    document.getElementById("ach").style.display = "none";
}

function openowned() {
    document.getElementById("cosmeticsclick").style.display = "none";
    document.getElementById("owned").style.display = "block";
}

function closeowned() {
    document.getElementById("cosmeticsclick").style.display = "block";
    document.getElementById("owned").style.display = "none";
}




//////////////////////////////////////
//       EQUIPPING COSMETICS        //
//////////////////////////////////////
//wallpapers
function blueWall() { if (hiracoins>1) {game.style.backgroundColor = "#759aff"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
function pinkWall() { if (hiracoins>1) {game.style.backgroundColor = "#ffc4ec"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
function yellWall() { if (hiracoins>1) {game.style.backgroundColor = "#fff654"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
//main border
function blueBord() { if (hiracoins>1) {game.style.border = "#759aff 10px groove"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
function pinkBord() { if (hiracoins>1) {game.style.border = "#ff6be4 10px groove"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
function yellBord() { if (hiracoins>1) {game.style.border = "#fff654 10px groove"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
//ach border
function blueAchBord() { if (hiracoins>1) {ach.style.border = "#759aff 10px groove"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
function pinkAchBord() { if (hiracoins>1) {ach.style.border = "#ff6be4 10px groove"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
function yellAchBord() { if (hiracoins>1) {ach.style.border = "#fff654 10px groove"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
//owned border
function blueOwnedBord() { if (hiracoins>1) {owned.style.border = "#759aff 10px groove"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
function pinkOwnedBord() { if (hiracoins>1) {owned.style.border = "#ff6be4 10px groove"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
function yellOwnedBord() { if (hiracoins>1) {owned.style.border = "#fff654 10px groove"; hiracoins -= 1; update();} else { alert("You need more Hiracoins")}}
//////////////////////////////////////
//            COOKIES               //
//////////////////////////////////////
window.onload = function cookies() {
  const savedData = JSON.parse(localStorage.getItem('savedData'));
  if (savedData) {
    setagounlocked = savedData.setagounlocked || false;
    setazounlocked = savedData.setazounlocked || false;
    hiracoins = savedData.hiracoins || 0;
    streak = savedData.streak || 0;
    correct = savedData.correct || 0;
    yellowBord = savedData.yellowBord || false;
    yellowWall = savedData.yellowWall || false;
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

function asksave() {
  if (hiracoins > 0) {
   const wantsave = prompt("It looks like you have played HiraRush before! Do you want to resume from where you left off? (Type Yes or No):");
  if (wantsave === "no") {
    hiracoins = 0;
    streak = 0;
    correct = 0;
      }
 if (wantsave === "yes") {
    }
  }
}




//////////////////////////////////////
//          OLD FUNCTIONS           //
//////////////////////////////////////
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
