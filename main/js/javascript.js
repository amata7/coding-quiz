var startBtn = document.getElementById("startBtn");
var rules = document.getElementById("rules");
var infoBox = document.getElementById("infoBox");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var results = document.getElementById("results");
var submit1 = document.getElementById("submit1");
var submit2 = document.getElementById("submit2");
var submit3 = document.getElementById("submit3");
var returnBtn = document.getElementById("returnBtn");

startBtn.onclick = () => {
  infoBox.classList.add("hidden");
  question1.classList.remove("hidden");
  question1.classList.add("block");
};

submit1.onclick = () => {
  question1.classList.remove("block");
  question1.classList.add("hidden");
  question2.classList.remove("hidden");
  question2.classList.add("block");
};

submit2.onclick = () => {
  question2.classList.remove("block");
  question2.classList.add("hidden");
  question3.classList.remove("hidden");
  question3.classList.add("block");
};

submit3.onclick = () => {
  question3.classList.remove("block");
  question3.classList.add("hidden");
  results.classList.remove("hidden");
  results.classList.add("block");
};

returnBtn.onclick = () => {
  results.classList.remove("block");
  results.classList.add("hidden");
  infoBox.classList.remove("hidden");
  infoBox.classList.add("block");
};
