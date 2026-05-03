import './Comic.css';
import Human from './humaaans/Human';
import Scene from './humaaans/Scene';

// Zwei konsistente Charaktere mit festen Eigenschaften
// Diese Eigenschaften bleiben in allen Frames gleich
const CHARACTER_1 = {
  head: 'Short',
  torso: 'Hoodie',
  bottom: 'SkinnyJeans', // Bleibt immer gleich
  bottomColor1: '#191847', // Dunkelblau - bleibt konstant
  bottomColor2: '#2F3676', // Mittelblau - bleibt konstant
};

const CHARACTER_2 = {
  head: 'Curly',
  torso: 'LongSleeve',
  bottom: 'BaggyPants', // Bleibt immer gleich
  bottomColor1: '#69A1AC', // Türkis/Blau (standing Pant Farbe) - bleibt konstant
  bottomColor2: '#89C5CC', // Hellblau/Cyan (standing Pant Farbe) - bleibt konstant
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
  const frames = [
    {
      posture1: 'standing',
      posture2: 'standing',
      speech1: 'Was ist\nBewusstsein?',
      speech2: null,
      position: 'left',
      scene: 'Home',
    },
    {
      posture1: 'standing',
      posture2: 'standing',
      speech1: null,
      speech2: 'Eine interessante\nFrage!',
      position: 'right',
      scene: 'Home',
    },
    {
      posture1: 'sitting',
      posture2: 'sitting',
      speech1: 'Ist es die\nFähigkeit zu\ndenken?',
      speech2: null,
      position: 'left',
      scene: 'Whiteboard',
    },
    {
      posture1: 'sitting',
      posture2: 'sitting',
      speech1: null,
      speech2: 'Vielleicht...\naber was ist\nDenken wirklich?',
      position: 'right',
      scene: 'Wireframe',
    },
    {
      posture1: 'standing',
      posture2: 'standing',
      speech1: 'Ein\nMysterium!',
      speech2: null,
      position: 'left',
      scene: 'Plants',
    },
    {
      posture1: 'standing',
      posture2: 'standing',
      speech1: null,
      speech2: 'Ein wunderschönes\nMysterium!',
      position: 'right',
      scene: 'Plants',
    },
  ];

  return (
    <div className="comic-container">
      <h1 className="comic-title">Das Bewusstsein-Mysterium</h1>
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
                  <div className="speech-bubble">
                    <span>{frame.speech1}</span>
                  </div>
                )}
                {frame.speech2 && (
                  <div className="speech-bubble">
                    <span>{frame.speech2}</span>
                  </div>
                )}
              </div>

              <div className="characters-container">
                {/* Charakter 1 - schaut nach rechts zu Charakter 2 */}
                <div className="character character-1">
                  <HumaanCharacter
                    character={CHARACTER_1}
                    posture={frame.posture1}
                    direction="right"
                    size={220}
                  />
                </div>
                {/* Charakter 2 - schaut nach links zu Charakter 1 */}
                <div className="character character-2">
                  <HumaanCharacter
                    character={CHARACTER_2}
                    posture={frame.posture2}
                    direction="left"
                    size={300}
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
          Ein philosophisches Comic-Abenteuer mit <span className="heart">♥</span> erstellt
        </p>
        <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
          Charaktere von <a href="https://github.com/pablostanley/humaaans" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Humaaans</a> (CC BY 4.0)
        </p>
      </div>
    </div>
  );
}

// Made with Bob
