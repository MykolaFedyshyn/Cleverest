import React, { SFC } from 'react';
import './Character.scss';

const Character: SFC<{position: string}> = (position) => {
    const charStyle = {
        backgroundPosition: position.position
      };
    return (
        <div className="character" style={charStyle}>
        </div>
    );
  }

  export default Character