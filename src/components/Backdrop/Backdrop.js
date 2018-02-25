import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const cssClasses = ['Backdrop', props.show ? 'BackdropOpened' : 'BackdropClosed'];

  return (
    <div className={cssClasses.join(' ')} onClick={props.clicked}></div>
  );
};

export default backdrop;
