import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessByIdDto } from '../../models/businessByIdDto';
import { VendorBusinessByIdService } from '../../services/vendor-business-by-id.service';

@Component({
  selector: 'app-vendor-business-by-id',
  templateUrl: './vendor-business-by-id.component.html',
  styleUrl: './vendor-business-by-id.component.css'
})
export class VendorBusinessByIdComponent implements OnInit {
  business: BusinessByIdDto | undefined;

  constructor(private route: ActivatedRoute, 
    private businessService: VendorBusinessByIdService,
    private router : Router) {}

  ngOnInit(): void {
    const businessId = Number(this.route.snapshot.paramMap.get('id'));
    if (businessId) {
      this.loadBusinessDetails(businessId);
    }
  }

  loadBusinessDetails(businessId: number): void {
    this.businessService.getBusinessById(businessId).subscribe({
      next: (data: BusinessByIdDto) => {
        this.business = data;
      },
      error: (error) => {
        console.error('Error fetching business details:', error);
      }
    });
  }
  deleteProduct(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.businessService.deleteProduct(productId).subscribe({
        next: () => {
          alert('Product deleted successfully');
          this.loadBusinessDetails(this.business?.businessId!); // Reload the business details
        },
        error: (error : any) => {
          console.error('Error deleting product:', error);
        }
      });
    }
  }

  deleteService(serviceId: number): void {
    if (confirm('Are you sure you want to delete this service?')) {
      this.businessService.deleteService(serviceId).subscribe({
        next: () => {
          alert('Service deleted successfully');
          this.loadBusinessDetails(this.business?.businessId!); // Reload the business details
        },
        error: (error:any) => {
          console.error('Error deleting service:', error);
        }
      });
    }
  }
  navigateToAddProduct(): void {
    if (this.business) {
      this.router.navigate(['/vendor/add-product', this.business.businessId]);
    }
  }

  navigateToAddService(): void {
    if (this.business) {
      this.router.navigate(['/vendor/add-service', this.business.businessId]);
    }
  }
  navigateToAddLocation(): void {
    if (this.business) {
      this.router.navigate(['/vendor/add-location', this.business.businessId]);
    }
  }
}
