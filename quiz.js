
const questions = [
  {
    question: "When was Tagger founded?",
    answers: {
      a: "2011",
      b: "2015",
      c: "2007",
      d: "2019"
    },
    correctAnswer: "c"
  },
  {
    question: "How many different offices does Tagger have?",
    answers: {
      a: "4",
      b: "7",
      c: "20",
      d: "13"
    },
    correctAnswer: "d"
  },
  {
    question: "Who is the founder?",
    answers: {
      a: "Dave Dickman",
      b: "Pete Kennedy",
      c: "Sami Joseph",
      d: "Kate Danielson"
    },
    correctAnswer: "b"
  },
  {
    question: "How many influencers are on the platform",
    answers: {
      a: "3,000,000",
      b: "1,000,000",
      c: "6,000,000",
      d: "8,000,000"
    },
    correctAnswer: "c"
  }
  }
];
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz(){
  const output=[];
  questions.forEach((currentQ, qNum) => {
    const answers = [];
    for(letter in curretQ.answers){
      answers.push(
         `<label>
           <input type="radio" name="question${qNum}" value="${letter}">
           ${letter} :
           ${currentQ.answers[letter]}
         </label>`
       );
    }
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
  }
);
  quizContainer.innerHTML = output.join('');
}


function showResults(){
   const answerContainers = quizContainer.querySelectorAll('.answers');
   let numCorrect = 0;
   myQuestions.forEach( (currentQ, qNum) => {
     const answerContainer = answerContainers[qNum];
    const selector = `input[name=question${qNum}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if(userAnswer === currentQ.correctAnswer){
      numCorrect++;
      answerContainers[qNum].style.color = 'lightgreen';
    }
    else{
      answerContainers[qNum].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}


}

buildQuiz();
submitButton.addEventListener('click', showResults);
