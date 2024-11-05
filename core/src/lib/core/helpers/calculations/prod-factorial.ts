import { factorial } from './factorial';
import { prodMap, prodMap2 } from './prod-map';

export const prodFactorial = (a: number, b: number, prod = 1): number => {
  if (a > b) {
    return prod;
  }

  return prodFactorial(a + 1, b, prod * factorial(a));
};

export const prodFactorial2 = prodMap(factorial);
export const prodFactorial3 = prodMap2(factorial);
