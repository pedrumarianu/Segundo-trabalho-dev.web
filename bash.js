/src
  /components
    CadastroReserva.js
    ListarVagas.js
  /pages
    CadastroPage.js
    ListarPage.js
  App.js
  index.js
  npm install react-router-dom

import React, { useState } from 'react';

const CadastroReserva = ({ onSave }) => {
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    numeroApartamento: '',
    blocoApartamento: '',
    modeloVeiculo: '',
    corVeiculo: '',
    numeroVaga: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div>
      <h2>Cadastro de Reserva</h2>
      <form>
        <label>
          Placa do Veículo:
          <input
            type="text"
            name="placa"
            value={formData.placa}
            onChange={handleInputChange}
          />
        </label>
        {/* Adicione os outros campos do formulário semelhantemente */}
        <button type="button" onClick={handleSave}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default CadastroReserva;

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
import React from 'react';
import CadastroReserva from '../components/CadastroReserva';

const CadastroPage = ({ onSave }) => {
  return <CadastroReserva onSave={onSave} />;
};

export default CadastroPage;
import React from 'react';
import ListarVagas from '../components/ListarVagas';

const ListarPage = ({ vagas }) => {
  return <ListarVagas vagas={vagas} />;
};

export default ListarPage;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CadastroPage from './pages/CadastroPage';
import ListarPage from './pages/ListarPage';

const App = () => {
  const [vagas, setVagas] = useState([]);

  const handleSave = (formData) => {
    setVagas([...vagas, formData]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/cadastro">Cadastro de Reserva</Link>
            </li>
            <li>
              <Link to="/listar">Listar Vagas</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/cadastro" render={() => <CadastroPage onSave={handleSave} />} />
        <Route path="/listar" render={() => <ListarPage vagas={vagas} />} />
      </div>
    </Router>
  );
};

export default App;

