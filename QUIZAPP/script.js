const questions= [
    {
         question:  "Which is the largest animal  in the world?",
        answers: 
        [
            {text:"Shark", correct:false},
            {text:"Blue Whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
        ]
    
    },
    {
        question:  "Which is smallest continent  in the world?",
       answers: 
       [
           {text:"Africa", correct:false},
           {text:"Australia", correct:true},
           {text:"Asia", correct:false},
           {text:"South America", correct:false},
       ]
   
   },
   
{
    question:  "Which is the countryin the world?",
   answers: 
   [
       {text:"Vatician", correct:true},
       {text:"Bhutan", correct:false},
       {text:"Nepal", correct:false},
       {text:"Ghana", correct:false},
   ]

},
{
    question:  "Which is the largest desert  in the world?",
   answers: 
   [
       {text:"Kalahari", correct:false},
       {text:"Sahara", correct:true},
       {text:"Gobi", correct:false},
       {text:"Antarctica", correct:false},
   ]

},
];

const questionElement = document.getElementById("question");
const answerButton  =  document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let  currentQuestionIndex = 0;
let score = 0;



function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
startQuiz();


 