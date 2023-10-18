import React from 'react';
import CadastroReserva from '../components/CadastroReserva';

const CadastroPage = ({ onSave }) => {
  return <CadastroReserva onSave={onSave} />;
};

export default CadastroPage;
