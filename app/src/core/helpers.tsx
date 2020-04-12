import { Characters } from "./characters";

export function getRandomValue(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  export function generateRandomOrders(length: number): number[] {
    let array: number[];
    let i: number;
    for (array=[], i=0; i<length; ++i) array[i]=i;
  
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }
  
  export function mapCharactersValues(chars: any[], prop: any, values: any[]) {
    let i = 0;
    for (let char of chars) {
      char[prop] = values[i];
      i++;
    }
    return chars;
  }
  
  export function getItemByValue(value: number, chars: Characters[]) {
    return chars.find((char) => char.value === value);
  }
  
  export function getMark(value: string) {
    switch (value) {
      case 'plus':
        return '+';
      case 'minus':
        return '-';
      case 'equal':
        return '=';
      case 'multiple':
        return '×'
      case 'divide':
        return '÷';
      case 'question':
        return '?';
      default: return '';
    }
  }

  export function getResult(mark1: string, mark2: string, val1: number, val2: number, val3: number): number {
    let mark;
    if (mark1 === mark2) {
      mark = mark1;
      switch (mark) {
        case 'plus':
          return val1 + val2 + val3;
        case 'minus':
          return val1 - val2 - val3;
        case 'multiple':
          return val1 * val2 * val3;
        case 'divide':
          return val1/val2/val3;
        default: return 0;
      }
    } else {
      switch (mark1 + '/' + mark2) {
        case 'plus/minus':
          return val1 + val2 - val3;
        case 'plus/divide':
            return val1+val2/val3;
        case 'plus/multiple':
          return val1+val2*val3;
        case 'minus/plus':
          return val1 - val2 + val3;
        case 'minus/divide':
            return val1-val2/val3;
        case 'minus/multiple':
          return val1-val2*val3;
        case 'multiple/plus':
          return val1 * val2 + val3;
        case 'multiple/minus':
          return val1 * val2 - val3;
        case 'multiple/divide':
            return val1*val2/val3;
        case 'divide/multiple':
          return val1/val2*val3;
        case 'divide/plus':
          return val1/val2 + val3;
        case 'divide/minus':
          return val1/val2 - val3;
        default: return 0;
      }
    }
  }