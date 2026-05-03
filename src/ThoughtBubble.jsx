import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThoughtBubble = ({ children, position = 'left' }) => {
  const textRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 200, height: 100 });

  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setDimensions({
        width: Math.max(130, rect.width + 20),
        height: Math.max(60, rect.height + 15)
      });
    }
  }, [children]);

  const { width, height } = dimensions;
  
  // Skalierungsfaktoren basierend auf der Textgröße
  const scaleX = width / 111;
  const scaleY = height / 95;
  
  // Position der Gedankenblasen - noch näher zur Mitte
  const bubble1X = position === 'left' ? width * 0.4 : width * 0.6;
  const bubble1Y = height + 20;
  const bubble2X = position === 'left' ? width * 0.3 : width * 0.7;
  const bubble2Y = height + 40;

  return (
    <div style={{ position: 'relative', display: 'inline-block', width, height: height + 50 }}>
      <svg
        width={width}
        height={height + 50}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        viewBox={`0 0 ${width} ${height + 50}`}
      >
        {/* Hauptwolke - skaliert basierend auf dem Original-SVG */}
        <g transform={`scale(${scaleX}, ${scaleY})`}>
          <path
            d="m 45.59,5 c 8.0639,0 15.223,3.5673 19.776,9.0873 3.0025,-2.8728 6.9985,-4.6229 11.372,-4.6229 6.9499,0 12.897,4.4052 15.494,10.719 10.212,0.61452 18.303,8.5222 18.303,18.197 0,7.1313 -4.3851,13.293 -10.783,16.294 0.0668,0.64258 0.11326,1.2886 0.11326,1.9489 0,10.322 -8.3709,18.696 -18.688,18.696 -3.382,0 -6.5512,-0.92057 -9.2876,-2.4928 -4.1566,5.7998 -11.203,9.6085 -19.187,9.6085 -10.007,0 -18.524,-6.0059 -21.746,-14.39 -2.1153,0.68143 -4.3692,1.0424 -6.7052,1.0424 -12.283,0 -22.245,-10.173 -22.245,-22.707 v -0.18129 c 0.0914,-11.371 8.3686,-20.727 19.096,-22.276 C 22.294,12.148 32.448,5 45.59,5 z"
            fill="white"
            stroke="#667eea"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>

        {/* Gedankenblasen */}
        <circle
          cx={bubble1X}
          cy={bubble1Y}
          r="12"
          fill="white"
          stroke="#667eea"
          strokeWidth="2"
        />
        <circle
          cx={bubble2X}
          cy={bubble2Y}
          r="7"
          fill="white"
          stroke="#667eea"
          strokeWidth="2"
        />
      </svg>

      <div
        ref={textRef}
        style={{
          position: 'absolute',
          top: '-15%',
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.8rem',
          color: '#333',
          fontSize: '1.1rem',
          fontFamily: "'Bangers', 'Comic Sans MS', 'Comic Sans', cursive",
          fontWeight: 400,
          lineHeight: 1.4,
          zIndex: 1,
          whiteSpace: 'pre-line',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}
      >
        {children}
      </div>
    </div>
  );
};

ThoughtBubble.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['left', 'right'])
};

export default ThoughtBubble;

// Made with Bob
