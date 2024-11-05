import { factorial } from './factorial';
import { sumMap, sumMap2 } from './sum-map';

export const sumFactorial = (a: number, b: number, sum = 0): number => {
  if (a > b) {
    return sum;
  }

  return sumFactorial(a + 1, b, sum + factorial(a));
};

export const sumFactorial2 = sumMap(factorial);

export const sumFactorial3 = sumMap2(factorial);
