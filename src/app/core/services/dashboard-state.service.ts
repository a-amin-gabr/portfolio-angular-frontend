import { Injectable, signal } from '@angular/core';
import { PortfolioData } from '../models/portfolio-data.model';
import { PortfolioService } from './portfolio.service';
import { DEFAULT_PORTFOLIO } from '../data/portfolio.defaults';

@Injectable({ providedIn: 'root' })
export class DashboardState {
  data = signal<PortfolioData>(DEFAULT_PORTFOLIO);
  notice = signal('');
  busy = signal(false);

  constructor(private service: PortfolioService) {
    this.refresh();
  }

  refresh(): void {
    this.service.getPortfolioData().subscribe({
      next: (data) => this.data.set(data),
      error: () => this.showNotice('API unavailable. showing local workspace data.'),
    });
  }

  showNotice(message: string): void {
    this.notice.set(message);
    setTimeout(() => this.notice.set(''), 4000);
  }
}
