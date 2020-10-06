import React from 'react';
import './App.css';
import Conversor from './components/Conversor';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faExchangeAlt)

function App() {
  return (
    <div className="App">
      <h1>Easy Cambio</h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
    </div>
  );
}

export default App;