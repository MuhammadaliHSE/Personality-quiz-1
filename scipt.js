document.addEventListener('DOMContentLoaded', function() {
    const introScreen = document.getElementById('intro-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const retakeBtn = document.getElementById('retake-btn');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('progress-bar');
    const resultContent = document.getElementById('result-content');
    
    let currentQuestionIndex = 0;
    let scores = {
        Emotional: 0,
        Resilient: 0,
        Decisive: 0,
        Analytical: 0,
        Creative: 0
    };
    let questions = [];
    
    // Fetch questions from JSON file
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
        })
        .catch(error => console.error('Error loading questions:', error));
    
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', showNextQuestion);
    retakeBtn.addEventListener('click', retakeQuiz);
    
    function startQuiz() {
        introScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        showQuestion();
    }
    
    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResults();
            return;
        }
        
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.text;
        
        // Update progress bar
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Add new options
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = option.text;
            button.addEventListener('click', () => selectOption(button, option.category));
            optionsContainer.appendChild(button);
        });
        
        // Hide next button until an option is selected
        nextBtn.classList.add('hidden');
    }
    
    function selectOption(button, category) {
        // Remove selected class from all options
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        button.classList.add('selected');
        
        // Store the selected category
        button.dataset.selectedCategory = category;
        
        // Show next button
        nextBtn.classList.remove('hidden');
    }
    
    function showNextQuestion() {
        // Get selected option
        const selectedOption = document.querySelector('.option-btn.selected');
        
        if (selectedOption) {
            // Update score
            const category = selectedOption.dataset.selectedCategory;
            scores[category]++;
            
            // Move to next question
            currentQuestionIndex++;
            showQuestion();
        }
    }
    
    function showResults() {
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        
        // Find dominant personality type
        let maxScore = 0;
        let dominantType = '';
        
        for (const [type, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                dominantType = type;
            }
        }
        
        // Display result based on dominant type
        let resultDescription = '';
        
        switch(dominantType) {
            case 'Emotional':
                resultDescription = "You are highly in tune with your emotions and those of others. You likely make decisions based on how they feel and prioritize emotional connections in your relationships. Your empathy allows you to understand people deeply, but you may sometimes struggle with objectivity.";
                break;
            case 'Resilient':
                resultDescription = "You have a remarkable ability to bounce back from challenges. Stress and setbacks don't keep you down for long, as you possess strong coping mechanisms and adaptability. People probably admire your perseverance and ability to stay composed under pressure.";
                break;
            case 'Decisive':
                resultDescription = "You're action-oriented and confident in your decision-making. You prefer clear choices and don't waste time on excessive deliberation. Your straightforward approach helps you move forward quickly, though you might occasionally benefit from more reflection in complex situations.";
                break;
            case 'Analytical':
                resultDescription = "You approach problems logically and methodically. Facts and data are important to you, and you enjoy breaking down complex issues into manageable parts. Your thoughtful nature helps you make well-considered decisions, though you might sometimes overanalyze simple matters.";
                break;
            case 'Creative':
                resultDescription = "You have an imaginative and innovative mind. Conventional solutions don't always satisfy you, as you enjoy exploring new possibilities and unique perspectives. Your originality is a strength, though you may sometimes struggle with routine tasks that require strict adherence to established methods.";
                break;
            default:
                resultDescription = "Your personality shows a balanced mix of different traits, making you adaptable in various situations.";
        }
        
        resultContent.innerHTML = `
            <h3>${dominantType}</h3>
            <p>${resultDescription}</p>
        `;
    }
    
    function retakeQuiz() {
        // Reset scores and question index
        for (const key in scores) {
            scores[key] = 0;
        }
        currentQuestionIndex = 0;
        
        // Show quiz screen again
        resultScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        showQuestion();
    }
});