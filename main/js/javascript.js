var startBtn = document.getElementById("startBtn");
var rules = document.getElementById("rules");
var infoBox = document.getElementById("infoBox");
var question1 = document.getElementById("question1");
var results = document.getElementById("results");
var submit1 = document.getElementById("submit1");
var submit2 = document.getElementById("submit2");
var submit3 = document.getElementById("submit3");
var returnBtn = document.getElementById("returnBtn");
const quizContainer = document.getElementById("quiz");

startBtn.onclick = () => {
  infoBox.classList.add("hidden");
  buildQuiz();
};

returnBtn.onclick = () => {
  results.classList.remove("block");
  results.classList.add("hidden");
  infoBox.classList.remove("hidden");
  infoBox.classList.add("block");
};

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label class="block">
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question text-lg font-medium"> ${
        currentQuestion.question
      } </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}
