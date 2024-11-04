export const sumInts = (a: number, b: number): number => {
  return a > b ? 0 : a + sumInts(a + 1, b);
};
