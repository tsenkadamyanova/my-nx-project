export const mapReduce: (
  mapFn: (value: number) => number,
  reduceFn: (first: number, second: number) => number,
  zero: number
) => (a: number, b: number) => number = (mapFn, reduceFn, zero) => (a, b) => {
  if (a === b) {
    return mapFn(a);
  }

  return reduceFn(mapFn(a), mapReduce(mapFn, reduceFn, zero)(a + 1, b));
};

export const mapReduce2: (
  reduceFn: (first: number, second: number) => number,
  zero: number
) => (mapFn: (value: number) => number) => (a: number, b: number) => number =
  (reduceFn, zero) => (mapFn) => (a, b) => {
    if (a === b) return mapFn(a);

    return reduceFn(mapFn(a), mapReduce2(reduceFn, zero)(mapFn)(a + 1, b));
  };
