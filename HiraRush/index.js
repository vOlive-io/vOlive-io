//////////////////////////////////////
//         EVENT LISTENERS          //
//////////////////////////////////////
document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    document.getElementById('submitAnswer').click();
  }
});

refreshCos();

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
  refreshCos();
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




//////////////////////////////////////
//       EQUIPPING COSMETICS        //
//////////////////////////////////////
function blueWall() {game.style.backgroundColor = "#759aff"; hiracoins -= 1;}
function pinkWall() {game.style.backgroundColor = " #ffc4ec"; hiracoins -= 1;}
function yellWall() {game.style.border = "#fff654 10px groove"; hiracoins -= 1;}
function blueBord() {game.style.border = "#759aff 10px groove"; hiracoins -= 1;}
function pinkBord() {game.style.border = "#ff6be4 10px groove"; hiracoins -= 1;}
function yellBord() {game.style.border = "#fff654 10px groove"; hiracoins -= 1;}
//////////////////////////////////////
//              SHOP                //
//////////////////////////////////////


function buyYellowW() {
  if (hiracoins < basicWallPrice) { alert("You dont have enough Hiracoins (You need 50!)")}
  if (hiracoins >= basicWallPrice) {
    hiracoins -= basicWallPrice;
    yellowWall = true;
    update();
    refreshCos();
  }
}  

function buyYellowB() {
  if (hiracoins < basicBordPrice) { alert("You dont have enough Hiracoins (You need 50!)")}
  if (hiracoins >= basicBordPrice) {
    hiracoins -= basicBordPrice;
    yellowBord = true;
    update();
    refreshCos();
  }
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
