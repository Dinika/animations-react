import React from 'react';

import './Modal.css';

const modal = props => {
  const cssClasses = ['Modal', props.closed ? 'ModalClose' : 'ModalOpen'];
  return (
    <div className="Modal" className={cssClasses.join(' ')}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closeModal}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
