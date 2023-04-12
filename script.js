const questions = [
    // Fügen Sie hier die Fragen (1-40) ein, die wir zuvor erstellt haben
    "Frage 1",
    "Frage 2",
    "Frage 3",
    // ...
    "Frage 39",
    "Frage 40",
];

const questionElement = document.getElementById("question");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    questionElement.textContent = randomQuestion;
});
