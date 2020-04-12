export type Characters = {
  name: string,
  value: number,
  isSimple: boolean,
  isDifficult?: boolean,
  extraValue?: number,
  position?: string
};

export const characters: Characters[] = [
  {
    name: 'white_kitty',
    value: 0,
    isSimple: true,
    position: '-305px -20px'
  },
  {
    name: 'red_flower',
    value: 0,
    isSimple: true,
    position: '-7px -17px'
  },
  {
    name: 'black_bow',
    value: 0,
    isSimple: true,
    position: '-158px -20px'
  },
  {
    name: 'violet_bow',
    value: 0,
    isSimple: true,
    position: '-7px -170px'
  },
  {
    name: 'black_kitty',
    value: 0,
    isSimple: false,
    extraValue: 0,
    position: '-158px -167px'
  },
  {
    name: 'pink_bow',
    value: 0,
    isSimple: true,
    position: '140px -170px'
  },
  {
    name: 'white_kitty',
    value: 0,
    isSimple: false,
    extraValue: 0,
    position: '-7px 130px'
  },
  {
    name: 'white_kitty',
    value: 0,
    isSimple: false,
    isDifficult: true,
    extraValue: 0,
    position: '292px -308px'
  },
  {
    name: 'flowers',
    value: 0,
    isSimple: true,
    position: '140px -320px'
  }
];
