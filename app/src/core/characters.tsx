export type Characters = {
  name: string,
  order: any,
  value: number,
  isSimple: boolean,
  isDifficult?: boolean,
  extraValue?: number,
  position?: string
};

export const characters: Characters[] = [
  {
    name: 'white_kitty',
    order: 0,
    value: getRandomValue(1,12),
    isSimple: true,
    position: '-305px -20px'
  },
  {
    name: 'red_flower',
    order: 0,
    value: getRandomValue(1,12),
    isSimple: true,
    position: '-7px -7px'
  },
  {
    name: 'black_bow',
    order: 0,
    value: getRandomValue(1,12),
    isSimple: true,
    position: '-158px -7px'
  },
  {
    name: 'violet_bow',
    order: 0,
    value: getRandomValue(1,12),
    isSimple: true,
    position: '-7px -150px'
  },
  {
    name: 'black_kitty',
    order: 0,
    value: getRandomValue(1,12),
    isSimple: false,
    extraValue: 0,
    position: '-158px -150px'
  },
  {
    name: 'pink_bow',
    order: 0,
    value: getRandomValue(1,12),
    isSimple: true,
    position: '140px -150px'
  },
  {
    name: 'white_kitty',
    order: 0,
    value: getRandomValue(1,12),
    isSimple: false,
    extraValue: 0,
    position: '-7px 140px'
  },
  {
    name: 'white_kitty',
    order: 0,
    value: getRandomValue(1,12),
    isSimple: false,
    isDifficult: true,
    extraValue: 0,
    position: '292px -308px'
  },
  {
    name: 'flowers',
    order: 0,
    value: getRandomValue(1,12),
    isSimple: true,
    position: '140px -300px'
  }
];

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
  return chars.find((char) => char.order === value);
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
      return 'x'
    case 'divide':
      return '%';
    case 'question':
      return '?';
    default: return '';
  }
}