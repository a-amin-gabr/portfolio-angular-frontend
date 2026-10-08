import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Experience } from '../../core/models/experience.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DashboardState } from '../../core/services/dashboard-state.service';

@Component({ selector: 'app-experience-form', imports: [FormsModule], templateUrl: './experience-form.html', styleUrl: '../dashboard.css', })
export class ExperienceForm {
  private service = inject(PortfolioService);
  protected state = inject(DashboardState);
  protected experience: { role: string; company: string; location: string; type: Experience['type']; start: string; end: string; current: boolean; points: string } = { role: '', company: '', location: 'Remote', type: 'remote', start: '', end: '', current: true, points: '' };
  protected add(form: NgForm): void {
    if (form.invalid) return;
    const value = this.experience;
    this.service.addExperience({ ...value, points: value.points.split('\n').filter(Boolean), end: value.current ? null : value.end }).subscribe({ next: () => { this.state.showNotice('Experience added'); this.state.refresh(); }, error: () => this.state.showNotice('Could not save the experience.') });
  }
  protected remove(id?: string): void { if (!id || !confirm('Remove this item from your portfolio?')) return; this.service.deleteExperience(id).subscribe({ next: () => { this.state.showNotice('Item removed'); this.state.refresh(); }, error: () => this.state.showNotice('Could not remove item') }); }
}
