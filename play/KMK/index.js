

var characterSet = ["A duck", "A cow", "A sheep", "A frog", "A fart", "A pigeon", "Trucker", "Girl off the street", "Guy off the street", "Person off the street", "Lily thr frog queen", "A living marker", "2 BFDI", "British guy", "A fat cat sleeping on a mat"];;
var characters-splatoon = ["Callie", "Marrie", "Agent 3", "Agent 4", "Agent 8", "Captain 3", "Craig Cuddlefish", "Smallfry", "Hugefry", "DJ Octavio", "The Great Zapfish", "O.R.C.A.", "Commander Tartar", "Pearl", "Pearl Drone", "Marina", "Acht", "Shiver", "Frye", "Big Man", "Frye\'s eels", "Master Mega", "Murch", "Spyke", "Mr. Coco", "Gnarly Eddy", "Harmony", "Shelldon", " Jel La Fleur", "Judd", "Lil Judd", "Mr. Grizz", "Staff", "(All Of) Deep Cut", "(All Of) Off The Hook", "(All Of) The Squid Sisters", "(All Of) The staff members", "A random Octarian"];;

  //slot input
//  setOneSpot.innerHTML = setOne;
 // setTwoSpot.innerHTML = setTwo;
 // setThreeSpot.innerHTML = setThree;
var kissSetNum = 0;
var marySetNum = 0;
var killSetNum = 0;
var kissSet = ["Kiss", "Hug"];
var marySet = ["Mary", "Befrend"];
var killSet = ["Kill", "Forget"];
function assignChars() {
  for(i = 1; i <= 3; i++) {
    placePersets(("char"+i));
  }
}
function placePersets(mainSpot) {
  document.getElementById(mainSpot).innerHTML = characterSet[Math.floor(Math.random() * characterSet.length)];
  const spot = mainSpot+"buttons";
  //Kiss
  const kissButton = document.createElement("button");
  const kissButtonText = document.createTextNode(kissSet[kissSetNum]);
  kissButton.appendChild(kissButtonText);
  kissButton.id = "kissButton";
  spot.appendChild(kissButton);
  //Mary
  const maryButton = document.createElement("button");
  const maryButtonText = document.createTextNode(marySet[marySetNum]);
  maryButton.appendChild(maryButtonText);
  maryButton.id = "maryButton";
  spot.appendChild(kissButton);
  //Kill
  const killButton = document.createElement("button");
  const killButtonText = document.createTextNode(killSet[killSetNum]);
  killButton.appendChild(killButtonText);
  killButton.id = "killButton";
  spot.appendChild(killButton);

}



function kissSet() {
    document.getElementById("kissSetOneButton").style.display = "none";
    document.getElementById("kissSetTwoButton").style.display = "none";
    document.getElementById("kissSetThreeButton").style.display = "none";
  alert("Kissed")
}
function marySet() {
    document.getElementById("marySetOneButton").style.display = "none";
    document.getElementById("marySetTwoButton").style.display = "none";
    document.getElementById("marySetThreeButton").style.display = "none";
  alert("Married")
}
function killSet() {
    document.getElementById("killSetOneButton").style.display = "none";
    document.getElementById("killSetTwoButton").style.display = "none";
    document.getElementById("killSetThreeButton").style.display = "none";
  alert("Killed")
}


