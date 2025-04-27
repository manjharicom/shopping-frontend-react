import React from 'react';
import "@/app/ui/styles/modal.css";

const Modal = ({ isOpen, onClose, data, onReturn }) => {
  if (!isOpen) return null;

  const handleReturn = () => {
    // Send some value back — you can customize this
    onReturn(data);
    onClose(); // Close after returning, optional
  }; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">Close</button>
        <h2>Modal Data</h2>
        <pre className="modal-json">{JSON.stringify(data, null, 2)}</pre>
        <button onClick={handleReturn}>Return This Data</button>
      </div>
    </div>
  );
};

export default Modal;
