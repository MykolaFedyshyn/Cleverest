import { generateRandomOrders, mapCharactersValues, getRandomValue, getItemByValue, getMark, getResult } from "./helpers";
import { characters } from "./characters";

const values = generateRandomOrders(9);
const chars = mapCharactersValues(characters, 'value', values)
const marks = ['plus', 'minus', 'multiple', 'divide'];

const itemValue = getRandomValue(1,9)
const itemValue2 = getRandomValue(1,9)
const itemValue3 = getRandomValue(1,9)
const answer = itemValue + itemValue2 + itemValue3;
const mark1 = marks[getRandomValue(0,4)]
const mark2 = marks[getRandomValue(0,4)]

const gameGrid = [
  [
    getItemByValue(itemValue, chars),
    getMark(mark1),
    getItemByValue(itemValue, chars), 
    getMark(mark2), 
    getItemByValue(itemValue, chars), 
    getMark('equal'),
    getResult(mark1, mark2, itemValue, itemValue, itemValue)
  ],
  [
    getItemByValue(itemValue2, chars),
    getMark(mark1),
    getItemByValue(itemValue2, chars), 
    getMark(mark2),
    getItemByValue(itemValue2, chars), 
    getMark('equal'),
    getResult(mark1, mark2, itemValue2, itemValue2, itemValue2)
  ],
  [
    getItemByValue(itemValue3, chars),
    getMark(mark1),
    getItemByValue(itemValue3, chars), 
    getMark(mark2),
    getItemByValue(itemValue3, chars), 
    getMark('equal'),
    getResult(mark1, mark2, itemValue3, itemValue3, itemValue3)
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

export function getGameGrid() {
    return gameGrid;
}

export function getAnswer() {
    return answer;
}
