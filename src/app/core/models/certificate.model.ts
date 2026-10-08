import { Entity } from './entity.model';

export interface Certificate extends Entity {
  name: string;
  code: string;
  issuer: string;
  date: string;
  expires?: string;
  image: string;
  credentialUrl: string;
  status: 'active' | 'expired';
}
