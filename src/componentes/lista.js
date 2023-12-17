import React from 'react';

function ListaNotas({ notas, editarNota, eliminarNota, marcarComoFavorita }) {
  return (
    <ul>
      {notas.map((nota) => (
        <li key={nota.id}>
          <h2>{nota.titulo}</h2>
          <p>{nota.contenido}</p>
          <button onClick={() => editarNota(nota.id, prompt('Editar nota:', nota.contenido))}>
            Editar
          </button>
          <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
          <button onClick={() => marcarComoFavorita(nota.id)}>
            {nota.favorita ? 'Quitar de favoritos' : 'Marcar como favorita'}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaNotas;
