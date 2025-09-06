

var characterSet = ["A duck", "A cow", "A sheep", "A frog", "A fart", "A pigeon", "Trucker", "Girl off the street", "Guy off the street", "Person off the street", "A living marker", "British guy", "A fat cat sleeping on a mat"];;
var charactersSplatoon = ["Callie", "Marrie", "Agent 3", "Agent 4", "Agent 8", "Captain 3", "Craig Cuddlefish", "Smallfry", "Hugefry", "DJ Octavio", "The Great Zapfish", "O.R.C.A.", "Commander Tartar", "Pearl", "Pearl Drone", "Marina", "Acht", "Shiver", "Frye", "Big Man", "Frye\'s eels", "Master Mega", "Murch", "Spyke", "Mr. Coco", "Gnarly Eddy", "Harmony", "Shelldon", " Jel La Fleur", "Judd", "Lil Judd", "Mr. Grizz", "Staff", "(All Of) Deep Cut", "(All Of) Off The Hook", "(All Of) The Squid Sisters", "(All Of) The staff members", "A random Octarian"];;
characterSet = charactersSplatoon;
  //slot input
//  setOneSpot.innerHTML = setOne;
 // setTwoSpot.innerHTML = setTwo;
 // setThreeSpot.innerHTML = setThree;
var kissTrue = true;
var marryTrue = true;
var killTrue = true;

var kissSetNum = 2;
var marrySetNum = 2;
var killSetNum = 2;
var slider = document.getElementById("intensitySlider");


slider.oninput = function() {
	kissSetNum = this.value;
	marrySetNum = this.value;
	killSetNum = this.value;
}
var kissSet = ["Acknowledge Existence", "Hug", "Kiss", "Make out with", "Have kids with"];
var marrySet = [ "Befriend", "Date", "Marry", "Honeymoon", "Grow old with"];
var killSet = ["Beat-up", "Kidnap", "Kill", "Slow Kill", "Murder all family"];
var setChar1;
var setChar2;
var setChar3;
function assignChars() {
	kissTrue = true;
	marryTrue = true;
	killTrue = true;
	for(i = 1; i <= 3; i++) {
		const spot = ("char"+i);
		document.getElementById(spot).innerHTML = characterSet[Math.floor(Math.random() * characterSet.length)];;
		placePersets((spot+"buttons"));
		
	}
	
}

function placePersets(spot) {
  spot = document.getElementById(spot);
  spot.innerHTML = "";
  //Kiss
	if (kissTrue) {
		const kissButton = document.createElement("button");
		const kissButtonText = document.createTextNode(kissSet[kissSetNum]);
		kissButton.appendChild(kissButtonText);
		kissButton.id = "kissButton";
		kissButton.classList.add(spot.id);
		spot.appendChild(kissButton);
	}
  //marry
	if (marryTrue) {
		const marryButton = document.createElement("button");
		const marryButtonText = document.createTextNode(marrySet[marrySetNum]);
		marryButton.appendChild(marryButtonText);
		marryButton.id = "marryButton";
		marryButton.classList.add(spot.id);
		spot.appendChild(marryButton);
	}
  //Kill
	if (killTrue) {
		const killButton = document.createElement("button");
		const killButtonText = document.createTextNode(killSet[killSetNum]);
		killButton.appendChild(killButtonText);
		killButton.id = "killButton";
		killButton.classList.add(spot.id);
		spot.appendChild(killButton);
	}
}

function kmkChoice(c) {
  if(c.id == "kissButton") {
	 for(i = 1; i <= 3; i++) {
		 kissTrue = false;
		 placePersets(("char"+i+"buttons"));
	}
  }
  if(c.id == "marryButton") {
	  for(i = 1; i <= 3; i++) {
		  marryTrue = false;
		  placePersets(("char"+i+"buttons"));
	}
  }
  if(c.id == "killButton") {
	  for(i = 1; i <= 3; i++) {
		  killTrue = false;
		  placePersets(("char"+i+"buttons"));
	}
	
  }
	if(c.classList.contains("char1buttons")) {document.getElementById("char1container").style.backgroundColor = "red";}
	if(c.classList.contains("char2buttons")) {document.getElementById("char2container").style.backgroundColor = "red";}
	if(c.classList.contains("char3buttons")) {document.getElementById("char3container").style.backgroundColor = "red";}
}
assignChars();
document.getElementById("game").addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') { 
		const choice = event.target; 
		kmkChoice(choice);
	}
});
