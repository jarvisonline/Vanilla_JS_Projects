const questions = [
  {
    question: "What is the capital of India?",
    answers: [
      { text: "New Delhi", correct: true },
      { text: "Mumbai", correct: false },
      { text: "Kolkata", correct: false },
      { text: "Chennai", correct: false },
    ],
  },
  {
    question: "What is the capital of USA?",
    answers: [
      { text: "Washington D.C", correct: true },
      { text: "New York", correct: false },
      { text: "Los Angeles", correct: false },
      { text: "Chicago", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "What is the capital of Germany?",
    answers: [
      { text: "Berlin", correct: true },
      { text: "Paris", correct: false },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "What is the capital of Italy?",
    answers: [
      { text: "Rome", correct: true },
      { text: "Paris", correct: false },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
/* document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}); */

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score}out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again?";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function disableRightClickAndShowMessage() {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    const messageElement = document.getElementById("rightClickMessage");
    messageElement.style.display = "inline";
    clearTimeout(messageElement.timeout);
    messageElement.timeout = setTimeout(() => {
      messageElement.style.display = "none";
    }, 2000);
  });
}

disableRightClickAndShowMessage();

startQuiz();
