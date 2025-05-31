
let currentQuestion = 0;
let selectedAnswers = [];
let questions = [];
let results = {};

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data.categories.flatMap(cat => cat.questions.map(q => ({...q, category: cat.name})));
    results = Object.fromEntries(data.categories.map(cat => [cat.name, {count: 0, description: cat.description}]));
    showQuestion();
  });

function showQuestion() {
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }

  const question = questions[currentQuestion];
  document.getElementById('question-text').textContent = question.question;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  question.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.onclick = () => {
      document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedAnswers[currentQuestion] = question.trait;
      results[question.trait].count += 1;
    };
    optionsContainer.appendChild(btn);
  });
}

document.getElementById('next-btn').addEventListener('click', () => {
  if (selectedAnswers[currentQuestion]) {
    currentQuestion++;
    showQuestion();
  } else {
    alert("Please select an answer.");
  }
});

function showResults() {
  document.getElementById('quiz-container').innerHTML = "<h2>Your Personality Breakdown</h2>";
  Object.entries(results).forEach(([trait, data]) => {
    if (data.count > 0) {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${trait}</h3><p>${data.description}</p>`;
      document.getElementById('quiz-container').appendChild(div);
    }
  });
}
