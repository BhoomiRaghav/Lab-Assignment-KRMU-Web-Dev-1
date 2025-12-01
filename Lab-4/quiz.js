const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Who wrote the play Romeo and Juliet?", answer: "william shakespeare" },
    { question: "What is the largest planet in our solar system?", answer: "jupiter" },
    { question: "What is the chemical symbol for water?", answer: "h2o" },
    { question: "How many continents are there on Earth?", answer: "7" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);
        let cleanedAnswer = userAnswer.toLowerCase().trim();

        if (cleanedAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Your final score is: " + score + " out of " + quizQuestions.length);
}

runQuiz();

