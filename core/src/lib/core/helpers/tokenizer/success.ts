import { Token } from '../../types';
import { Result } from '../../types/result';

export const success = (value: Token[], rest: string): Result => ({
  success: true,
  value: value,
  rest,
});
