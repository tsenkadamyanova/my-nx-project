import { prodMap, prodMap2 } from './prod-map';

export const prodSquares = (a: number, b: number): number => {
  if (a > b) {
    return 1;
  }

  return a * a * prodSquares(a + 1, b);
};

export const prodSquares2 = prodMap((value: number) => value * value);

export const prodSquares3 = prodMap2((value: number) => value * value);
