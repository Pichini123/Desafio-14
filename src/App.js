import React, { useState } from 'react';
import FormularioNota from './componentes/formulario';
import ListaNotas from './componentes/lista';
import  './App.css';

function App() {
  const [notas, setNotas] = useState([]);

  const agregarNota = (nuevaNota) => {
    setNotas([...notas, nuevaNota]);
  };

  const editarNota = (id, nuevoContenido) => {
    const nuevasNotas = notas.map((nota) =>
      nota.id === id ? { ...nota, contenido: nuevoContenido } : nota
    );
    setNotas(nuevasNotas);
  };

  const eliminarNota = (id) => {
    const nuevasNotas = notas.filter((nota) => nota.id !== id);
    setNotas(nuevasNotas);
  };

  const marcarComoFavorita = (id) => {
    const nuevasNotas = notas.map((nota) =>
      nota.id === id ? { ...nota, favorita: !nota.favorita } : nota
    );
    setNotas(nuevasNotas);
  };

  return (
    <div>
      <h1>App lista notas</h1>
      <FormularioNota agregarNota={agregarNota} />
      <ListaNotas
        notas={notas}
        editarNota={editarNota}
        eliminarNota={eliminarNota}
        marcarComoFavorita={marcarComoFavorita}
      />
    </div>
  );
}

export default App;
