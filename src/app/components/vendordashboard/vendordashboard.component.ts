import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessByIdDto } from '../../models/businessByIdDto';
import { SidebarStateService } from '../../services/sidebar-state.service';
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

  constructor(private businessService: VendorGetBusinessesService, 
    private router:Router, private sidebarStateService : SidebarStateService) {}

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
  viewBusiness(businessId: number): void {
    this.sidebarStateService.setCurrentPage('BusinessById');
    this.router.navigate(['/vendordashboard/business-details', businessId]);
  }
  deleteBusiness(businessId: number): void {
    if (confirm('Are you sure you want to delete this business?')) {
      this.businessService.deleteBusiness(businessId).subscribe({
        next: () => {
          alert('Business deleted successfully');
          this.loadBusinesses(); // Reload the businesses list
        },
        error: (error:any) => {
          console.error('Error deleting business:', error);
        }
      });
    }
  }
  
}
