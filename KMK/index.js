
window.addEventListener('load', chooseSet);


function chooseSet() {
  const characters = ['A duck', 'A cow', 'A sheep', 'A frog', 'A fart', 'A pigeon'];;
  setOne = characters[Math.floor(Math.random() * characters.length)];
  setTwo = characters[Math.floor(Math.random() * characters.length)];
  setThree = characters[Math.floor(Math.random() * characters.length)];
  //logs
  console.log(setOne)
  console.log(setTwo)
  console.log(setThree)
  //slot input
  setOneSpot.innerHTML = setOne;
  setTwoSpot.innerHTML = setTwo;
  setThreeSpot.innerHTML = setThree;
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
  alert("marred")
}
function killSet() {
    document.getElementById("killSetOneButton").style.display = "none";
    document.getElementById("killSetTwoButton").style.display = "none";
    document.getElementById("killSetThreeButton").style.display = "none";
  alert("killed")
}


