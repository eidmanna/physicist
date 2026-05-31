# Rechtliches Setup für GitHub Pages

Diese Anleitung hilft Ihnen, die Website rechtssicher zu veröffentlichen.

## ⚠️ WICHTIG: Pflichtangaben anpassen

Bevor Sie die Website veröffentlichen, **MÜSSEN** Sie folgende Dateien mit Ihren echten Daten anpassen:

### 1. Impressum (`src/Impressum.jsx`)

Ersetzen Sie alle Platzhalter in eckigen Klammern `[...]` mit Ihren echten Daten:

```jsx
// Zeile 11-16: Ihre persönlichen Daten
[Ihr vollständiger Name]           → z.B. Max Mustermann
[Ihre Straße und Hausnummer]       → z.B. Musterstraße 123
[PLZ] [Stadt]                      → z.B. 1010 Wien
[Land]                             → z.B. Österreich

// Zeile 21-22: Kontaktdaten
[ihre-email@example.com]           → Ihre echte E-Mail-Adresse
[Ihre Telefonnummer - optional]    → Optional: Ihre Telefonnummer

// Zeile 27-28: Verantwortlicher
[Ihr vollständiger Name]           → Ihr Name
[Ihre Adresse]                     → Ihre vollständige Adresse
```

### 2. Datenschutzerklärung (`src/Datenschutz.jsx`)

Die Datenschutzerklärung ist bereits für eine einfache GitHub Pages Website vorbereitet.
Sie müssen **keine** Änderungen vornehmen, außer Sie fügen später:
- Cookies hinzu
- Analytics/Tracking Tools hinzu
- Externe Dienste hinzu

Dann müssen Sie die Datenschutzerklärung entsprechend erweitern.

## 📋 Rechtliche Anforderungen für Österreich/EU

### Pflichtangaben im Impressum (§ 5 TMG / § 25 MedienG)

Für Privatpersonen in Österreich:
- ✅ Vollständiger Name
- ✅ Vollständige Anschrift
- ✅ E-Mail-Adresse
- ⚠️ Telefonnummer (empfohlen, aber nicht immer Pflicht)

### DSGVO-Anforderungen

- ✅ Datenschutzerklärung vorhanden
- ✅ Keine Cookies verwendet (daher kein Cookie-Banner nötig)
- ✅ Keine Tracking-Tools (Google Analytics, etc.)
- ✅ Hosting-Informationen (GitHub Pages) angegeben

## 🚀 Was ist bereits implementiert?

### ✅ Impressum
- Vollständige Vorlage nach deutschem/österreichischem Recht
- EU-Streitschlichtung
- Haftungsausschlüsse
- Urheberrechtshinweise

### ✅ Datenschutzerklärung
- DSGVO-konform
- GitHub Pages Hosting-Informationen
- Keine Cookies/Tracking
- Nutzerrechte aufgelistet

### ✅ Footer mit Links
- Impressum-Link
- Datenschutz-Link
- Copyright-Hinweis
- Attribution für Humaaans

### ✅ PDF Export
- Druckfunktion für Comics
- Optimierte Print-Styles

## 🔒 Keine Cookie-Banner nötig

Da diese Website:
- ❌ Keine Cookies setzt
- ❌ Kein Tracking verwendet
- ❌ Keine externen Dienste einbindet (außer GitHub Pages Hosting)

ist **KEIN Cookie-Banner erforderlich**!

## ⚡ Wenn Sie später Änderungen vornehmen

Falls Sie später hinzufügen:

### Google Analytics / Tracking
→ Sie benötigen dann:
- Cookie-Banner mit Opt-in
- Erweiterte Datenschutzerklärung
- Cookie-Richtlinie

### Externe Dienste (YouTube, Google Fonts, etc.)
→ Sie müssen dann:
- Diese in der Datenschutzerklärung erwähnen
- Ggf. Cookie-Banner hinzufügen
- Datenübermittlung in Drittländer erwähnen

### Kommentarfunktion / Formulare
→ Sie benötigen dann:
- Erweiterte Datenschutzerklärung
- Informationen zur Datenspeicherung
- Ggf. Auftragsverarbeitungsvertrag mit Dienstleister

## 📝 Checkliste vor Veröffentlichung

- [ ] Impressum mit echten Daten ausgefüllt
- [ ] E-Mail-Adresse im Impressum korrekt
- [ ] Datenschutzerklärung gelesen und verstanden
- [ ] Keine zusätzlichen Tracking-Tools hinzugefügt
- [ ] Footer-Links funktionieren
- [ ] Website getestet

## 🌐 Veröffentlichung auf GitHub Pages

Die Website ist bereits für GitHub Pages konfiguriert:
- Deployment-Workflow vorhanden (`.github/workflows/deploy.yml`)
- Base-Path konfiguriert (`vite.config.js`)

Nach dem Anpassen der Daten:
1. Committen Sie Ihre Änderungen
2. Pushen Sie zu GitHub
3. GitHub Actions deployed automatisch

## ⚖️ Rechtlicher Hinweis

Diese Vorlagen sind nach bestem Wissen erstellt, ersetzen aber **keine Rechtsberatung**.
Bei Unsicherheiten konsultieren Sie bitte einen Rechtsanwalt.

Besonders wichtig:
- Impressumspflicht gilt auch für private Websites mit "geschäftsmäßigem" Charakter
- DSGVO gilt für alle Websites, die personenbezogene Daten verarbeiten
- Bei kommerzieller Nutzung gelten zusätzliche Anforderungen

## 📞 Weitere Informationen

- [WKO Österreich - Impressumspflicht](https://www.wko.at/service/wirtschaftsrecht-gewerberecht/Impressumspflicht.html)
- [Datenschutzbehörde Österreich](https://www.dsb.gv.at/)
- [EU DSGVO](https://gdpr.eu/)

---

**Erstellt mit Bob** 🤖