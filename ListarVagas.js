import React from 'react';

const ListarVagas = ({ vagas }) => {
  return (
    <div>
      <h2>Listar Vagas</h2>
      <ul>
        {vagas.map((vaga, index) => (
          <li key={index}>
            {vaga.placa} - {vaga.proprietario} - {vaga.numeroVaga}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarVagas;
