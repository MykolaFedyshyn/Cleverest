import React from 'react';
import logo from './logo.svg';
import './App.css';
import NestedGrid from './components/NestedGrid';
import getGameGrid from './core/gameEngine';

function App() {
  const gameGrid = getGameGrid();

  console.log(gameGrid);
  return (
    <div className="App">
      <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        {
          NestedGrid(gameGrid)
        }
      </div>
    </div>
  );
}

export default App;
