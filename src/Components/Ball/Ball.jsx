import React from 'react';

export default function Ball({ color = 'white', size = 100 }) { 
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 1; 

  return (
    <div style={{ width: size, height: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 ${size} ${size}`} 
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <ellipse
          rx={radius}
          ry={radius}
          cx={centerX}
          cy={centerY}
          fill={color}
          strokeWidth="0"
        />
      </svg>
    </div>
  );
}
