import React from "react";
import { useEffect, useState } from "react";
import FormMusic from "./components/FormMusic";
import ContentLetra from "./components/ContentLetra";
import ContentArtist from "./components/ContentArtist";
import './SearchMusic.css'

const SearchMusic = () => {

  const handleSearch = (data) =>{
    console.log(data)
  }

  return (
    <div>
      <h3 className="titulo">BUSCADOR DE CANCIONES</h3>
      <div className="contenedorForm">
        <FormMusic handleSearch={handleSearch}/>
      </div>
      <div className="contenedorContenido">
      <ContentLetra/>
      <ContentArtist/>
      </div>
    </div>
  );
};

export default SearchMusic;
