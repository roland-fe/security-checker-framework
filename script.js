// Questions and their corresponding recommendations
const questions = [
    {
        id: 1,
        text: "Do you use the same password for multiple services?",
        yesRecommendation: "Using the same password is a significant security risk. If one service is compromised, attackers can use your credentials for other services as well. Concrete recommendations:\n\n" +
            "1. <i class='fas fa-key'></i> Use a password manager like Bitwarden, 1Password, or KeePass\n" +
            "2. <i class='fas fa-fingerprint'></i> Create a unique, strong password for each service\n" +
            "3. <i class='fas fa-shield-alt'></i> Enable two-factor authentication wherever possible\n" +
            "4. <i class='fas fa-mobile-alt'></i> Use passkeys where available - this modern authentication method is more secure than passwords and easier to use\n" +
            "5. <i class='fas fa-search'></i> Regularly check if your email address has appeared in known data leaks (e.g., on haveibeenpwned.com)",
        noRecommendation: "Great! Using different passwords is an important security measure. Remember:\n\n" +
            "1. <i class='fas fa-sync-alt'></i> Update your passwords regularly\n" +
            "2. <i class='fas fa-shield-alt'></i> Use two-factor authentication whenever possible\n" +
            "3. <i class='fas fa-mobile-alt'></i> Consider using passkeys for services that support this modern authentication method",
        isPositiveOnNo: true  // "No" is the safe answer
    },
    {
        id: 2,
        text: "Do you enable two-factor authentication (2FA) wherever possible?",
        yesRecommendation: "Very good! Two-factor authentication is one of the most important security measures. Here are some tips for optimal use:\n\n" +
            "1. <i class='fas fa-mobile-alt'></i> Prefer using authenticator apps (e.g., Google Authenticator, Microsoft Authenticator) instead of SMS codes\n" +
            "2. <i class='fas fa-key'></i> Store backup codes securely (e.g., in your password manager)\n" +
            "3. <i class='fas fa-shield-alt'></i> Activate 2FA especially for important services like email, banking, and social media\n" +
            "4. <i class='fas fa-usb'></i> For maximum security, consider using hardware tokens (e.g., YubiKey)",
        noRecommendation: "Two-factor authentication is an important additional layer of security. Without 2FA, attackers can gain direct access to your accounts with stolen passwords. Concrete recommendations:\n\n" +
            "1. <i class='fas fa-list-ol'></i> Start by activating 2FA for your most important accounts (email, banking)\n" +
            "2. <i class='fas fa-mobile-alt'></i> Use an authenticator app like Google Authenticator or Microsoft Authenticator\n" +
            "3. <i class='fas fa-exclamation-triangle'></i> Avoid SMS-based 2FA if possible, as it can be vulnerable to SIM swapping attacks\n" +
            "4. <i class='fas fa-key'></i> Store backup codes securely in case you lose your device\n" +
            "5. <i class='fas fa-usb'></i> For particularly sensitive data: Consider using hardware tokens like YubiKey",
        isPositiveOnNo: false  // "Yes" is the safe answer
    },
    {
        id: 3,
        text: "Do you regularly update your software and systems?",
        yesRecommendation: "Excellent! Regular updates are essential for your digital security. Here are some best practices:\n\n" +
            "1. <i class='fas fa-robot'></i> Enable automatic updates wherever possible\n" +
            "2. <i class='fas fa-bolt'></i> Install updates as soon as they are available\n" +
            "3. <i class='fas fa-tools'></i> Regularly check for updates for:\n" +
            "   - <i class='fas fa-globe'></i> Browsers and browser extensions\n" +
            "   - <i class='fas fa-mobile-alt'></i> Mobile apps\n" +
            "   - <i class='fas fa-wifi'></i> Routers and IoT devices\n" +
            "4. <i class='fas fa-save'></i> Back up your data before major system updates",
        noRecommendation: "Without regular updates, your devices and data are at risk. Outdated software often contains known security vulnerabilities that can be exploited by attackers. Concrete recommendations:\n\n" +
            "1. <i class='fas fa-robot'></i> Enable automatic updates for:\n" +
            "   - <i class='fas fa-desktop'></i> Operating system (Windows, macOS, Linux)\n" +
            "   - <i class='fas fa-globe'></i> Browsers (Chrome, Firefox, Safari)\n" +
            "   - <i class='fas fa-shield-virus'></i> Antivirus software\n" +
            "2. <i class='fas fa-calendar-check'></i> Set up a weekly update check\n" +
            "3. <i class='fas fa-tools'></i> Use tools like:\n" +
            "   - <i class='fas fa-windows'></i> Windows Update\n" +
            "   - <i class='fas fa-apple'></i> Software Update (macOS)\n" +
            "   - <i class='fas fa-linux'></i> apt update/upgrade (Linux)\n" +
            "4. <i class='fas fa-save'></i> Always back up your data before updates\n" +
            "5. <i class='fas fa-network-wired'></i> Check for updates for routers, smart home devices, and IoT devices as well",
        isPositiveOnNo: false  // "Yes" is the safe answer
    },
    {
        id: 4,
        text: "Do you often use public Wi-Fi networks (e.g., in trains, cafes, or hotels)?",
        yesRecommendation: "Using public Wi-Fi networks poses significant security risks. Here are concrete recommendations:\n\n" +
            "1. <i class='fas fa-shield-alt'></i> Use a trusted VPN service (e.g., ProtonVPN, NordVPN, Mullvad)\n" +
            "2. <i class='fas fa-fire'></i> Enable the firewall on your device\n" +
            "3. <i class='fas fa-wifi-slash'></i> Disable automatic Wi-Fi connections\n" +
            "4. <i class='fas fa-mobile-alt'></i> Use your smartphone as a hotspot if possible\n" +
            "5. <i class='fas fa-lock'></i> Avoid sensitive transactions (e.g., online banking) on public networks\n" +
            "6. <i class='fas fa-key'></i> Use two-factor authentication for all important services\n" +
            "7. <i class='fas fa-user-check'></i> Verify the network's authenticity (e.g., by asking the staff)",
        noRecommendation: "Very good! Avoiding public Wi-Fi networks is an important security measure. In case you need to use public Wi-Fi:\n\n" +
            "1. <i class='fas fa-shield-alt'></i> Use a VPN service\n" +
            "2. <i class='fas fa-fire'></i> Enable the firewall\n" +
            "3. <i class='fas fa-lock'></i> Avoid sensitive transactions\n" +
            "4. <i class='fas fa-mobile-alt'></i> Use your smartphone as a hotspot if possible",
        isPositiveOnNo: true  // "No" is the safe answer
    },
    {
        id: 5,
        text: "Do you have a backup strategy for your important data?",
        yesRecommendation: "Excellent! Here are some best practices for your backup strategy:\n\n" +
            "1. <i class='fas fa-shield-alt'></i> Use the 3-2-1 rule:\n" +
            "   - <i class='fas fa-copy'></i> 3 copies of your data\n" +
            "   - <i class='fas fa-hdd'></i> 2 different storage media\n" +
            "   - <i class='fas fa-building'></i> 1 backup at a different location\n" +
            "2. <i class='fas fa-robot'></i> Automate your backups\n" +
            "3. <i class='fas fa-vial'></i> Regularly test the restoration process\n" +
            "4. <i class='fas fa-lock'></i> Encrypt your backups\n" +
            "5. <i class='fas fa-layer-group'></i> Use a combination of:\n" +
            "   - <i class='fas fa-hdd'></i> Local backups (external hard drives)\n" +
            "   - <i class='fas fa-cloud'></i> Cloud backups (e.g., Backblaze, iCloud)\n" +
            "   - <i class='fas fa-server'></i> NAS systems for home",
        noRecommendation: "A robust backup strategy is essential for protecting your data. Here is a concrete action plan:\n\n" +
            "1. <i class='fas fa-search'></i> Identify your important data:\n" +
            "   - <i class='fas fa-file-alt'></i> Documents\n" +
            "   - <i class='fas fa-image'></i> Photos\n" +
            "   - <i class='fas fa-envelope'></i> Emails\n" +
            "   - <i class='fas fa-address-book'></i> Contacts\n" +
            "2. <i class='fas fa-shield-alt'></i> Implement the 3-2-1 rule:\n" +
            "   - <i class='fas fa-copy'></i> 3 copies of your data\n" +
            "   - <i class='fas fa-hdd'></i> 2 different storage media\n" +
            "   - <i class='fas fa-building'></i> 1 backup at a different location\n" +
            "3. <i class='fas fa-tools'></i> Choose suitable backup solutions:\n" +
            "   - <i class='fas fa-hdd'></i> External hard drives for local backups\n" +
            "   - <i class='fas fa-cloud'></i> Cloud services (e.g., Backblaze, iCloud)\n" +
            "   - <i class='fas fa-server'></i> NAS systems for home\n" +
            "4. <i class='fas fa-robot'></i> Automate your backups\n" +
            "5. <i class='fas fa-vial'></i> Regularly test the restoration process\n" +
            "6. <i class='fas fa-lock'></i> Encrypt your backups",
        isPositiveOnNo: false  // "Yes" is the safe answer
    }
];

let currentQuestionIndex = 0;
let answers = [];

// Initialize the application
function init() {
    // Hide question/result containers initially
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.add('hidden');
    // Show intro
    document.getElementById('intro-container').classList.remove('hidden');
    // Add event listener for start button
    document.getElementById('start-button').addEventListener('click', startQuiz);
}

function startQuiz() {
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    showQuestion(currentQuestionIndex);
}

// Display the current question
function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = questions[index];
    
    questionContainer.innerHTML = `
        <div class="question-card bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Question ${index + 1} of ${questions.length}</h2>
            <p class="text-gray-700 mb-6">${question.text}</p>
            <div class="flex space-x-4">
                <button onclick="answerQuestion(true)" class="btn-answer bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                    Yes
                </button>
                <button onclick="answerQuestion(false)" class="btn-answer bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                    No
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
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Your Security Analysis</h2>
        <div class="space-y-6">
    `;
    
    answers.forEach((answer, index) => {
        const question = questions[index];
        const recommendation = answer.answer ? question.yesRecommendation : question.noRecommendation;
        const isPositive = answer.answer ? !question.isPositiveOnNo : question.isPositiveOnNo;
        
        // Split recommendations into sections
        const sections = recommendation.split('\n\n');
        const mainText = sections[0];
        const recommendations = sections.slice(1).map(section => {
            // Split section into lines
            const lines = section.split('\n');
            let html = '';
            lines.forEach(line => {
                const trimmed = line.trim();
                if (trimmed.length === 0) return;
                // Sub-point: starts with '-'
                if (trimmed.startsWith('-')) {
                    // Extract icon if present
                    const iconMatch = trimmed.match(/<i class='([^']+)'><\/i>/);
                    const icon = iconMatch ? `<i class='${iconMatch[1]}'></i>` : '';
                    const text = trimmed.replace(/<i class='[^']+'><\/i>/, '').replace('-', '').trim();
                    html += `
                        <div class="flex items-start ml-8 mb-1">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span class="text-gray-600">${icon} ${text}</span>
                        </div>
                    `;
                } else if (/^\d+\./.test(trimmed)) {
                    // Hauptpunkt (Nummerierung)
                    // Extract icon if present
                    const iconMatch = trimmed.match(/<i class='([^']+)'><\/i>/);
                    const icon = iconMatch ? `<i class='${iconMatch[1]}'></i>` : '';
                    // Remove number and icon
                    const text = trimmed.replace(/^\d+\.\s*/, '').replace(/<i class='[^']+'><\/i>/, '').trim();
                    html += `
                        <div class="recommendation-item mb-3">
                            <div class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <span class="font-medium">${icon} ${text}</span>
                            </div>
                        </div>
                    `;
                } else {
                    // Freitext (z.B. Einleitung)
                    html += `<div class="text-gray-700 mb-2">${trimmed}</div>`;
                }
            });
            return html;
        }).join('');
        
        resultsHTML += `
            <div class="result-item bg-white p-6 rounded-lg shadow-md border-l-4 ${isPositive ? 'border-green-500' : 'border-red-500'}">
                <div class="flex items-start">
                    <div class="flex-shrink-0 mr-4">
                        <span class="text-2xl ${isPositive ? 'text-green-500' : 'text-red-500'}">
                            ${isPositive ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>'}
                        </span>
                    </div>
                    <div class="flex-grow">
                        <h3 class="text-lg font-semibold mb-3">${question.text}</h3>
                        <div class="text-gray-700 mb-4">${mainText}</div>
                        <div class="recommendations-list">
                            ${recommendations}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    resultsHTML += `
        </div>
        <div class="mt-8">
            <button onclick="resetQuiz()" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center">
                <i class="fas fa-redo mr-2"></i>
                Restart
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
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('intro-container').classList.remove('hidden');
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Start the application when the page loads
document.addEventListener('DOMContentLoaded', init);