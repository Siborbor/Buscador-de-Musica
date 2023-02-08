import React from "react";
import "./FormMusic.css";

const formMusic = () => {
  return (
    <div>
      <form className="contenedorForm">
        <div className="contenedorInput">
          <label className="labelForm">Artista</label>
          <input className="inputForm"></input>
        </div>
        <div className="contenedorInput">
          <label className="labelForm">Musica</label>
          <input className="inputForm"></input>
        </div>
      </form>
    </div>
  );
};

export default formMusic;
