import React, { useState } from 'react';

function FormularioNota({ agregarNota }) {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevaNota = {
      id: Date.now(),
      titulo,
      contenido,
      favorita: false,
    };
    agregarNota(nuevaNota);
    setTitulo('');
    setContenido('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Título:
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </label>
      <label>
        Contenido:
        <input
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />
      </label>
      <button type="submit">Agregar Nota</button>
    </form>
  );
}

export default FormularioNota;
