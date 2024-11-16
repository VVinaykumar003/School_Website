import React from 'react';

const ImageComponent = () => {
  return (
    <div>
     <h1 style={{ textAlign: 'center' }}>School Timing</h1>
      <img 
        src="time.png"  // Path relative to the public folder
        alt="JPEG Example"
        width="100%"  // Set image width
        height="auto"  // Set image height, 'auto' maintains aspect ratio
      />
    </div>
  );
};

export default ImageComponent;
