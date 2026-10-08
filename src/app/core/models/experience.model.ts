import { Entity } from './entity.model';

export interface Experience extends Entity {
  role: string;
  company: string;
  location: string;
  type: 'hybrid' | 'remote' | 'on-site';
  start: string;
  end: string | null;
  current: boolean;
  points: string[];
}
