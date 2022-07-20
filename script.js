const startBtn = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex


const startingMinutes = 2;
let time = startingMinutes * 60;


const countDownEl = document.getElementById('countdown')



function updateCoutdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

}


const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')

startBtn.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})





function startGame(){
    console.log('Started')
    setInterval(updateCoutdown, 1000);
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
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

function resetState(){
    
    clearStatusClass(document.body)
    nextButton.classList.add('hide')    
        while (  answerButtonsElement.firstChild){
            answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
        }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct 
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else 
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')

    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



    function finishedGame(){
        if ( countDownEl.innerHTML == "00:00"){
            questionContainerElement.classList.add('hide')
        } 
    }
    finishedGame()

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

    
