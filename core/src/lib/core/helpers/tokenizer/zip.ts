import { Parser } from '../../types/parser';
import { failure } from './failure';
import { success } from './success';

export const zip: (parser1: Parser, parser2: Parser) => Parser =
  (parser1, parser2) => (input: string) => {
    const result1 = parser1(input);

    if (!result1.success) {
      return failure('Not a number. Not an operator.');
    }

    const result2 = parser2(result1.rest);

    if (!result2.success) {
      return failure('Not a number. Not an operator.');
    }

    return success([...result1.value, ...result2.value], result2.rest);
  };
