////////////////////////////////
//          CHARGERS          //
////////////////////////////////
setInterval(autogain, 1)

////////////////////////////////
//            VARS            //
////////////////////////////////
//basic
var legacy = 0;
var lpsCounter = 0;

//shop
var clickerCost = 15;
var orbCost = 100;

//light auto
var baseClickerGain = 0.0002;;
var baseOrbGain = 0.002;
var baseFarmGain = 0.010;
var baseMineGain = 100;
var baseFactoryGain = 1;
var baseBankGain = 1;
var baseLabGain = 1;
var baseSageTowerGain = 1;
var basePrismGain = 1;

//medium auto
var curClickerGain = 0;
var curOrbGain = 0;
var curFarmGain = 0;
var curMineGain = 0;
var curFactoryGain = 0;
var curBankGain = 0;
var curLabGain = 0;
var curPrismGain = 0;

//heavy auto
var curClickerGainLps = 0;
var curOrbGainLps = 0;
var curFarmGainLps = 0;
var curMineGainLps = 0;
var curFactoryGainLps = 0;
var curBankGainLps = 0;
var curLabGainLps = 0;
var curPrismGainLps = 0;

//counts
var clickerCount = 0;
var orbCount = 0;
var farmCount = 0;
var mineCount = 0;
var factoryCount = 0;
var bankCount = 0;
var labCount = 0;
var sageTowerCount = 0;
var prismCount = 0;
var crysalizationBiosphereCount = 0;
var converterterCount = 0;
var summonerCount = 0;
var hatredCompressorCount = 0;
var universeCount = 0;
var empireCount = 0;

//numbers
const suffixes = [
  '',
  ' thousand',
  ' million',
  ' billion',
  ' trillion'
  ]
//upgrades

//skins

//achevments

//number stuff

//season stuff
////////////////////////////////
//           INSTAS           //
////////////////////////////////
const texts = ['Hello There!', 'Hacking in some points, or checking for bugs?', 'Hi Olive Here', 'Howdy Olive Here, remember not to cheat!'];;
text = texts[Math.floor(Math.random() * texts.length)];
console.log(text)

function updateLpsVars() {
  curClickerGainLps = curClickerGain * 500;
  curOrbGainLps = curOrbGain * 500;
}

function updateLps() {
  lpsCounter = curClickerGainLps + curOrbGainLps;
  lps.innerHTML = "LPS - " + lpsCounter;
}

function updateGains() {
  curClickerGain = clickerCount * baseClickerGain;
  curOrbGain = orbCount * baseOrbGain;
}

function updatePoints() {
if (legacy < 1000) {
    let roundLegacy = Math.round(legacy);
    circle.innerText = "😈 - " + roundLegacy;
  } else {
 let displayPoints = legacy;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (legacy >= limit) {
      displayPoints = (legacy / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
    circle.innerHTML = "😈 - " + displayPoints;
  }
}





////////////////////////////////
//          FUNCTIONS         //
////////////////////////////////
function gain() {
  legacy++;
    let displayPoints = legacy;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (legacy >= limit) {
      displayPoints = (legacy / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
    circle.innerHTML = "😈 - " + displayPoints;
}

function clickerBuy() {
 if (clickerCost < legacy) { }
  if (legacy >= clickerCost) {
    legacy -= clickerCost;
  //normalIns = normalIns + addnormalIns;
    clickerCount = clickerCount + 1;
    clickerCost = Math.round(clickerCost * 1.2);
   clickerNum.innerHTML = "Clickers - " + clickerCount;
   clickerPri.innerHTML = clickerCost;
}
}

function orbBuy() {
 if (orbCost < legacy) { }
  if (legacy >= orbCost) {
    legacy -= orbCost;
  //normalIns = normalIns + addnormalIns;
    orbCount = orbCount + 1;
    orbCost = Math.round(orbCost * 1.2);
   orbNum.innerHTML = "Orbs - " + orbCount;
   orbPri.innerHTML = orbCost;
}
}

////////////////////////////////
//         AUTO POINTS        //
////////////////////////////////
function autogain() { 
  if (clickerCount>0) { legacy = legacy + curClickerGain; }
  if (orbCount>0) { legacy = legacy + curOrbGain; }
  updateLpsVars() 
  updateLps() 
  updatePoints(); 
  updateGains();
}





/////////////////////////////////////
