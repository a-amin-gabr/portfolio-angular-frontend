import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { signal } from '@angular/core';
import { filter } from 'rxjs';
import { DashboardState } from '../../../core/services/dashboard-state.service';

@Component({
  selector: 'app-dashboard-topbar',
  imports: [RouterLink],
  templateUrl: './topbar.html',
  styleUrl: '../../dashboard.css',
})
export class DashboardTopbar {
  protected state = inject(DashboardState);
  private router = inject(Router);
  protected title = signal('');

  constructor() {
    this.updateTitle(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.updateTitle(event.urlAfterRedirects));
  }

  private updateTitle(url: string): void {
    const section = url.split('/').filter(Boolean).pop();
    this.title.set(
      section === 'dashboard'
        ? `Good morning, ${this.state.data().profile?.name || 'there'}.`
        : (section || '').replace('-', ' '),
    );
  }
}
