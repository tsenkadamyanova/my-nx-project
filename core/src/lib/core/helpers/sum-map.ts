import { mapReduce2 } from './map-reduce';

export const sumMap =
  (mapFn: (value: number) => number) =>
  (a: number, b: number): number => {
    return mapFn(a) + (a === b ? 0 : sumMap(mapFn)(a + 1, b));
  };

export const sumMap2 = mapReduce2((first, second) => first + second, 0);
