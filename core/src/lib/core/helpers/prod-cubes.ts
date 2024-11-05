import { prodMap, prodMap2 } from './prod-map';

export const prodCubes = (a: number, b: number): number => {
  if (a > b) {
    return 1;
  }

  return a * a * a * prodCubes(a + 1, b);
};

export const prodCubes2 = prodMap((value: number) => value * value * value);
export const prodCubes3 = prodMap2((value: number) => value * value * value);
