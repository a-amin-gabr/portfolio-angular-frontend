import { Component, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DEFAULT_PORTFOLIO } from '../../core/data/portfolio.defaults';
import { PortfolioData } from '../../core/models/portfolio-data.model';

@Component({
  imports: [RouterLink, DecimalPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private service = inject(PortfolioService);
  protected data = signal<PortfolioData>(DEFAULT_PORTFOLIO);

  constructor() {
    this.service.getPortfolioData().subscribe({ next: (data) => this.data.set(data) });
  }
}
