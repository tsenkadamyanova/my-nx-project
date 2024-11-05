import { Parser } from '../../types/parser';
import { failure } from './failure';
import { parseCharacter } from './parse-character';
import { success } from './success';

export const parseCloseParenthesis: Parser = (input: string) => {
  const match = /^(\))+/.exec(input);
  if (match) {
    return success(
      [{ type: 'CLOSE_PARENTHESIS', value: match[0] }],
      input.slice(match[0].length)
    );
  }
  return failure(`Expected ')'`);
};

export const parseCloseParenthesis2 = parseCharacter(')', 'CLOSE_PARENTHESIS');
