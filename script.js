

//variables linked to the ids
const startBtn = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const highScoreBtn = document.getElementById("showScoreBtn")
let shuffledQuestions, QIndex;
const scoreCard =  document.getElementById("scoreCard")
const button = document.createElement('button')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')




//stating variables

let runningTimer;
let timerEl;
let score = 0;
let username = "";
let questionNumber = "";
let endScore;
const maxScore = 9;
let highScores = JSON.parse(localStorage.getItem("highscores")) || [];




// adding event listeners to start the game
startBtn.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    QIndex++
    setNextQuestion()
})



const countDownEl = document.getElementById('countdown')
// highScoreBtn.addEventListener("click")

//timer set to the left of the game
function startClock() {
    runningTimer = setTimeout(startClock,1000);
    countdown.innerText="Time Elapsed:" + runningTimer;

   //time limit 
if(runningTimer === 90){
    console.log("time limit reached")
    
    countdown.innerText = "Game Over"
    gameOver()
}
}






//the function that starts the game 

function startGame(){
    console.log('Started')

    // setInterval(updateCoutdown, 1000);
    //add the hide class to hide the start btn
    startBtn.classList.add('hide')
    //calls the questions list and sorts them with a negative .5 value
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    QIndex = 0
    //removes the hide class so the question is visible
    questionContainer.classList.remove('hide')
    startClock()
    setNextQuestion()

}
//function to have the next question start
function setNextQuestion(){
    resetClass()
    revealQuestion(shuffledQuestions[QIndex])
}
// function that shows the question and the proper 
function revealQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
//function to reset the page for the next question
function resetClass(){
    
    clearRightWrongEl(document.body)
    nextButton.classList.add('hide')    
        while (  answerButtonsElement.firstChild){
            answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
        }
}

function selectAnswer(e){
    const selectedButton = e.target; 
    const correct = selectedButton.dataset.correct 
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > QIndex + 1) {
    nextButton.classList.remove('hide')
    } else 
    startBtn.innerText = 'Restart'
    
    // startBtn.classList.remove('hide') no need for it better without

    
}
//function with if then about wrong and correct answers
function setStatusClass(element, correct){
    clearRightWrongEl(element)
    if (correct){
        element.classList.add('correct')

    } else {
        element.classList.add('wrong')
    }
}
//function removing the wrong and right elements
function clearRightWrongEl (element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


function clearQuestion(){
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function gameOver(){
    clearInterval(runningTimer);
    countdown.innerHTML = "finished";
    clearQuestion();
    // startButton.innerText = "Restart";
    startBtn.classList.remove("hide")

}
//arrays of questions used, subject to change
const questions = [
    {
    question: 'True or False: DOM is built into a Javascript language',
    answers: [
        { text: 'True', correct: true},
        { text: 'False', correct: false}
    ]
}, 
{
    question: 'Commonly used data type Do NOT include:',
    answers: [
        { text: 'Numbers', correct: false},
        { text: 'Booleans', correct: false},
        { text: 'Strings', correct: false},
        { text: 'Alerts', correct: true},
    ]
}, 
{
    question: 'Arrays in Javascript can be used to store:',
    answers: [
        { text: 'Strings', correct: false},
        { text: 'Booleans', correct: false},
        { text: 'Numbers', correct: false},
        { text: 'All of the Above', correct: true},
    ]
},  {
    question: 'what is 2+2?',
    answers: [
        { text: '4', correct: true},
        { text: '3', correct: false},
        { text: 'fish', correct: false},
        { text: '5', correct: false},
        
    ]
},  {
    question: 'What syntax would call a Function?',
    answers: [
        { text: 'var Function', correct: false},
        { text: 'call Function', correct: false},
        { text: 'Function()', correct: true},
        { text: 'Function', correct: false},
    ]
}

] 

    
