import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { DEFAULT_PORTFOLIO } from '../../core/data/portfolio.defaults';
import { Certificate } from '../../core/models/certificate.model';

@Component({
  imports: [],
  selector: 'app-certifications',
  styleUrl: './certifications.css',
  templateUrl: './certifications.html',
})
export class Certifications {
  private service = inject(PortfolioService);
  protected certificates = signal<Certificate[]>(DEFAULT_PORTFOLIO.certificates);

  constructor() {
    this.service
      .getPortfolioData()
      .subscribe({ next: (data) => this.certificates.set(data.certificates) });
  }

  protected imageFor(certificate: Certificate): string {
    const images: Record<string, string> = {
      'MLA-C01': 'mla.png',
      ACE: 'associate-cloud-engineer-certification.png',
      'DVA-C02': 'dva.png',
      'SOA-C03': 'soa.png',
      'SAA-C03': 'saa.png',
      'AIF-C01': 'aif.png',
      'CLF-C02': 'ccp.png',
      HCCDA: 'huawei.png',
    };
    return `imgs/${images[certificate.code] || certificate.image.split('/').pop()}`;
  }
}
