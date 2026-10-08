import { Entity } from './entity.model';

export interface Profile extends Entity {
  name: string;
  title: string;
  headline: string;
  about: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  phone?: string;
  portfolio?: string;
}
