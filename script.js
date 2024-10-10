// Quiz questions and answers
const questions = [
    {
      question: "O que é o 5Rs da Sustentabilidade?",
      answers: ["Redução", "Reutilização", "Reciclagem", "Todos os acima"],
      correctAnswer: "Todos os acima"
    },
    {
      question: "Qual é o objetivo principal do TI-Verde?",
      answers: ["Reduzir o consumo de energia", "Aumentar a eficiência dos processos", "Diminuir o impacto ambiental", "Todos os acima"],
      correctAnswer: "Diminuir o impacto ambiental"
    }
    // Add more questions here
  ];
  
  // Function to generate the quiz
  function generateQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const questionElements = [];
  
    for (let i = 0; i < questions.length; i++) {
      const questionElement = document.createElement("div");
      questionElement.innerHTML = `
        <h2>${questions[i].question}</h2>
        <ul>
          ${questions[i].answers.map((answer, index) => `
            <li>
              <input type="radio" id="answer-${index}" name="answer-${i}">
              <label for="answer-${index}">${answer}</label>
            </li>
          `).join("")}
        </ul>
      `;
      quizContainer.appendChild(questionElement);
      questionElements.push(questionElement);
    }
  
    // Add event listener to submit button
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", checkAnswers);
  }
  
  // Function to check answers
  // Function to check answers
// Function to check answers
// Function to generate the quiz
function generateQuiz() {
    const quizContainer = document.getElementById("quiz-container");

    for (let i = 0; i < questions.length; i++) {
        const questionElement = document.createElement("div");
        const answersHtml = questions[i].answers.map((answer, index) => {
            const uniqueId = `answer-${i}-${index}`;  // Unique ID for each radio button
            return `
                <li>
                    <input type="radio" id="${uniqueId}" name="answer-${i}">
                    <label for="${uniqueId}">${answer}</label>
                </li>
            `;
        }).join("");

        questionElement.innerHTML = `
            <h2>${questions[i].question}</h2>
            <ul>${answersHtml}</ul>
        `;
        quizContainer.appendChild(questionElement);
    }

    // Add event listener to submit button
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", checkAnswers);
}

// Function to check answers
function checkAnswers() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const answerElements = document.getElementsByName(`answer-${i}`);
        for (let j = 0; j < answerElements.length; j++) {
            if (answerElements[j].checked) {
                // Get the label associated with the checked radio button
                const selectedLabel = document.querySelector(`label[for="${answerElements[j].id}"]`).textContent;
                if (selectedLabel === questions[i].correctAnswer) {
                    score++;
                }
                break; // Stop checking other options once the correct answer is found
            }
        }
    }

    alert(`Você acertou ${score} de ${questions.length} perguntas!`);
}

  
  // Generate the quiz
  generateQuiz();