import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Certificate } from '../../core/models/certificate.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DashboardState } from '../../core/services/dashboard-state.service';

@Component({
  selector: 'app-certificates-form',
  imports: [FormsModule],
  templateUrl: './certificates-form.html',
  styleUrl: '../dashboard.css',

})
export class CertificatesForm {
  private service = inject(PortfolioService);
  protected state = inject(DashboardState);
  protected certificate: Partial<Certificate> = { name: '', code: '', issuer: '', date: '', expires: '', image: '', credentialUrl: '', status: 'active' };
  protected add(form: NgForm): void {
    if (form.invalid) return;
    this.service.addCertificate(this.certificate).subscribe({
      next: () => {
        this.state.showNotice('Certificate added');
        this.state.refresh();
      },
      error: () => this.state.showNotice('Could not save the certificate.'),
    });
  }
  protected remove(id?: string): void {
    if (!id || !confirm('Remove this item from your portfolio?')) return;
    this.service.deleteCertificate(id).subscribe({
      next: () => {
        this.state.showNotice('Item removed');
        this.state.refresh();
      },
      error: () => this.state.showNotice('Could not remove item'),
    });
  }
}
