import React from "react";
import "./LluviaDecafe.css";
function LluviaDeCafe() {
    const numSpans = 30; // Cantidad de elementos <span>
    const minRandomValue = 1; // Valor mínimo aleatorio
    const maxRandomValue = 50; // Valor máximo aleatorio
  
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    const spans = Array.from({ length: numSpans }, (_, i) => (
      <span key={i} style={{ "--i": getRandomInt(minRandomValue, maxRandomValue) }}></span>
    ));
  
    return (
      <div className="Background-particles">
        <div className="particles_">{spans}</div>
      </div>
    );
  }
export default LluviaDeCafe;