var startBtn = document.getElementById("startBtn");
var rules = document.getElementById("rules");
var infoBox = document.getElementById("infoBox");
var question1 = document.getElementById("question1");

startBtn.onclick = () => {
  infoBox.classList.add("hidden");
  question1.classList.remove("hidden");
  question1.classList.add("block");
};
