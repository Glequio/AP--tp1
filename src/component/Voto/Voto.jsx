import React, { useState } from "react";
import "./Voto.css";

const Voto = (datos) => {
  const [contador, setContador] = useState(Number(datos.cont));

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contenedor">
      <p>{datos.name}</p>
      <label htmlFor="">{contador}</label>
      <div className="contenedor2">
        <button className="boton" onClick={decrementarContador}>
          -
        </button>
        <button className="boton" onClick={incrementarContador}>
          +
        </button>
      </div>
    </div>
  );
};

export default Voto;
