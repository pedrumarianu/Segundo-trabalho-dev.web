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
