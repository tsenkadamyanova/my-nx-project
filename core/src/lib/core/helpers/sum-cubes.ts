import { cubes } from './cubes';
import { sumMap, sumMap2 } from './sum-map';

export const sumCubes = (a: number, b: number): number => {
  if (a > b) {
    return 0;
  }

  return a * a * a + sumCubes(a + 1, b);
};

export const sumCubes2 = sumMap((x) => x * x * x);

export const sumCubes3 = sumMap2(cubes);
