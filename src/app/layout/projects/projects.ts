import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DEFAULT_PORTFOLIO } from '../../core/data/portfolio.defaults';
import { Project } from '../../core/models/project.model';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  private service = inject(PortfolioService);
  protected projects = signal<Project[]>(DEFAULT_PORTFOLIO.projects);

  constructor() {
    this.service.getPortfolioData().subscribe({ next: (data) => this.projects.set(data.projects) });
  }
}
