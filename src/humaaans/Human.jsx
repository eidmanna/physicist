import { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_WIDTH_IN_PX = 380;
const DEFAULT_SITTING_HEIGHT_IN_PX = 400;
const DEFAULT_STANDING_HEIGHT_IN_PX = 480;
const POSTURE_OPTION_SITTING = 'sitting';
const DIRECTION_OPTION_LEFT = 'left';
const SITTING_HEIGHT_ADJUSTMENT_IN_PX = 24;
const STANDING_HEIGHT_ADJUSTMENT_IN_PX = 31;
const STANDING_HEIGHT_TO_WIDTH_RATIO = DEFAULT_STANDING_HEIGHT_IN_PX / DEFAULT_WIDTH_IN_PX;
const SITTING_HEIGHT_TO_WIDTH_RATIO = DEFAULT_SITTING_HEIGHT_IN_PX / DEFAULT_WIDTH_IN_PX;

function setHeightFromSizeAndPosture(size, posture) {
  const width = size || DEFAULT_WIDTH_IN_PX;
  const heightToWidthRatio = setHeightToWidthRatioFromPosture(posture);
  return width * heightToWidthRatio;
}

function setHeightAdjustmentFromPosture(posture) {
  const heightAdjustment = posture === POSTURE_OPTION_SITTING 
    ? SITTING_HEIGHT_ADJUSTMENT_IN_PX 
    : STANDING_HEIGHT_ADJUSTMENT_IN_PX;
  return `translate(40.000000, ${heightAdjustment})`;
}

function setHeightToWidthRatioFromPosture(posture) {
  return posture === POSTURE_OPTION_SITTING 
    ? SITTING_HEIGHT_TO_WIDTH_RATIO
    : STANDING_HEIGHT_TO_WIDTH_RATIO;
}

function setHorizontalDirection(direction) {
  if (direction === DIRECTION_OPTION_LEFT) {
    return 'translate(190.000000, 200.500000) scale(-1, 1) translate(-190.000000, -200.500000)';
  }
  return '';
}

function setViewBox(posture) {
  const height = posture === POSTURE_OPTION_SITTING
    ? DEFAULT_SITTING_HEIGHT_IN_PX
    : DEFAULT_STANDING_HEIGHT_IN_PX;
  return `0 0 ${DEFAULT_WIDTH_IN_PX} ${height}`;
}


// Loading component
const Loading = () => (
  <g>
    <text x="50%" y="50%" textAnchor="middle" fill="#999" fontSize="14">
      Loading...
    </text>
  </g>
);

// Dynamic component loader
const DynamicBodyPart = ({ type, name, posture, color1, color2 }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadComponent = async () => {
      try {
        let module;
        if (type === 'head') {
          module = await import(`./body-parts/head/${name}.jsx`);
        } else if (type === 'torso') {
          module = await import(`./body-parts/torso/${name}.jsx`);
        } else if (type === 'bottom') {
          const directory = posture === 'sitting' ? 'sitting' : 'standing';
          module = await import(`./body-parts/${directory}/${name}.jsx`);
        }
        
        if (isMounted && module) {
          setComponent(() => module.default);
        }
      } catch (error) {
        console.error(`Failed to load ${type} component: ${name}`, error);
      }
    };

    loadComponent();

    return () => {
      isMounted = false;
    };
  }, [type, name, posture]);

  if (!Component) {
    return <Loading />;
  }

  return <Component color1={color1} color2={color2} />;
};

DynamicBodyPart.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  posture: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
};

const Human = ({ size, head, torso, bottom, posture = 'standing', direction = 'right', bottomColor1, bottomColor2 }) => {
  const height = setHeightFromSizeAndPosture(size, posture);
  const heightAdjustmentFromPosture = setHeightAdjustmentFromPosture(posture);
  const horizontalDirectionModifier = setHorizontalDirection(direction);
  const viewBox = setViewBox(posture);

  return (
    <svg 
      height={height} 
      width={size || DEFAULT_WIDTH_IN_PX} 
      version="1.1" 
      viewBox={viewBox} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="humaaans" fillRule="evenodd" strokeWidth="1">
        <g 
          id={`a-${posture}-human`} 
          transform={`${horizontalDirectionModifier} ${heightAdjustmentFromPosture}`}
        >
          <g id="HEAD" transform="translate(82.000000, 0.000000)">
            <Suspense fallback={<Loading />}>
              <DynamicBodyPart type="head" name={head} />
            </Suspense>
          </g>
          <g id="BOTTOM" transform="translate(0.000000, 187.000000)">
            <Suspense fallback={<Loading />}>
              <DynamicBodyPart type="bottom" name={bottom} posture={posture} color1={bottomColor1} color2={bottomColor2} />
            </Suspense>
          </g>
          <g id="TORSO" transform="translate(22.000000, 82.000000)">
            <Suspense fallback={<Loading />}>
              <DynamicBodyPart type="torso" name={torso} />
            </Suspense>
          </g>
        </g>
      </g>
    </svg>
  );
};

Human.propTypes = {
  size: PropTypes.number,
  head: PropTypes.string.isRequired,
  torso: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
  posture: PropTypes.string,
  direction: PropTypes.string,
  bottomColor1: PropTypes.string,
  bottomColor2: PropTypes.string,
};

export default Human;

// Made with Bob
