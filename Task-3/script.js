const data = [
    {
        question: "Who is making the web standards?",
        a: "Google",
        b: "Microsoft",
        c: "Mozilla",
        d: "The world Wide Web consortium",
        correct: "d",
    },

    {
        question: "Which of the following is NOT a programming language?",
        a: "Python",
        b: "JavaScript",
        c: "HTML",
        d: "SQL",
        correct: "c",
    },

    {
        question: "What is the main function of an operating system?",
        a: "To manage hardware and software resources",
        b: "To compile programs",
        c: "To connect to the internet",
        d: "To create databases",
        correct: "a",
    },

    {
        question: "Which type of storage is volatile?",
        a: "Hard Disk Drive (HDD)",
        b: "Read-Only Memory (ROM)",
        c: "Random Access Memory (RAM)",
        d: "Solid-State Drive (SSD)",
        correct: "c",
    },

    {
        question: "Which of the following is used to style a web page?",
        a: "HTML",
        b: "CSS",
        c: "SQL",
        d: "PHP",
        correct: "b",
    },
]


const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")

const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = data[currentQuiz]

    questionEl.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach((answerEL) =>(
        answerEL.checked =false
    ))
}

function getSelected(){
    let answer

    answerEls.forEach((answerEL) =>{
        if(answerEL.checked){
            answer = answerEL.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () =>{
    const answer = getSelected()

    if(answer){
        if(answer == data[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < data.length){
            loadQuiz()
        }
        else {
            
            let resultsHTML = `<h2>You Answered ${score}/${data.length} Questions Correctly</h2>`;
            
            data.forEach((quizItem, index) => {
                resultsHTML += `
                    <div class="quiz-result">
                        <h3>Q${index + 1}: ${quizItem.question}</h3>
                        <p><strong>Correct Answer:</strong> ${quizItem[quizItem.correct]}</p>
                    </div>
                `;
            });
        
            resultsHTML += `
                <button onclick="location.reload()">Do it Again</button>
            `;
        
            quiz.innerHTML = resultsHTML;
        }
        /*else{
            quiz.innerHTML = `
            <h2>You Answered ${score}/${data.length} Questions Correctly</h2>

            <button onclick="location.reload()">Do it Again</button>

            `
        }*/
    }
})
