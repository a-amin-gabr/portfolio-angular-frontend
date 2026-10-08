import { Entity } from './entity.model';

export interface Project extends Entity {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
  status: 'live' | 'in-progress' | 'archived';
  highlights: string[];
}
