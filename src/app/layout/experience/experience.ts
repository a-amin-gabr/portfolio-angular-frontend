import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DEFAULT_PORTFOLIO } from '../../core/data/portfolio.defaults';
import { Experience } from '../../core/models/experience.model';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class ExperienceView {
  private service = inject(PortfolioService);
  protected experiences = signal<Experience[]>(DEFAULT_PORTFOLIO.experiences);

  constructor() {
    this.service
      .getPortfolioData()
      .subscribe({ next: (data) => this.experiences.set(data.experiences) });
  }
}
