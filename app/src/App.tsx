import React from 'react';
import logo from './logo.svg';
import './App.css';
import NestedGrid from './components/NestedGrid';
import { mapCharactersValues, generateRandomOrders, getRandomValue, characters, getItemByValue, getMark } from './core/characters';

function App() {
  const orders = generateRandomOrders(9);
  const chars = mapCharactersValues(characters, 'order', orders)

  const itemValue = getRandomValue(1,9)
  const itemValue2 = getRandomValue(1,9)
  const itemValue3 = getRandomValue(1,9)
  const gameGrid = [
    [
      getItemByValue(itemValue, chars),
      getMark('plus'),
      getItemByValue(itemValue, chars), 
      getMark('plus'), 
      getItemByValue(itemValue, chars), 
      getMark('equal'),
      itemValue * 3
    ],
    [
      getItemByValue(itemValue2, chars),
      getMark('plus'),
      getItemByValue(itemValue2, chars), 
      getMark('plus'), 
      getItemByValue(itemValue2, chars), 
      getMark('equal'),
      itemValue2 * 3
    ],
    [
      getItemByValue(itemValue3, chars),
      getMark('plus'),
      getItemByValue(itemValue3, chars), 
      getMark('plus'), 
      getItemByValue(itemValue3, chars), 
      getMark('equal'),
      itemValue3 * 3
    ],
    [
      getItemByValue(itemValue, chars),
      getMark('plus'),
      getItemByValue(itemValue2, chars), 
      getMark('plus'), 
      getItemByValue(itemValue3, chars), 
      getMark('equal'),
      getMark('question'),
      itemValue + itemValue2 + itemValue3
    ]
  ]

  console.log(gameGrid);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          NestedGrid(gameGrid)
        }
      </header>
    </div>
  );
}

export default App;
