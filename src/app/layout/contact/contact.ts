import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DEFAULT_PORTFOLIO } from '../../core/data/portfolio.defaults';
import { Profile } from '../../core/models/profile.model';

@Component({
  imports: [RouterLink],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private service = inject(PortfolioService);
  protected profile = signal<Profile | null>(DEFAULT_PORTFOLIO.profile);

  constructor() {
    this.service.getPortfolioData().subscribe({ next: (data) => this.profile.set(data.profile) });
  }
}
