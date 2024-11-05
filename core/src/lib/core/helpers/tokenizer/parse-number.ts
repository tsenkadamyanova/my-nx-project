import { Parser } from '../../types/parser';
import { failure } from './failure';
import { success } from './success';

export const parseNumber: Parser = (input: string) => {
  const match = /^\d+/.exec(input);
  if (match) {
    return success(
      [{ type: 'NUMBER', value: match[0] }],
      input.slice(match[0].length)
    );
  }
  return failure('Not a number');
};
