import { Certificate } from './certificate.model';
import { Experience } from './experience.model';
import { Profile } from './profile.model';
import { Project } from './project.model';
import { Skill } from './skill.model';

export interface PortfolioData {
  profile: Profile | null;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  certificates: Certificate[];
}
