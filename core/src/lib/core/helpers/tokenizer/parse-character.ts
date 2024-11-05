import { Token } from '../../types';
import { Parser } from '../../types/parser';
import { failure } from './failure';
import { success } from './success';

export const parseCharacter: (
  char: string,
  tokenType: Token['type']
) => Parser = (char, tokenType) => (input) => {
  // TODO: revise the use of regex here
  const escapedChar = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`^${escapedChar}+`);
  const match = pattern.exec(input);

  if (match) {
    return success(
      [{ type: tokenType, value: match[0] }],
      input.slice(match[0].length)
    );
  }

  return failure(`Expected '${char}'`);
};
