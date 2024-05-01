//////////////////////////////////////
//         EVENT LISTENERS          //
//////////////////////////////////////
const texts = ['Hey, Wacha doing in here!?', 'Dont be hacking in any points', 'Checking for bugs?', 'Hi Olive Here, remember not to cheat!'];;
text = texts[Math.floor(Math.random() * texts.length)];
console.log(text)

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
var hiraElap = 0;
var correct = 0;
var streak = 0;
var ques = 0;

var setagounlocked = false;
var setazounlocked = false;
var switchCount = 0;

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
    hiraElap++;
    correct++;
    streak++;
    newQu();
  } else {
    if (userAnswer === "hiradub"){
  adminhiradub();
    } else {
    alert("Try again.");
    streak = 0;
  }
  update();
}
  ques++;
}


function update() {
  hiracount.innerHTML = "Hiracoins: " + hiracoins;
  streakcount.innerHTML = "Answer streak: " + streak;
}

function adminhiradub() {
  hiracoins = hiracoins * 2;
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

function opencredits() {
    document.getElementById("opencreditsclick").style.display = "none";
    document.getElementById("credits").style.display = "block";
}

function closecredits() {
    document.getElementById("opencreditsclick").style.display = "block";
    document.getElementById("credits").style.display = "none";
}


//////////////////////////////////////
//       EQUIPPING COSMETICS        //
//////////////////////////////////////
//basic wallpapers
 function redWall() { if (hiracoins>1) {game.style.backgroundColor = "#ed3737"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function oranWall() { if (hiracoins>1) {game.style.backgroundColor = "#ff8800"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function yellWall() { if (hiracoins>1) {game.style.backgroundColor = "#fff654"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function greeWall() { if (hiracoins>1) {game.style.backgroundColor = "#039600"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function blueWall() { if (hiracoins>1) {game.style.backgroundColor = "#759aff"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function pinkWall() { if (hiracoins>1) {game.style.backgroundColor = "#ffc4ec"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}

//basic border
 function redBord() { if (hiracoins>1) {game.style.border = "#ed3737 10px groove"; ach.style.border = "#ed3737 10px groove"; owned.style.border = "#ed3737 10px groove"; credits.style.border = "#ed3737 10px groove"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function oranBord() { if (hiracoins>1) {game.style.border = "#ff8800 10px groove"; ach.style.border = "#ff8800 10px groove"; owned.style.border = "#ff8800 10px groove"; credits.style.border = "#ff8800 10px groove"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function yellBord() { if (hiracoins>1) {game.style.border = "#fff654 10px groove"; ach.style.border = "#fff654 10px groove"; owned.style.border = "#fff654 10px groove"; credits.style.border = "#fff654 10px groove"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function greeBord() { if (hiracoins>1) {game.style.border = "#039600 10px groove"; ach.style.border = "#039600 10px groove"; owned.style.border = "#039600 10px groove"; credits.style.border = "#039600 10px groove"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function blueBord() { if (hiracoins>1) {game.style.border = "#759aff 10px groove"; ach.style.border = "#759aff 10px groove"; owned.style.border = "#759aff 10px groove"; credits.style.border = "#759aff 10px groove"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}
function pinkBord() { if (hiracoins>1) {game.style.border = "#ff6be4 10px groove"; ach.style.border = "#ff6be4 10px groove"; owned.style.border = "#ff6be4 10px groove"; credits.style.border = "#ff6be4 10px groove"; hiracoins -= 1; switchCount++; update();} else { alert("You need more Hiracoins")}}



//////////////////////////////////////
//            ACHEVME               //
//////////////////////////////////////
var totalAch = 0;

//questions got right
var preschoolerAch = false; //1
var elementarySchoolerAch = false; //15
var middleSchoolerAch = false; //25
var hightSchoolerAch = false; //50
var collegeStudentAch = false; //75
var teacherAch = false; //100
var principalAch = false; //125
var masterAch = false; //150
var totalCompetenceAch = false; //200

//question got right check
var preschoolerAchCheck = false; 
var elementarySchoolerAchCheck = false; 
var middleSchoolerAchCheck = false; 
var hightSchoolerAchCheck = false; 
var collegeStudentAchCheck = false; 
var teacherAchCheck = false; 
var principalAchCheck = false; 
var masterAchCheck = false; 
var totalCompetenceAchCheck = false; 


//times cosmetics switched
var wildWallpaperAndBashfulBordersAch = false; //1
var switchAch = false; //15
var flashyStyleAch = false; //25
var makeoverAch = false; //50
var bigVisionsAch = false; //75
var visualArtistAch = false; //100
var contentStrategistAch = false; //125
var JackOfAllTradesAch = false; //150
var queenOfCustomizationAch = false; //200

//times cosmetics switched check
var wildWallpaperAndBashfulBordersAchCheck = false; //1
var switchAchCheck = false;
var flashyStyleAchCheck = false; 
var makeoverAchCheck = false; 
var bigVisionsAchCheck = false; 
var visualArtistAchCheck = false; 
var contentStrategistAchCheck = false; 
var JackOfAllTradesAchCheck = false; 
var queenOfCustomizationAchCheck = false; 

function checkAch() {

}



function updateAch() {

}



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
