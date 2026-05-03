# Comic Stories

Dieses Verzeichnis enthält JSON-Dateien mit Comic-Geschichten. Jede Datei definiert eine vollständige Geschichte mit Charakteren, Frames und Dialogen.

## Story auswählen

Die aktive Story wird über die `.env` Datei im Projekt-Root konfiguriert:

```env
VITE_STORY_PATH=stories/consciousness-mystery.json
```

Um eine andere Story zu verwenden:
1. Kopiere `.env.example` zu `.env` (falls noch nicht vorhanden)
2. Ändere `VITE_STORY_PATH` auf deine gewünschte Story
3. Starte den Dev-Server neu (`npm run dev`)

## Story-Format

Eine Story-JSON-Datei hat folgende Struktur:

```json
{
  "title": "Titel der Geschichte",
  "author": "Autor-Information",
  "attribution": "Attribution-Text",
  "attributionLink": "https://link-zur-quelle.com",
  "characters": {
    "character1": {
      "head": "Short|Pony|Curly|...",
      "torso": "Hoodie|LongSleeve|Jacket|...",
      "bottom": "BaggyPants|SweatPants|SkinnyJeans|...",
      "bottomColor1": "#HEX-Farbe",
      "bottomColor2": "#HEX-Farbe"
    },
    "character2": { ... }
  },
  "frames": [
    {
      "posture1": "standing|sitting",
      "posture2": "standing|sitting",
      "direction1": "left|right",
      "direction2": "left|right",
      "gap": "CSS-Wert (z.B. '20px', '-60px')",
      "bubbleType": "speech|thought",
      "speech1": "Text für Charakter 1\n(mit Zeilenumbrüchen)",
      "speech2": "Text für Charakter 2 oder null",
      "position": "left|right (Position der Sprechblase)",
      "scene": "Home|Plants|Whiteboard|Wireframe"
    }
  ]
}
```

## Verfügbare Optionen

### Heads (Köpfe)
- Short, Pony, Curly, Hijab, etc.

### Torsos (Oberkörper)
- Hoodie, LongSleeve, Jacket, TurtleNeck, LabCoat, TrenchCoat, Pregnant, PointingForward, PointingUp

### Bottoms (Hosen)
- BaggyPants, SweatPants, SkinnyJeans, Shorts, Skirt, Wheelchair (nur sitting)

### Postures (Haltungen)
- `standing` - Stehend
- `sitting` - Sitzend

### Directions (Richtungen)
- `left` - Nach links schauend
- `right` - Nach rechts schauend

### Scenes (Szenen)
- `Home` - Wohnzimmer
- `Plants` - Pflanzen
- `Whiteboard` - Whiteboard
- `Wireframe` - Wireframe/Mockup

### Bubble Types
- `speech` - Normale Sprechblase
- `thought` - Gedankenblase (Wolke)

## Neue Geschichte erstellen

1. Erstelle eine neue JSON-Datei in diesem Verzeichnis (z.B. `my-story.json`)
2. Kopiere die Struktur von `consciousness-mystery.json`
3. Passe Titel, Charaktere und Frames an
4. Aktualisiere die `.env` Datei:
   ```env
   VITE_STORY_PATH=stories/my-story.json
   ```
5. Starte den Dev-Server neu

## Tipps

- **Gap-Werte**: Negative Werte lassen Charaktere überlappen (z.B. `-60px`)
- **Zeilenumbrüche**: Verwende `\n` für mehrzeiligen Text
- **Farben**: Verwende Hex-Farben für `bottomColor1` und `bottomColor2`
- **Konsistenz**: Halte Charaktereigenschaften über alle Frames gleich für Kontinuität
- **Null-Werte**: Setze `speech1` oder `speech2` auf `null`, wenn ein Charakter nicht spricht

## Beispiel: Minimale Story

```json
{
  "title": "Hallo Welt",
  "author": "Meine erste Geschichte",
  "attribution": "Charaktere von Humaaans (CC BY 4.0)",
  "attributionLink": "https://github.com/pablostanley/humaaans",
  "characters": {
    "character1": {
      "head": "Short",
      "torso": "Hoodie",
      "bottom": "BaggyPants",
      "bottomColor1": "#69A1AC",
      "bottomColor2": "#89C5CC"
    },
    "character2": {
      "head": "Pony",
      "torso": "LongSleeve",
      "bottom": "SkinnyJeans",
      "bottomColor1": "#2E294E",
      "bottomColor2": "#541388"
    }
  },
  "frames": [
    {
      "posture1": "standing",
      "posture2": "standing",
      "direction1": "right",
      "direction2": "left",
      "gap": "0px",
      "bubbleType": "speech",
      "speech1": "Hallo!",
      "speech2": null,
      "position": "left",
      "scene": "Home"
    },
    {
      "posture1": "standing",
      "posture2": "standing",
      "direction1": "right",
      "direction2": "left",
      "gap": "0px",
      "bubbleType": "speech",
      "speech1": null,
      "speech2": "Hallo zurück!",
      "position": "right",
      "scene": "Home"
    }
  ]
}