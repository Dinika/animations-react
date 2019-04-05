import React from 'react';

import './Modal.css';

const modal = props => {
  const cssClasses = [
    'Modal',
    props.closed === 'exiting'
      ? 'ModalClose'
      : props.closed === 'entering'
      ? 'ModalOpen'
      : null
  ];
  return (
    <div className={cssClasses.join(' ')}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closeModal}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
