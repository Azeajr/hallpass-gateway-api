import { Request } from 'express';

export interface TokenRequest extends Request {
  // TODO: username is made optional here to facilitate extending Request
  username?: string;
  roles?: number[];
}
