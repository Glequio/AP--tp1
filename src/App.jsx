import React from "react";
import Voto from "./component/Voto/Voto";
import "./App.css";

function App() {
  return (
    <>
      <p className="titulo">Boca de Urnas</p>
      <div>
        <Voto name="Candidato 1" cont="0" />
        <Voto name="Candidato 2" cont="0" />
      </div>
    </>
  );
}

export default App;
