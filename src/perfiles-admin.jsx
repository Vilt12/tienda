




import React, { useState } from 'react';

function JSONModal({ jsonResponse }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Mostrar JSON</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

function RES() {
    // Ejemplo de respuesta JSON
    const jsonResponse = {
      mensaje: "Este es un mensaje de ejemplo.",
      autor: "Usuario Ejemplo"
    };
  
    return (
      <div className="App">
        <JSONModal jsonResponse={jsonResponse} />
      </div>
    );
  }
export default RES;

