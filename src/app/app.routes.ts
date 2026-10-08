import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Layout } from './layout/layout';
import { Home } from './layout/home/home';
import { Projects } from './layout/projects/projects';
import { Certifications } from './layout/certifications/certifications';
import { ExperienceView } from './layout/experience/experience';
import { Contact } from './layout/contact/contact';
import { Overview } from './dashboard/overview/overview';
import { ProfileForm } from './dashboard/profile-form/profile-form';
import { SkillsForm } from './dashboard/skills-form/skills-form';
import { ProjectsForm } from './dashboard/projects-form/projects-form';
import { ExperienceForm } from './dashboard/experience-form/experience-form';
import { CertificatesForm } from './dashboard/certificates-form/certificates-form';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', pathMatch: 'full', component: Home },
      { path: 'work', component: Projects },
      { path: 'certifications', component: Certifications },
      { path: 'experience', component: ExperienceView },
      { path: 'contact', component: Contact },
    ],
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', component: Overview },
      { path: 'profile', component: ProfileForm },
      { path: 'projects', component: ProjectsForm },
      { path: 'skills', component: SkillsForm },
      { path: 'experience', component: ExperienceForm },
      { path: 'certificates', component: CertificatesForm },
    ],
  },
  { path: '**', redirectTo: '' },
];
