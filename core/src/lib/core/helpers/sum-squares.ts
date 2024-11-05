import { sumMap } from './sum-map';

export const sumSquares = (a: number, b: number): number => {
  if (a > b) {
    return 0;
  }

  return a * a + sumSquares(a + 1, b);
};

export const sumScquares2 = sumMap((x) => x * x);
