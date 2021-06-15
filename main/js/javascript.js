const startBtn = document.getElementById("startBtn");
const infoBox = document.getElementById("infoBox");
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

startBtn.onclick = () => {
  infoBox.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  submitButton.classList.remove("hidden");
  buildQuiz();
};

function buildQuiz() {
  // start timer which will determine quiz score
  var count = 60;
  var interval = setInterval(function () {
    document.getElementById("count").innerHTML = count;
    count--;
    if (count === -2) {
      clearInterval(interval);
      document.getElementById("count").innerHTML = "Out of time!";
      // or...
    }
  }, 1000);

  // variable to store the HTML output
  const output = [];
  output.push(`<p class="text-3xl mb-2 underline">Coding Quiz</p>
  <div class="mt-4 mb-2 font-medium text-lg">Time Remaining: <span id="count">60</span></div>`);

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
      `<div class="question text-lg font-medium pb-1 pt-1"> ${
        currentQuestion.question
      } </div>
        <div class="answers p-1"> ${answers.join("")} </div>`
    );
  });
  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  submitButton.classList.add("hidden");
  resultsContainer.classList.remove("hidden");
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let numIncorrect = 0;

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // color the answers green
      answerContainers[questionNumber].classList.remove("bg-red-200");
      answerContainers[questionNumber].classList.add("bg-green-200");
      answerContainers[questionNumber].classList.add("rounded-md");
    }
    // if answer is wrong or blank
    else {
      // add to the number of correct answers
      numIncorrect++;

      // color the answers red
      answerContainers[questionNumber].classList.remove("bg-green-200");
      answerContainers[questionNumber].classList.add("bg-red-200");
      answerContainers[questionNumber].classList.add("rounded-md");
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `<p>Based on your time and correct answers, your score is : --score--</p><br>
  <div>${numIncorrect} incorrect out of ${questions.length}</div>`;
}

submitButton.addEventListener("click", showResults);
