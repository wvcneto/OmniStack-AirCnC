import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
    <div className="container"> {/* className pois class é reservada */}
      <img src={logo} alt="Logo"/> {/* {} inclui variavel no html */}
      <div className="content">

        {/* Rotas */}
        <Routes />

      </div>
    </div>
  );
}

export default App;
