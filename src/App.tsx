import React from 'react';
import Bots from './components/Bots';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>telebots 🤖</h1>
        <Bots />
      </header>
    </div>
  );
}

export default App;
