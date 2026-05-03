# GitHub Pages Deployment Anleitung

## Automatisches Deployment einrichten

### 1. Repository auf GitHub erstellen

```bash
# Falls noch nicht geschehen, Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Comic app with React 19"

# GitHub Repository erstellen (ersetze USERNAME mit deinem GitHub Username)
# Gehe zu https://github.com/new und erstelle ein neues Repository namens "comic2"

# Remote hinzufügen
git remote add origin https://github.com/USERNAME/comic2.git

# Push zum main Branch
git branch -M main
git push -u origin main
```

### 2. GitHub Pages aktivieren (WICHTIG!)

**Du MUSST GitHub Pages manuell aktivieren, bevor der Workflow funktioniert:**

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Einstellungen)
3. Klicke im linken Menü auf **Pages**
4. Unter **Build and deployment** → **Source** wähle **GitHub Actions**
5. Die Seite speichert automatisch

**Ohne diesen Schritt wird der Workflow mit "Resource not accessible" Fehler fehlschlagen!**

### 3. Deployment starten

Der Workflow wird automatisch ausgeführt bei jedem Push zum `main` Branch:

```bash
# Änderungen committen und pushen
git add .
git commit -m "Update comic"
git push
```

### 4. Website aufrufen

Nach erfolgreichem Deployment (ca. 1-2 Minuten) ist deine Website erreichbar unter:

```
https://USERNAME.github.io/comic2/
```

Ersetze `USERNAME` mit deinem GitHub Username.

## Manuelle Schritte (falls automatisches Deployment nicht funktioniert)

### Alternative: gh-pages Branch

```bash
# Build erstellen
npm run build

# gh-pages Package installieren
npm install --save-dev gh-pages

# Deploy Script zu package.json hinzufügen
# "deploy": "gh-pages -d dist"

# Deployen
npm run deploy
```

## Wichtige Dateien

- **vite.config.js**: `base: '/comic2/'` - Muss mit dem Repository-Namen übereinstimmen
- **.github/workflows/deploy.yml**: GitHub Actions Workflow für automatisches Deployment
- **dist/**: Build-Ordner (wird automatisch erstellt, nicht committen)

## Troubleshooting

### Seite zeigt 404
- Überprüfe ob `base` in `vite.config.js` mit dem Repository-Namen übereinstimmt
- Warte 1-2 Minuten nach dem Push
- Überprüfe den Workflow-Status unter "Actions" Tab auf GitHub

### Build schlägt fehl
- Überprüfe die Logs unter "Actions" Tab
- Stelle sicher dass `npm run build` lokal funktioniert
- Überprüfe dass alle Dependencies in `package.json` sind

### Assets werden nicht geladen
- Überprüfe die Browser-Konsole auf Fehler
- Stelle sicher dass `base` korrekt gesetzt ist
- Überprüfe dass alle Pfade relativ sind (nicht mit `/` beginnen)

## Story wechseln

Um eine andere Story anzuzeigen, ändere die `.env` Datei:

```env
VITE_STORY_PATH=stories/consciousness-mystery.json
# oder
VITE_STORY_PATH=stories/god-and-physics.json
```

Dann neu builden und deployen:

```bash
npm run build
git add .
git commit -m "Switch to different story"
git push