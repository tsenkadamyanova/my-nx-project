import { Parser } from '../../types/parser';
import { failure } from './failure';
import { success } from './success';
import { zip } from './zip';

const isEmpty: Parser = (input) => {
  if (input == '') return success([], '');
  else return failure('Not an empty string');
};
// TODO: fix this function
export function doUntil(parser: Parser): Parser {
  return (input: string) => {
    const parseResult = parser(input);

    if (!parseResult.success) {
      return (
        isEmpty(input) ||
        failure(`Choice parser: All choices failed on input: "${input}"`)
      );
    } else {
      const recursiveResult = doUntil(parser)(parseResult.rest);

      if (!recursiveResult.success) {
        return success(parseResult.value, input);
      } else {
        return success(
          [...parseResult.value, ...recursiveResult.value],
          recursiveResult.rest
        );
      }
    }
  };
}
