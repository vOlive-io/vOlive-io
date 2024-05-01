//slay

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
  slotOne.innerHTML = setOne;
  slotTwo.innerHTML = setTwo;
  slotThree.innerHTML = setThree;
}
