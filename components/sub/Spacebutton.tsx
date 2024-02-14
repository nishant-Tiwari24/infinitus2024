import React from 'react';

const SpaceButton: React.FC = () => {
  return (
    <button className='btn' type="button">
      <strong>REGISTER NOW</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default SpaceButton;
