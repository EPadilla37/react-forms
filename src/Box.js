import React from 'react';

function Box({ width, height, backgroundColor, removeBox, id }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
  };

  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div className="box" style={boxStyle}>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
