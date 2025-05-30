// Questions and their corresponding recommendations
const questions = [
    {
        id: 1,
        text: "Verwenden Sie das gleiche Passwort für mehrere Dienste?",
        yesRecommendation: "Verwenden Sie für jeden Dienst ein einzigartiges Passwort. Ein Passwort-Manager kann Ihnen dabei helfen.",
        noRecommendation: "Sehr gut! Weiter so mit den unterschiedlichen Passwörtern."
    },
    {
        id: 2,
        text: "Aktivieren Sie die Zwei-Faktor-Authentifizierung (2FA) wo immer möglich?",
        yesRecommendation: "Ausgezeichnet! 2FA ist eine der wichtigsten Sicherheitsmaßnahmen.",
        noRecommendation: "Aktivieren Sie 2FA für alle wichtigen Dienste wie E-Mail, Banking und Social Media."
    },
    {
        id: 3,
        text: "Führen Sie regelmäßige Updates Ihrer Software und Systeme durch?",
        yesRecommendation: "Sehr gut! Regelmäßige Updates sind wichtig für die Sicherheit.",
        noRecommendation: "Aktivieren Sie automatische Updates und führen Sie regelmäßige Systemaktualisierungen durch."
    },
    {
        id: 4,
        text: "Nutzen Sie häufig öffentliche WLANs (z.B. in der Bahn, im Café oder im Hotel)?",
        yesRecommendation: "Erwägen Sie die Nutzung eines VPN-Dienstes, um Ihre Daten in öffentlichen Netzwerken zu schützen.",
        noRecommendation: "Sehr gut! Die Nutzung öffentlicher WLANs birgt immer ein Sicherheitsrisiko."
    },
    {
        id: 5,
        text: "Haben Sie eine Backup-Strategie für Ihre wichtigen Daten?",
        yesRecommendation: "Ausgezeichnet! Regelmäßige Backups sind essentiell.",
        noRecommendation: "Erstellen Sie regelmäßige Backups Ihrer wichtigen Daten, idealerweise an mehreren Orten."
    }
];

let currentQuestionIndex = 0;
let answers = [];

// Initialize the application
function init() {
    showQuestion(currentQuestionIndex);
}

// Display the current question
function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = questions[index];
    
    questionContainer.innerHTML = `
        <div class="question-card bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Frage ${index + 1} von ${questions.length}</h2>
            <p class="text-gray-700 mb-6">${question.text}</p>
            <div class="flex space-x-4">
                <button onclick="answerQuestion(true)" class="btn-answer bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                    Ja
                </button>
                <button onclick="answerQuestion(false)" class="btn-answer bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                    Nein
                </button>
            </div>
        </div>
    `;
}

// Handle the answer
function answerQuestion(answer) {
    answers.push({
        questionId: questions[currentQuestionIndex].id,
        answer: answer
    });

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

// Display the results
function showResults() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    let resultsHTML = `
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Ihre Sicherheitsanalyse</h2>
        <div class="space-y-6">
    `;
    
    answers.forEach((answer, index) => {
        const question = questions[index];
        const recommendation = answer.answer ? question.yesRecommendation : question.noRecommendation;
        
        resultsHTML += `
            <div class="result-item bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold mb-2">${question.text}</h3>
                <p class="text-gray-700">${recommendation}</p>
            </div>
        `;
    });
    
    resultsHTML += `
        </div>
        <div class="mt-8">
            <button onclick="resetQuiz()" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                Erneut starten
            </button>
        </div>
    `;
    
    resultContainer.innerHTML = resultsHTML;
}

// Reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    answers = [];
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    showQuestion(currentQuestionIndex);
}

// Start the application when the page loads
document.addEventListener('DOMContentLoaded', init); 