import React from 'react';

const Logo = () => {
  return (
    <div className="flex justify-center mb-8">
      <img 
        src="./src/assets/pcte-logo.png" 
        alt="PCTE Logo"
        className="w-30 h-30 rounded-lg shadow-md"
      />
    </div>
  );
};

export default Logo;