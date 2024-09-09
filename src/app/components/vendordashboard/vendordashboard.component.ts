import { Component } from '@angular/core';
import { BusinessByIdDto } from '../../models/businessByIdDto';
import { VendorGetBusinessesService } from '../../services/vendor-get-businesses.service';

@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrl: './vendordashboard.component.css'
})
export class VendordashboardComponent {
  businesses: BusinessByIdDto[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private businessService: VendorGetBusinessesService) {}

  ngOnInit(): void {
    this.loadBusinesses();
  }

  loadBusinesses(): void {
    this.businessService.getBusinesses().subscribe({
      next: (data: BusinessByIdDto[]) => {
        this.businesses = data;
        this.loading = false;
      },
      error: (err:any) => {
        this.error = 'Error loading businesses';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
