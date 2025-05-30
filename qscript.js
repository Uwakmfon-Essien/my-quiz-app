const quizData = [
    {
        question: "Who is the current President of Nigeria?",
        a: "Muhammed Buhari",
        b: "Bola A. Tinubu",
        c: "Obi Cubana",
        d: "Peter Obi",
        correct: "b",
    },
    
    {
        question: "When did Nigeria gain independence?",
        a: "1997",
        b: "1981",
        c: "1953",
        d: "1960",
        correct: "d",
    },

    {
        question: "How many states are in the country Nigeria?",
        a: "36",
        b: "37",
        c: "35",
        d: "33",
        correct: "a",
    },

    {
        question: "Which of this is not a major ethnic group in Nigeria?",
        a: "Igbo",
        b: "Ijaw",
        c: "Hausa",
        d: "Yoruba",
        correct: "b",
    },

    {
        question: "What state is the most populated state in Nigeria?",
        a: "Abuja state",
        b: "Taraba state",
        c: "Lagos state",
        d: "Rivers state",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0 

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)

}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML =`
            <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
            
            <button onclick="location.reload()">Reload</button>`
        }
    }
})
