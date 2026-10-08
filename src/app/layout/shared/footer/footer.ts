import { Component, Input } from '@angular/core';
import { PortfolioData } from '../../../core/models/portfolio-data.model';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.html',
})
export class Footer {
  @Input({ required: true }) data!: PortfolioData;
  @Input({ required: true }) year!: number;
}
