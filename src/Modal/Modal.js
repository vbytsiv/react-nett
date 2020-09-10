import React from 'react';
import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
          
        <section className="modal-main">
        
        <div><span class="close" onClick={handleClose}>&times;</span></div>
        <div>{children}</div>
        </section>
      </div>
    );
  };

  
export default Modal;