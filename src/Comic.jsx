import { useState } from 'react';
import './Comic.css';
import Human from './humaaans/Human';
import Scene from './humaaans/Scene';
import ThoughtBubble from './ThoughtBubble';
import SpeechBubble from './SpeechBubble';
import Footer from './Footer';

// Statischer Import der Story - Vite kann nur statische Imports bundlen
import consciousnessStory from './stories/consciousness-mystery.json';
import godPhysicsStory from './stories/god-and-physics.json';

// Story-Auswahl basierend auf Umgebungsvariable
const storyPath = import.meta.env.VITE_STORY_PATH || 'stories/consciousness-mystery.json';
const storyData = storyPath.includes('god-and-physics') ? godPhysicsStory : consciousnessStory;

// Helper function to get text in the current language
const getText = (textObj, language) => {
  if (typeof textObj === 'string') return textObj;
  if (typeof textObj === 'object' && textObj !== null) {
    return textObj[language] || textObj.de || textObj.en || '';
  }
  return '';
};

const HumaanCharacter = ({ character, posture = 'standing', direction = 'right', size = 200, className = '' }) => {
  return (
    <div className={`humaan-svg ${className}`}>
      <Human
        head={character.head}
        torso={character.torso}
        bottom={character.bottom}
        posture={posture}
        direction={direction}
        size={size}
        bottomColor1={character.bottomColor1}
        bottomColor2={character.bottomColor2}
      />
    </div>
  );
};

export default function Comic() {
  const [language, setLanguage] = useState('en');
  const { title, author, attribution, attributionLink, characters, frames } = storyData;
  const CHARACTER_1 = characters.character1;
  const CHARACTER_2 = characters.character2;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="comic-container">
      <h1 className="comic-title">{getText(title, language)}</h1>
      <div className="comic-grid">
        {frames.map((frame, index) => (
          <div key={index} className={`comic-frame frame-${index + 1}`}>
            <div className="frame-content">
              {/* Szenen-Hintergrund */}
              <div className="scene-background">
                <Scene name={frame.scene} width={600} height={400} />
              </div>

              <div className={`speech-container ${frame.position}`}>
                {frame.speech1 && (
                  frame.bubbleType === 'thought' ? (
                    <ThoughtBubble position={frame.position}>
                      {getText(frame.speech1, language)}
                    </ThoughtBubble>
                  ) : (
                    <SpeechBubble position={frame.position}>
                      {getText(frame.speech1, language)}
                    </SpeechBubble>
                  )
                )}
                {frame.speech2 && (
                  frame.bubbleType === 'thought' ? (
                    <ThoughtBubble position={frame.position}>
                      {getText(frame.speech2, language)}
                    </ThoughtBubble>
                  ) : (
                    <SpeechBubble position={frame.position}>
                      {getText(frame.speech2, language)}
                    </SpeechBubble>
                  )
                )}
              </div>

              <div className="characters-container" style={{ gap: frame.gap }}>
                {/* Charakter 1 */}
                <div className="character character-1">
                  <HumaanCharacter
                    character={CHARACTER_1}
                    posture={frame.posture1}
                    direction={frame.direction1}
                    size={150}
                  />
                </div>
                {/* Charakter 2 */}
                <div className="character character-2" style={{ marginLeft: frame.gap }}>
                  <HumaanCharacter
                    character={CHARACTER_2}
                    posture={frame.posture2}
                    direction={frame.direction2}
                    size={140}
                  />
                </div>
              </div>
            </div>
            <div className="frame-number">{index + 1}</div>
          </div>
        ))}
      </div>
      <div className="author-section">
        <p>
          {getText(author, language)}
        </p>
        <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
          {attribution} - <a href={attributionLink} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Humaaans</a>
        </p>
      </div>
      <Footer
        language={language}
        onLanguageToggle={toggleLanguage}
        onExportPDF={handleExportPDF}
      />
    </div>
  );
}

// Made with Bob
