const questions = [
    {
        question: "jaký zvíře je delší?",
        answers: [
            { Text: "žralok", correct: false},
            { Text: "20 km žížala", correct: true},
            { Text: "slon", correct : false},
            { Text: "velryba", correct: false},
        ]
    },
    {
        question: "co je nejmenší kontinent?",
        answers: [
            { Text: "asie", correct: false},
            { Text: "australie", correct: true},
            { Text: "arctic", correct : false},
            { text: "africa", correct: false},
        ]
    },
    {
        question: "co je nejmenší stat světa",
        answers: [
            { Text: "vatican City", correct: true},
            { Text: "Bhutan", correct: false },
            { Text: "Nepal", correct : false},
            { Text: "Shri lanka", correct: false},
        ]
    },{
        question: "",
        answers: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct : false},
            { Text: "", correct: false},
        ]
    },{
        question: "",
        answers: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct : false},
            { Text: "", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = question + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
     
}



startQuit();
