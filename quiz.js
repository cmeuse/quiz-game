function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    let percent = (quiz.score/quiz.questions.length) * 100;
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.percent + "% </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question( "When was Tagger founded?", ["2011", "2015","2007", "2019"], "2015"),
    new Question("How many different offices does Tagger have?", ["4", "7", "20", "13"], "13"),
    new Question("Who is the founder of Tagger?", ["Dave Dickman", "Pete Kennedy","Sami Joseph", "Kate Danielson"], "Pete Kennedy"),
    new Question("Where is the Tagger headquarters?", ["Santa Monica", "New York City", "Singapore", "London"], "Santa Monica"),
    new Question("How many influencers are on the platform?", ["3,000,000", "1,000,000", "6,000,000", "8,000,000"], "6,000,000")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();

  

