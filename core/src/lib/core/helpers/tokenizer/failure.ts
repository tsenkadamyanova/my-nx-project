import { Result } from '../../types/result';

export const failure = (reason: string): Result => ({ success: false, reason });
