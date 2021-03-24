var startBtn = document.querySelector('.startBtn button');
var infoBox = document.querySelector('.infoBox');
var quizBox = document.querySelector('.quizBox');
var exitBtn = document.querySelector('.buttons .exitBtn');
var continueBtn = document.querySelector('.buttons .continueBtn');
var nextBtn = quizBox.querySelector('.nextBtn');
var timer = document.querySelector('.remainingTime');

var secondsLeft=21;
startBtn.onclick = ()=>{
    infoBox.classList.add('activeInfo');
}

exitBtn.onclick = ()=>{
    infoBox.classList.remove('activeInfo');
}

continueBtn.onclick = ()=>{
    infoBox.classList.remove('activeInfo');
    quizBox.classList.add('activeQuiz');
    showQuestions(0);
    var timeLeft= setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timeLeft);
        }
    }, 1000);
}

var queNum = 0;

nextBtn.onclick = ()=>{
        queNum++;
        
}



function showQuestions() {
    var queText = document.querySelector('.queText');
    var queTag = questions[0].question;
    var option1 = document.querySelector('.option1');
    var option2 = document.querySelector('.option2');
    var option3 = document.querySelector('.option3');
    var option4 = document.querySelector('.option4');
    

    queText.innerHTML = queTag;

    option1.innerHTML = questions[0].option[0];
    option2.innerHTML = questions[0].option[1];
    option3.innerHTML = questions[0].option[2];
    option4.innerHTML = questions[0].option[3];

    nextBtn.onclick = ()=>{
        queText.innerHTML = questions[1].question;

        option1.innerHTML = questions[1].option[0];
        option2.innerHTML = questions[1].option[1];
        option3.innerHTML = questions[1].option[2];
        option4.innerHTML = questions[1].option[3];

        nextBtn.onclick = ()=>{
            queText.innerHTML = questions[2].question;
    
            option1.innerHTML = questions[2].option[0];
            option2.innerHTML = questions[2].option[1];
            option3.innerHTML = questions[2].option[2];
            option4.innerHTML = questions[2].option[3];

            nextBtn.onclick = ()=>{
                showQuestions();
            }
        }
    }
}

console.log(nextBtn);
console.log(queNum);