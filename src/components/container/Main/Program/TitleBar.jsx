import React from 'react';
import './TitleBar.css';

const TitleBar = () => {
  const colors = ['red', 'yellow', 'green'];

  return (
    <div className="title-bar flex justify-between items-center px-4 py-2 rounded-t-lg">
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div key={index} className={`ball-father ball-${color}`}>
            {colors.map((_, ballNumber) => (
              <div
                key={ballNumber}
                className={`ball ball-${ballNumber + 1}`}></div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-lg font-bold">Canteranos</div>
    </div>
  );
};

export { TitleBar };
