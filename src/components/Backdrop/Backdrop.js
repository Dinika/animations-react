import React from 'react';

import './Backdrop.css';

const backdrop = props => {
  const cssClasses = [
    'Backdrop',
    props.closed ? 'BackdropClose' : 'BackdropOpen'
  ];
  return <div className={cssClasses.join(' ')} />;
};

export default backdrop;
