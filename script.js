// Questions and their corresponding recommendations
const questions = [
    {
        id: 1,
        text: "Verwenden Sie das gleiche Passwort für mehrere Dienste?",
        yesRecommendation: "Die Verwendung des gleichen Passworts ist ein erhebliches Sicherheitsrisiko. Wenn ein Dienst kompromittiert wird, können Angreifer Ihre Zugangsdaten auch für andere Dienste nutzen. Konkrete Handlungsempfehlungen:\n\n" +
            "1. <i class='fas fa-key'></i> Nutzen Sie einen Passwort-Manager wie Bitwarden, 1Password oder KeePass\n" +
            "2. <i class='fas fa-fingerprint'></i> Erstellen Sie für jeden Dienst ein einzigartiges, starkes Passwort\n" +
            "3. <i class='fas fa-shield-alt'></i> Aktivieren Sie die Zwei-Faktor-Authentifizierung wo möglich\n" +
            "4. <i class='fas fa-mobile-alt'></i> Nutzen Sie Passkeys wo verfügbar - diese moderne Authentifizierungsmethode ist sicherer als Passwörter und einfacher zu nutzen\n" +
            "5. <i class='fas fa-search'></i> Überprüfen Sie regelmäßig, ob Ihre E-Mail-Adresse in bekannten Datenlecks aufgetaucht ist (z.B. auf haveibeenpwned.com)",
        noRecommendation: "Ausgezeichnet! Die Verwendung unterschiedlicher Passwörter ist eine wichtige Sicherheitsmaßnahme. Denken Sie daran:\n\n" +
            "1. <i class='fas fa-sync-alt'></i> Aktualisieren Sie Ihre Passwörter regelmäßig\n" +
            "2. <i class='fas fa-shield-alt'></i> Nutzen Sie die Zwei-Faktor-Authentifizierung wo immer möglich\n" +
            "3. <i class='fas fa-mobile-alt'></i> Erwägen Sie die Nutzung von Passkeys für Dienste, die diese moderne Authentifizierungsmethode unterstützen",
        isPositiveOnNo: true  // "Nein" ist die sichere Antwort
    },
    {
        id: 2,
        text: "Aktivieren Sie die Zwei-Faktor-Authentifizierung (2FA) wo immer möglich?",
        yesRecommendation: "Sehr gut! Die Zwei-Faktor-Authentifizierung ist eine der wichtigsten Sicherheitsmaßnahmen. Hier sind einige Tipps für die optimale Nutzung:\n\n" +
            "1. <i class='fas fa-mobile-alt'></i> Nutzen Sie bevorzugt Authenticator-Apps (z.B. Google Authenticator, Microsoft Authenticator) statt SMS-Codes\n" +
            "2. <i class='fas fa-key'></i> Speichern Sie Backup-Codes sicher (z.B. in Ihrem Passwort-Manager)\n" +
            "3. <i class='fas fa-shield-alt'></i> Aktivieren Sie 2FA besonders für wichtige Dienste wie E-Mail, Banking und Social Media\n" +
            "4. <i class='fas fa-usb'></i> Erwägen Sie für maximale Sicherheit die Nutzung von Hardware-Tokens (z.B. YubiKey)",
        noRecommendation: "Die Zwei-Faktor-Authentifizierung ist ein wichtiger zusätzlicher Sicherheitsschutz. Ohne 2FA können Angreifer mit gestohlenen Passwörtern direkten Zugriff auf Ihre Accounts erlangen. Konkrete Handlungsempfehlungen:\n\n" +
            "1. <i class='fas fa-list-ol'></i> Beginnen Sie mit der Aktivierung von 2FA für Ihre wichtigsten Accounts (E-Mail, Banking)\n" +
            "2. <i class='fas fa-mobile-alt'></i> Nutzen Sie eine Authenticator-App wie Google Authenticator oder Microsoft Authenticator\n" +
            "3. <i class='fas fa-exclamation-triangle'></i> Vermeiden Sie nach Möglichkeit SMS-basierte 2FA, da diese anfällig für SIM-Swapping-Angriffe sein kann\n" +
            "4. <i class='fas fa-key'></i> Speichern Sie die Backup-Codes sicher, falls Sie Ihr Gerät verlieren\n" +
            "5. <i class='fas fa-usb'></i> Für besonders sensible Daten: Erwägen Sie die Nutzung von Hardware-Tokens wie YubiKey",
        isPositiveOnNo: false  // "Ja" ist die sichere Antwort
    },
    {
        id: 3,
        text: "Führen Sie regelmäßige Updates Ihrer Software und Systeme durch?",
        yesRecommendation: "Ausgezeichnet! Regelmäßige Updates sind essentiell für Ihre digitale Sicherheit. Hier sind einige Best Practices:\n\n" +
            "1. <i class='fas fa-robot'></i> Aktivieren Sie automatische Updates wo immer möglich\n" +
            "2. <i class='fas fa-bolt'></i> Führen Sie Updates am besten sofort durch, wenn sie verfügbar sind\n" +
            "3. <i class='fas fa-tools'></i> Überprüfen Sie regelmäßig auch Updates für:\n" +
            "   - <i class='fas fa-globe'></i> Browser und Browser-Erweiterungen\n" +
            "   - <i class='fas fa-mobile-alt'></i> Mobile Apps\n" +
            "   - <i class='fas fa-wifi'></i> Router und IoT-Geräte\n" +
            "4. <i class='fas fa-save'></i> Erstellen Sie vor größeren System-Updates ein Backup",
        noRecommendation: "Ohne regelmäßige Updates sind Ihre Geräte und Daten gefährdet. Veraltete Software enthält oft bekannte Sicherheitslücken, die von Angreifern ausgenutzt werden können. Konkrete Handlungsempfehlungen:\n\n" +
            "1. <i class='fas fa-robot'></i> Aktivieren Sie automatische Updates für:\n" +
            "   - <i class='fas fa-desktop'></i> Betriebssystem (Windows, macOS, Linux)\n" +
            "   - <i class='fas fa-globe'></i> Browser (Chrome, Firefox, Safari)\n" +
            "   - <i class='fas fa-shield-virus'></i> Antiviren-Software\n" +
            "2. <i class='fas fa-calendar-check'></i> Richten Sie einen wöchentlichen Update-Check ein\n" +
            "3. <i class='fas fa-tools'></i> Nutzen Sie Tools wie:\n" +
            "   - <i class='fas fa-windows'></i> Windows Update\n" +
            "   - <i class='fas fa-apple'></i> Software Update (macOS)\n" +
            "   - <i class='fas fa-linux'></i> apt update/upgrade (Linux)\n" +
            "4. <i class='fas fa-save'></i> Erstellen Sie vor Updates immer ein Backup\n" +
            "5. <i class='fas fa-network-wired'></i> Prüfen Sie auch Updates für Router, Smart-Home-Geräte und IoT-Devices",
        isPositiveOnNo: false  // "Ja" ist die sichere Antwort
    },
    {
        id: 4,
        text: "Nutzen Sie häufig öffentliche WLANs (z.B. in der Bahn, im Café oder im Hotel)?",
        yesRecommendation: "Die Nutzung öffentlicher WLANs birgt erhebliche Sicherheitsrisiken. Hier sind konkrete Handlungsempfehlungen:\n\n" +
            "1. <i class='fas fa-shield-alt'></i> Nutzen Sie einen vertrauenswürdigen VPN-Dienst (z.B. ProtonVPN, NordVPN, Mullvad)\n" +
            "2. <i class='fas fa-fire'></i> Aktivieren Sie die Firewall auf Ihrem Gerät\n" +
            "3. <i class='fas fa-wifi-slash'></i> Deaktivieren Sie die automatische WLAN-Verbindung\n" +
            "4. <i class='fas fa-mobile-alt'></i> Nutzen Sie nach Möglichkeit Ihr Smartphone als Hotspot\n" +
            "5. <i class='fas fa-lock'></i> Vermeiden Sie sensible Transaktionen (z.B. Online-Banking) in öffentlichen Netzwerken\n" +
            "6. <i class='fas fa-key'></i> Nutzen Sie die Zwei-Faktor-Authentifizierung für alle wichtigen Dienste\n" +
            "7. <i class='fas fa-user-check'></i> Prüfen Sie die Netzwerkauthentizität (z.B. durch Nachfrage beim Personal)",
        noRecommendation: "Sehr gut! Die Vermeidung öffentlicher WLANs ist eine wichtige Sicherheitsmaßnahme. Für den Fall, dass Sie doch einmal ein öffentliches WLAN nutzen müssen:\n\n" +
            "1. <i class='fas fa-shield-alt'></i> Nutzen Sie einen VPN-Dienst\n" +
            "2. <i class='fas fa-fire'></i> Aktivieren Sie die Firewall\n" +
            "3. <i class='fas fa-lock'></i> Vermeiden Sie sensible Transaktionen\n" +
            "4. <i class='fas fa-mobile-alt'></i> Nutzen Sie nach Möglichkeit Ihr Smartphone als Hotspot",
        isPositiveOnNo: true  // "Nein" ist die sichere Antwort
    },
    {
        id: 5,
        text: "Haben Sie eine Backup-Strategie für Ihre wichtigen Daten?",
        yesRecommendation: "Ausgezeichnet! Hier sind einige Best Practices für Ihre Backup-Strategie:\n\n" +
            "1. <i class='fas fa-shield-alt'></i> Nutzen Sie die 3-2-1-Regel:\n" +
            "   - <i class='fas fa-copy'></i> 3 Kopien Ihrer Daten\n" +
            "   - <i class='fas fa-hdd'></i> 2 verschiedene Speichermedien\n" +
            "   - <i class='fas fa-building'></i> 1 Backup an einem anderen Ort\n" +
            "2. <i class='fas fa-robot'></i> Automatisieren Sie Ihre Backups\n" +
            "3. <i class='fas fa-vial'></i> Testen Sie regelmäßig die Wiederherstellung\n" +
            "4. <i class='fas fa-lock'></i> Verschlüsseln Sie Ihre Backups\n" +
            "5. <i class='fas fa-layer-group'></i> Nutzen Sie eine Kombination aus:\n" +
            "   - <i class='fas fa-hdd'></i> Lokalen Backups (externe Festplatten)\n" +
            "   - <i class='fas fa-cloud'></i> Cloud-Backups (z.B. Backblaze, iCloud)\n" +
            "   - <i class='fas fa-server'></i> NAS-Systemen für Zuhause",
        noRecommendation: "Eine robuste Backup-Strategie ist essentiell für den Schutz Ihrer Daten. Hier ist ein konkreter Aktionsplan:\n\n" +
            "1. <i class='fas fa-search'></i> Identifizieren Sie Ihre wichtigen Daten:\n" +
            "   - <i class='fas fa-file-alt'></i> Dokumente\n" +
            "   - <i class='fas fa-image'></i> Fotos\n" +
            "   - <i class='fas fa-envelope'></i> E-Mails\n" +
            "   - <i class='fas fa-address-book'></i> Kontakte\n" +
            "2. <i class='fas fa-shield-alt'></i> Implementieren Sie die 3-2-1-Regel:\n" +
            "   - <i class='fas fa-copy'></i> 3 Kopien Ihrer Daten\n" +
            "   - <i class='fas fa-hdd'></i> 2 verschiedene Speichermedien\n" +
            "   - <i class='fas fa-building'></i> 1 Backup an einem anderen Ort\n" +
            "3. <i class='fas fa-tools'></i> Wählen Sie geeignete Backup-Lösungen:\n" +
            "   - <i class='fas fa-hdd'></i> Externe Festplatten für lokale Backups\n" +
            "   - <i class='fas fa-cloud'></i> Cloud-Dienste (z.B. Backblaze, iCloud)\n" +
            "   - <i class='fas fa-server'></i> NAS-Systeme für Zuhause\n" +
            "4. <i class='fas fa-robot'></i> Automatisieren Sie Ihre Backups\n" +
            "5. <i class='fas fa-vial'></i> Testen Sie regelmäßig die Wiederherstellung\n" +
            "6. <i class='fas fa-lock'></i> Verschlüsseln Sie Ihre Backups",
        isPositiveOnNo: false  // "Ja" ist die sichere Antwort
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
    
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Start the application when the page loads
document.addEventListener('DOMContentLoaded', init); 