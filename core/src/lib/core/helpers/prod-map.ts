import { mapReduce2 } from './map-reduce';

export const prodMap =
  (mapFn: (value: number) => number) =>
  (a: number, b: number): number => {
    return mapFn(a) * (a === b ? 1 : prodMap(mapFn)(a + 1, b));
  };

export const prodMap2 = mapReduce2((first, second) => first * second, 1);
