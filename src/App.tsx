import React from 'react';
import Bots from './components/Bots';
import Footer from './components/Footer';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>telebots 🤖</h1>
        <Bots />
      </header>
      <Footer />
    </div>
  );
}

export default App;
