import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioData } from '../../../core/models/portfolio-data.model';

@Component({
  selector: 'app-layout-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header {
  @Input({ required: true }) data!: PortfolioData;
}
