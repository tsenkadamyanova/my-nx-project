import { prodMap, prodMap2 } from './prod-map';

export const prodInts = (a: number, b: number): number => {
  if (a > b) {
    return 1;
  }

  return a * prodInts(a + 1, b);
};

export const prodInts2 = prodMap((value: number) => value);
export const prodInts3 = prodMap2((value: number) => value);
