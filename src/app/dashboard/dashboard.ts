import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardSidebar } from './shared/sidebar/sidebar';
import { DashboardTopbar } from './shared/topbar/topbar';
import { DashboardState } from '../core/services/dashboard-state.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, DashboardSidebar, DashboardTopbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected state = inject(DashboardState);
}
