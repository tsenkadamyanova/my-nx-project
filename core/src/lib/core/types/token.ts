import { TokenType } from './token-type';

export type Token = {
  type: 'NUMBER' | 'OPERATOR' | 'OPEN_PARENTHESIS' | 'CLOSE_PARENTHESIS';
  value: string;
};
