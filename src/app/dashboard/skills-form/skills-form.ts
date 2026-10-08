import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DashboardState } from '../../core/services/dashboard-state.service';

@Component({
  selector: 'app-skills-form',
  imports: [FormsModule],
  templateUrl: './skills-form.html',
  styleUrl: '../dashboard.css',
})
export class SkillsForm {
  private service = inject(PortfolioService);
  protected state = inject(DashboardState);
  protected skill = { name: '', category: 'Frontend' };
  protected add(form: NgForm): void {
    if (form.invalid) return;
    this.service.addSkill(this.skill).subscribe({
      next: () => {
        this.skill = { name: '', category: 'Frontend' };
        form.resetForm(this.skill);
        this.state.showNotice('Skill added');
        this.state.refresh();
      },
      error: () => this.state.showNotice('Could not save the skill.'),
    });
  }
  protected remove(id?: string): void {
    if (!id || !confirm('Remove this item from your portfolio?')) return;
    this.service.deleteSkill(id).subscribe({
      next: () => {
        this.state.showNotice('Item removed');
        this.state.refresh();
      },
      error: () => this.state.showNotice('Could not remove item'),
    });
  }
}
