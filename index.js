var readlineSync = require("readline-sync");

// input >> processing >> output
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + " to the Quiz❓ ");

var score = 0;
var correct = "Correct😎✔";
var wrong = "Wrong😒❌";


// Play Function
function qNa(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) { // branching
    console.log(correct)
    score = score + 1;

  } else {
    console.log(wrong);
  }

  console.log("Current Score: ", score);
  console.log("----------------");
}

// Array of objects
var questions = [{
  question: "Name the densest jungle in the world? ",
  answer: "amazon"
}, {
  question: "Name the National fruit of India? ",
  answer: "mango"
}, {
  question: "Name the National river of India? ",
  answer: "ganga"
}, {
  question: "Name the National Reptile of India? ",
  answer: "king cobra"
}, {
  question: "What is the capital of India? ",
  answer: "delhi"
}, {
  question: "Name the biggest continent in the world? ",
  answer: "asia"
}, {
  question: "Which colour symbolises peace? ",
  answer: "white"
}, {
  question: "Which colour symbolises power? ",
  answer: "black"
}, {
  question: "Sun rises in the...? ",
  answer: "east"
}, {
  question: "Name the largest planet of our Solar System? ",
  answer: "jupiter"
}];

//loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  qNa(currentQuestion.question, currentQuestion.answer);
}

console.log("Yippe🥳🎉 Your final Score is: " + score);
