import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioService } from '../core/services/portfolio.service';
import { DEFAULT_PORTFOLIO } from '../core/data/portfolio.defaults';
import { PortfolioData } from '../core/models/portfolio-data.model';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  private service = inject(PortfolioService);
  protected data = signal<PortfolioData>(DEFAULT_PORTFOLIO);
  protected year = new Date().getFullYear();

  constructor() {
    this.service.getPortfolioData().subscribe({
      next: (data) => this.data.set(data),
      error: (error: unknown) => console.error('Portfolio data could not be loaded', error),
    });
  }
}
