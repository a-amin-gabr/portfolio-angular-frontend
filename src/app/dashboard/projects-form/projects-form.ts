import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Project } from '../../core/models/project.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DashboardState } from '../../core/services/dashboard-state.service';

@Component({
  selector: 'app-projects-form',
  imports: [ReactiveFormsModule],
  templateUrl: './projects-form.html',
  styleUrl: '../dashboard.css',
})
export class ProjectsForm {
  private service = inject(PortfolioService);
  protected state = inject(DashboardState);
  protected form = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    tech: ['Angular, TypeScript'],
    github: ['#'],
    live: ['#'],
    image: ['imgs/1.jpg'],
    featured: [false],
    status: ['in-progress' as Project['status']],
    highlights: [''],
  });
  protected add(): void {
    if (this.form.invalid) return;
    const value = this.form.getRawValue();
    this.service
      .addProject({
        ...value,
        tech: value.tech.split(',').map((item) => item.trim()),
        highlights: value.highlights.split(',').map((item) => item.trim()),
      })
      .subscribe({
        next: () => {
          this.state.showNotice('Project added');
          this.state.refresh();
        },
        error: () => this.state.showNotice('Could not save the project.'),
      });
  }
  protected remove(id?: string): void {
    if (!id || !confirm('Remove this item from your portfolio?')) return;
    this.service.deleteProject(id).subscribe({
      next: () => {
        this.state.showNotice('Item removed');
        this.state.refresh();
      },
      error: () => this.state.showNotice('Could not remove item'),
    });
  }
}
