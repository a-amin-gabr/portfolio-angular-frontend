import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioData } from '../../../core/models/portfolio-data.model';

@Component({
  selector: 'app-dashboard-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: '../../dashboard.css',

})
export class DashboardSidebar {
  @Input({ required: true }) data!: PortfolioData;
}
