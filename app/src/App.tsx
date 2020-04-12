import React from 'react';
import logo from './logo.svg';
import './App.css';
import NestedGrid from './components/NestedGrid';
import { getGameGrid, getAnswer } from './core/gameEngine';

function App() {
  const gameGrid = getGameGrid();
  const answer = getAnswer();

  console.log(gameGrid);
  return (
    <div className="App">
      <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        {
          NestedGrid(gameGrid, answer)
        }
      </div>
    </div>
  );
}

export default App;
