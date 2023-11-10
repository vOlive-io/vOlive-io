var quizone = {
  {"あ", "a"},
  {"い", "i"},
  {"う", "e"},
  {"え", "e"},
  {"お", "o"}
};

function new() {
  var randomIndex = Math.floor(Math.random() * quizone.length);
  var question = quizone[randomIndex][0];
  document.getElementById("spot").innerHTML = question;
}
