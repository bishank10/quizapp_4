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
var initial;
var score;


// var paragraphEl = document.getElementById("question");
// var option1El = document.getElementById("a");
// var option2El = document.getElementById("b");
// var question = document.createElement("h3");
var quizEl = document.getElementById("quiz");
var answersEl = document.getElementById("answers");
var timerEl = document.getElementById("timer");
var feedbackEl = document.getElementById("feedback");
var initialEl = document.getElementById("endGame");



// document.getElementsById("button").addEventListener("click", display);
function startGame() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    getQuestions()

    //  for(i =0; i<1; i++) {
    // question.innerText= quiz[i].question;
    // quizEl.appendChild(question.innerText);
    // document.createElement("button").innerText= quiz[i].a;
    // document.createElement("button").innerText= quiz[i].b;
    // quizEl.append(qna);





    //  }
}
function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endGame()
    }
}

function getQuestions() {
    var currentQuestion = quiz[currentQuestionIndex];
    quizEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class","button");
        choiceBtn.setAttribute("value",choice);
        choiceBtn.textContent = choice;
        choiceBtn.onclick = questionClick;
        answersEl.appendChild(choiceBtn);

    })

}
function questionClick(){
    if (this.value !== quiz[currentQuestionIndex].answer){
        time = time-15;
        if ( time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        // play incorrect sound effect
        feedbackEl.textContent = "Incorrect";
    } else {
        // play correct sound effect
        feedbackEl.textContent = "Great Job";
        score++
    }
    currentQuestionIndex++;
    if ( currentQuestionIndex === quiz.length) {
        endGame();
    } else {
        getQuestions();
    }
}

// function endGame(){
//     inputLabel = initialEl.createElement("input");
//     inputLabel.setAttribute("placeholder","initials please");
//      initialEl.appendChild(inputLabel); 
//      initial = inputLabel.value;
//     initialValue = 



// WHEN the game is over
// THEN I can save my initials and score


// PCODE

// Create start button
// Add listener (or onClick or .click) on button
// Button triggers startQuiz function
// StatQuiz function starts timer and loads questions
// ^^^ also need timer function and question function

// Timer function should remove time ever 1000ms
// When time reaches 0 trigger endGame function 

// question function 
// declare current question 
// inject question on page
// create buttons for each choice
// on click on button check to see if correct

// Question click function

document.getElementById("button").addEventListener("click", startGame);