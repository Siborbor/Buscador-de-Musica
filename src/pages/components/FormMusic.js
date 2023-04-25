import React,{ useState } from "react";
import "./FormMusic.css";

const intialForm = {
  artista: "",
  song: "",
};

const FormMusic = ({handleSearch}) => {
  const [form, setForm] = useState(intialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!form.artista || !form.song){
      alert("datos incompletos");
      return;
    }

    handleSearch(form);
    setForm(intialForm);
  }

  return (
    <div>
      <form className="contenedorForm" onSubmit={handleSubmit}>
        <div className="contenedorInput">
          <label className="labelForm">Artista</label>
          <input
            className="inputForm"
            type="text"
            name="artista"
            value={form.artista}
            onChange={handleChange}
          />
        </div>
        <div className="contenedorInput">
          <label className="labelForm">Musica</label>
          <input
            className="inputForm"
            type="text"
            name="song"
            value={form.song}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormMusic;
