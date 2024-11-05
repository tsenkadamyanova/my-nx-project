import { Parser } from '../../types/parser';
import { failure } from './failure';

export const choice =
  (p1: Parser, p2: Parser): Parser =>
  (input: string) => {
    const result = p1(input);
    return result.success ? result : p2(input);
  };

export const choiceN: (parsers: Parser[]) => Parser =
  (parsers) => (input: string) => {
    const result = parsers.reduce((acc, parser) => {
      if (acc.success) {
        return acc;
      }
      return parser(input);
    }, failure('Initial failure'));

    if (result.success) {
      return result;
    }

    return failure('Choice parser: All choices failed on input');
  };
