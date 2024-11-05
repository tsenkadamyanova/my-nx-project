import { sumMap, sumMap2 } from './sum-map';

export const sumInts = (a: number, b: number): number => {
  return a > b ? 0 : a + sumInts(a + 1, b);
};

export const sumInts2 = sumMap((x) => x);

export const sumInts3 = sumMap2((x) => x);
