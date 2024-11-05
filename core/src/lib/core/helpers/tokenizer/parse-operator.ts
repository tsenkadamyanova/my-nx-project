import { Parser } from '../../types/parser';
import { choice } from './choice';
import { failure } from './failure';
import { parseCharacter } from './parse-character';
import { success } from './success';

export const parseOperator: Parser = (input: string) => {
  const match = /^(\+|-)+/.exec(input);
  if (match) {
    return success(
      [{ type: 'OPERATOR', value: match[0] }],
      input.slice(match[0].length)
    );
  }
  return failure(`Expected '+ or -'`);
};

export const parseOperator2 = choice(
  parseCharacter('+', 'OPERATOR'),
  parseCharacter('-', 'OPERATOR')
);
