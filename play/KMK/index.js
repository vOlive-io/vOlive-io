

var characterSet = ["A duck", "A cow", "A sheep", "A frog", "A fart", "A pigeon", "Trucker", "Girl off the street", "Guy off the street", "Person off the street", "Lily thr frog queen", "A living marker", "2 BFDI", "British guy", "A fat cat sleeping on a mat"];;
var charactersSplatoon = ["Callie", "Marrie", "Agent 3", "Agent 4", "Agent 8", "Captain 3", "Craig Cuddlefish", "Smallfry", "Hugefry", "DJ Octavio", "The Great Zapfish", "O.R.C.A.", "Commander Tartar", "Pearl", "Pearl Drone", "Marina", "Acht", "Shiver", "Frye", "Big Man", "Frye\'s eels", "Master Mega", "Murch", "Spyke", "Mr. Coco", "Gnarly Eddy", "Harmony", "Shelldon", " Jel La Fleur", "Judd", "Lil Judd", "Mr. Grizz", "Staff", "(All Of) Deep Cut", "(All Of) Off The Hook", "(All Of) The Squid Sisters", "(All Of) The staff members", "A random Octarian"];;
document.getElementById("game").addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') { 
		const choice = event.target; 
		kmkChoice(choice);
	}
});
  //slot input
//  setOneSpot.innerHTML = setOne;
 // setTwoSpot.innerHTML = setTwo;
 // setThreeSpot.innerHTML = setThree;
var kissSetNum = 0;
var marrySetNum = 0;
var killSetNum = 0;
var kissSet = ["Kiss", "Hug"];
var marrySet = ["Marry", "Befrend"];
var killSet = ["Kill", "Forget"];
var setChar1;
var setChar2;
var setChar3;
function assignChars() {

	for(i = 1; i <= 3; i++) {
		const spot = ("char"+i);
		document.getElementById(spot).innerHTML = characterSet[Math.floor(Math.random() * characterSet.length)];;
		placePersets((spot+"buttons"), 0);
		
	}
	
}

function placePersets(spot, remove) {
  spot = document.getElementById(spot);
  spot.innerHTML = "";
  //Kiss
	if (remove != 1) {
		const kissButton = document.createElement("button");
		const kissButtonText = document.createTextNode(kissSet[kissSetNum]);
		kissButton.appendChild(kissButtonText);
		kissButton.id = "kissButton";
		spot.appendChild(kissButton);
	}
  //marry
	if (remove != 2) {
		const marryButton = document.createElement("button");
		const marryButtonText = document.createTextNode(marrySet[marrySetNum]);
		marryButton.appendChild(marryButtonText);
		marryButton.id = "marryButton";
		spot.appendChild(marryButton);
	}
  //Kill
	if (remove != 3) {
		const killButton = document.createElement("button");
		const killButtonText = document.createTextNode(killSet[killSetNum]);
		killButton.appendChild(killButtonText);
		killButton.id = "killButton";
		spot.appendChild(killButton);
	}
}

function kmkChoice(c) {
  if(c == "kissButton") {
	 for(i = 1; i <= 3; i++) {
		placePersets(("char"+i), 1);
	}
  }
  if(c == "marryButton") {
	  for(i = 1; i <= 3; i++) {
		placePersets(("char"+i), 2);
	}
  }
  if(c == "killButton") {
	  for(i = 1; i <= 3; i++) {
		placePersets(("char"+i), 3);
	}
  }
}
