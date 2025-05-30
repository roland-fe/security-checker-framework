# Security Checker

Ein einfacher Security-Checker für WordPress-Seiten, der Benutzern hilft, ihre digitale Sicherheit zu überprüfen.

## Features

- 5 wichtige Sicherheitsfragen
- Einfache Ja/Nein-Antworten
- Personalisierte Handlungsempfehlungen
- Modernes, schlichtes Design
- Keine Datenspeicherung
- Einfache Integration in WordPress

## Installation

1. Laden Sie alle Dateien in ein Verzeichnis auf Ihrem Webhosting hoch
2. Die Dateien sollten folgende Struktur haben:
   ```
   security-checker/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```

## WordPress Integration

Es gibt zwei Möglichkeiten, den Security-Checker in Ihre WordPress-Seite zu integrieren:

### Option 1: iFrame Einbindung

Fügen Sie folgenden Code in Ihre WordPress-Seite ein:

```html
<iframe src="https://ihre-domain.de/security-checker/" width="100%" height="800px" frameborder="0"></iframe>
```

### Option 2: Direkter Link

Erstellen Sie einen Link zu Ihrer Security-Checker-Seite:

```html
<a href="https://ihre-domain.de/security-checker/" target="_blank">Security-Check durchführen</a>
```

## Anpassung

- Die Fragen können in der `script.js` Datei angepasst werden
- Das Design kann über die `styles.css` Datei angepasst werden
- Tailwind CSS Klassen können in der `index.html` angepasst werden

## Technische Details

- Vanilla JavaScript
- Tailwind CSS für das Design
- Keine Datenbankanbindung
- Responsive Design
- Keine externen Abhängigkeiten (außer Tailwind CSS CDN) 