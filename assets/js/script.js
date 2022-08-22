var questions = [
    {
        question: "What is a method?",
        options: ["a brand of soap", "Method Man, a famous rapper", "an action that can be performed on an object", "part of every JavaScript object"],
        answer: "an action that can be performed on an object"
    },
    {
        question: "What is a property?",
        options: ["a characteristic of an object", "the way a JavaScript object looks", "nine tenths of the law", "any tract of land"],
        answer: "a characteristic of an object"
    },
    {
        question: "What does JSON stand for?"
        options: ["Jason", "JavaScript Object Notation", "JavaScript On Notepad", "Just Say Oh No"],
        answer: "JavaScript Object Notation"
    },
    {
        question: "What is a callback function?"
        options: ["a party with an eighties or nineties theme", "a function someone else has written for you", "passing a function into another function", "reusing a function from another project"],
        answer: "passing a function into another function"
    },
    {
        question: "What is the DOM?"
        options: ["The Document Object Model", "a representation of what you see in the browser", "the thing JavaScript interacts with", "all of these are correct"]
        answer: "all of these are correct"
    }
];

// grabbing a bunch of DOM elements that need to be shown or hidden depending
// on user actions
var questionContainerEl = document.getElementById("question-wrapper");
var introContainerEl = document.getElementById("intro-wrapper");
var endingContainerEl = document.getElementById("ending-wrapper");
var scoreContainerEl = document.getElementById("score");
var initialsForm = document.getElementById("initials-form");
var leaderboardContainerEl = document.getElementById("leaderboard");
var highScoreButton = document.getElementById("high-scores");
var highScoreList = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var incorrectEl = document.getElementById("incorrect");