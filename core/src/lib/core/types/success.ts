import { Token } from './token';

export type Success = {
  success: true;
  value: Token[];
  rest: string;
};
