import React from "react";
import './Voto.css'

const Voto =(datos) =>{
  return(
    <div class="contenedor">
      <p>{datos.name}</p>
      <label htmlFor="">{datos.cont}</label>
      <div class="contenedor2">
        <button class="boton">-</button>
        <button class="boton">+</button>
      </div>
      
    </div>
  )
}
export default Voto