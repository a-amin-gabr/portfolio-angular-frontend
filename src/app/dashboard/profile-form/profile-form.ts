import { Component, effect, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DashboardState } from '../../core/services/dashboard-state.service';

@Component({
  selector: 'app-profile-form',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-form.html',
  styleUrl: '../dashboard.css',
})
export class ProfileForm {
  private service = inject(PortfolioService);
  protected state = inject(DashboardState);
  protected form = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    title: ['', Validators.required],
    headline: ['', Validators.required],
    about: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    location: [''],
    github: [''],
    linkedin: [''],
    cvUrl: [''],
    phone: [''],
    portfolio: [''],
  });

  constructor() {
    effect(() => {
      const profile = this.state.data().profile;
      if (profile) this.form.patchValue(profile);
    });
  }
  protected save(): void {
    if (this.form.invalid) return this.form.markAllAsTouched();
    const profile = this.state.data().profile;
    const request = profile?._id
      ? this.service.updateProfile(profile._id, this.form.getRawValue())
      : this.service.createProfile(this.form.getRawValue());
    this.state.busy.set(true);
    request.subscribe({
      next: () => {
        this.state.busy.set(false);
        this.state.showNotice('Profile updated');
        this.state.refresh();
      },
      error: () => {
        this.state.busy.set(false);
        this.state.showNotice('Could not save. Check the API and required fields.');
      },
    });
  }
}
