import { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Loading = () => (
  <g>
    <text x="50%" y="50%" textAnchor="middle" fill="#999" fontSize="14">
      Loading scene...
    </text>
  </g>
);

const DynamicScene = ({ name }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadComponent = async () => {
      try {
        const module = await import(`./body-parts/scene/${name}.jsx`);
        
        if (isMounted && module) {
          setComponent(() => module.default);
        }
      } catch (error) {
        console.error(`Failed to load scene component: ${name}`, error);
      }
    };

    loadComponent();

    return () => {
      isMounted = false;
    };
  }, [name]);

  if (!Component) {
    return <Loading />;
  }

  return <Component />;
};

DynamicScene.propTypes = {
  name: PropTypes.string.isRequired,
};

const Scene = ({ name, width = 800, height = 600 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 800 600" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    >
      <Suspense fallback={<Loading />}>
        <DynamicScene name={name} />
      </Suspense>
    </svg>
  );
};

Scene.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Scene;

// Made with Bob
