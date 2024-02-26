import React from 'react';
import './TitleBar.css';

const TitleBar = () => {
  return (
    <div className="title-bar flex justify-between items-center px-4 py-2 rounded-t-lg">
      <div className="flex gap-2">
        <div className="ball-father ball-red">
          <div className="ball ball-1"></div>
          <div className="ball ball-2"></div>
          <div className="ball ball-3"></div>
        </div>
        <div className="ball-father ball-yellow">
          <div className="ball ball-1"></div>
          <div className="ball ball-2"></div>
          <div className="ball ball-3"></div>
        </div>
        <div className="ball-father ball-green">
          <div className="ball ball-1"></div>
          <div className="ball ball-2"></div>
          <div className="ball ball-3"></div>
        </div>
      </div>
      <div className="text-lg font-bold">Canteranos</div>
    </div>
  );
};

export { TitleBar };
