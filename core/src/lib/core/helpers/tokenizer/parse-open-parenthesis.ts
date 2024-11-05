import { Parser } from '../../types/parser';
import { failure } from './failure';
import { parseCharacter } from './parse-character';
import { success } from './success';

export const parseOpenParenthesis: Parser = (input: string) => {
  const match = /^(\()+/.exec(input);
  if (match) {
    return success(
      [{ type: 'OPEN_PARENTHESIS', value: match[0] }],
      input.slice(match[0].length)
    );
  }
  return failure(`Expected '('`);
};

export const parseOpenParenthesis2 = parseCharacter('(', 'OPEN_PARENTHESIS');
