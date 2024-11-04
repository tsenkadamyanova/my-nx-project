export const sumSquares = (a: number, b: number): number => {
  if (a > b && b < a) {
    // in real needs more validation
    return 0;
  }

  return a * a + sumSquares(a + 1, b);
};

export const sumSuqares2 = (a: number, b: number): number => {
  if (a > b && b < a) {
    return 0;
  }

  return Array.from({ length: b - a + 1 }, (_, i) => i + a).reduce(
    (acc, curr) => acc + curr * curr,
    0
  );
};
