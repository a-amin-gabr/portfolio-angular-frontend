import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, forkJoin, of, shareReplay } from 'rxjs';
import { Certificate } from '../models/certificate.model';
import { Experience } from '../models/experience.model';
import { Profile } from '../models/profile.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { DEFAULT_PORTFOLIO } from '../data/portfolio.defaults';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private api = 'http://localhost:3000/api';
  private http = inject(HttpClient);
  private portfolio$ = this.loadPortfolio().pipe(shareReplay({ bufferSize: 1, refCount: true }));

  getPortfolioData() {
    return this.portfolio$;
  }

  private loadPortfolio() {
    const api = this.api;
    return forkJoin({
      profile: this.http.get<Profile>(`${api}/profile`).pipe(catchError(() => of(DEFAULT_PORTFOLIO.profile))),
      projects: this.http.get<Project[]>(`${api}/projects`).pipe(catchError(() => of(DEFAULT_PORTFOLIO.projects))),
      skills: this.http.get<Skill[]>(`${api}/skills`).pipe(catchError(() => of(DEFAULT_PORTFOLIO.skills))),
      experiences: this.http.get<Experience[]>(`${api}/experiences`).pipe(catchError(() => of(DEFAULT_PORTFOLIO.experiences))),
      certificates: this.http.get<Certificate[]>(`${api}/certificates`).pipe(catchError(() => of(DEFAULT_PORTFOLIO.certificates))),
    });
  }

  updateProfile(id: string, profile: Partial<Profile>) {
    return this.http.put<Profile>(`${this.api}/profile/${id}`, profile);
  }

  createProfile(profile: Partial<Profile>) {
    return this.http.post<Profile>(`${this.api}/profile`, profile);
  }

  addSkill(skill: Partial<Skill>) {
    return this.http.post<Skill>(`${this.api}/skills`, skill);
  }

  deleteSkill(id: string) {
    return this.http.delete<void>(`${this.api}/skills/${id}`);
  }

  addProject(project: Partial<Project>) {
    return this.http.post<Project>(`${this.api}/projects`, project);
  }

  deleteProject(id: string) {
    return this.http.delete<void>(`${this.api}/projects/${id}`);
  }

  addExperience(experience: Partial<Experience>) {
    return this.http.post<Experience>(`${this.api}/experiences`, experience);
  }

  deleteExperience(id: string) {
    return this.http.delete<void>(`${this.api}/experiences/${id}`);
  }

  addCertificate(certificate: Partial<Certificate>) {
    return this.http.post<Certificate>(`${this.api}/certificates`, certificate);
  }

  deleteCertificate(id: string) {
    return this.http.delete<void>(`${this.api}/certificates/${id}`);
  }

}
