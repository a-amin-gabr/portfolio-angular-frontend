import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashboardState } from '../../core/services/dashboard-state.service';

@Component({
  selector: 'app-dashboard-overview',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './overview.html',
  styleUrl: '../dashboard.css',

})
export class Overview {
  protected state = inject(DashboardState);
}
