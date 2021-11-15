import React, { useState, useEffect } from 'react';

export default function Controls (props) {
  const [showBorder, setShowBorder] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    props.onChange({ showBorder });
  }, [showBorder]);

  const style = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    right: '10px',
    top: '100px',
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    fontSize: '22px',
    backgroundColor: 'white',
    border: 'solid 2px #ccc',
    borderRadius: '5px',
    zIndex: 100,
    cursor: 'pointer',
  };

  const hoverStyle = {
    ...style,
    backgroundColor: '#f4f4f4',
  };

  return <div style={isHovering ? hoverStyle : style} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={() => setShowBorder(!showBorder)}>
    B
  </div>;
}
