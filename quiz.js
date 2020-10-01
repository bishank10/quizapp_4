var quiz = [
    { 
        question: "question: What is your name?", 
        choices: ["a : Bishank", "b : Skye", "c : Gary", "d : Leo"], 
        answer: "a : Bishank"
    }, 
    { 
        question: "question: What do you drive?", 
        choices: ["a : Honda", "b : toyota", "c : kia", "d : bmw"], 
        answer: "c : kia"
    },
    {
        question: "question: Where do you live?", 
        choices: ["a : denver ", "b : abq", "c : ny", "d : cali"],
        answer: "a : denver"
    }
];
var currentQuestionIndex = 0;
var time = quiz.length * 15;
var timerId;
var initials;
var score = 0;


// var paragraphEl = document.getElementById("question");
// var option1El = document.getElementById("a");
// var option2El = document.getElementById("b");
// var question = document.createElement("h3");
var quizEl = document.getElementById("quiz");
var answersEl = document.getElementById("answers");
var timerEl = document.getElementById("timer");
var feedbackEl = document.getElementById("feedback");
var initialEl = document.getElementById("endGame");
var reStartEl = document.getElementById("restart");




// document.getElementsById("button").addEventListener("click", display);
function startGame() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    getQuestions();

}

// the function here starts the timer
function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        time === 0;
    }
}
// the function here presents the user with series of question
function getQuestions() {
    var currentQuestion = quiz[currentQuestionIndex];
    quizEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice){
        choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class","button");
        choiceBtn.setAttribute("value",choice);
        choiceBtn.textContent = choice;
        choiceBtn.onclick = questionClick;
        answersEl.appendChild(choiceBtn);

    })

}

// the function here decides the action when the answer is selected
function questionClick() {
    if (this.value !== quiz[currentQuestionIndex].answer){
            time = time-15; 
            if ( time < 0) {
            // time = 0;
            endGame();

        }
        timerEl.textContent = time;
        // play incorrect sound effect
        feedbackEl.textContent = "Incorrect";
    } else {
        // play correct sound effect
        feedbackEl.textContent = "Great Job";
        score++;
    }
    currentQuestionIndex++;

    if ( currentQuestionIndex === quiz.length) {
        endGame();
    } else {
        getQuestions();
    }
}

// this function is executed when the game is over
function endGame () {
    // time = quiz.length * 15;
    console.log ("game over")
    alert ("gameOver");
    inputLabel = document.createElement ("input");
    inputLabel.setAttribute ("placeholder","initials please");
    initialEl.appendChild (inputLabel); 
    inputLabel.text = initials;
    saveBtn = document.createElement ("button");
    saveBtn.textContent = "save";
    initialEl.appendChild (saveBtn);
    localStorage.setItem ("initial", initials);
    localStorage.setItem ("score", score);
    score = localStorage.getItem ("score");
    saveBtn.addEventListener ("click", function() {
    if (initials!== null) {
        alert("your score is : " + score); 
        };
    
    });

    reStart = document.createElement ("button");
    reStart.textContent = "restart";
    reStartEl.appendChild (reStart);


   
}



// Question click function

document.getElementById("button").addEventListener("click", startGame);
document.getElementById("restart").addEventListener("click", startGame);