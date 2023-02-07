import React from "react";
import FormMusic from "./components/FormMusic";
import ContentLetra from "./components/ContentLetra";
import ContentArtist from "./components/ContentArtist";
import './SearchMusic.css'

const SearchMusic = () => {
  return (
    <div>
      <h3 className="titulo">BUSCADOR DE CANCIONES</h3>
      <FormMusic/>
      <div>
      <ContentLetra/>
      <ContentArtist/>
      </div>
    </div>
  );
};

export default SearchMusic;
