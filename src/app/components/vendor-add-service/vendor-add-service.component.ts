import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../models/vendorService';
import { VendorAddProductService } from '../../services/vendor-add-product.service';

@Component({
  selector: 'app-vendor-add-service',
  templateUrl: './vendor-add-service.component.html',
  styleUrl: './vendor-add-service.component.css'
})
export class VendorAddServiceComponent {
  service: VendorService = {
    serviceName: '',
    description: '',
    price : 0 
  };
  businessId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private addProductService: VendorAddProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.businessId = Number(this.route.snapshot.paramMap.get('businessId'));
  }

  onSubmit(): void {
    if (this.businessId) {
      const serviceData = {
          businessId: this.businessId,
          serviceName: this.service.serviceName,
          description: this.service.description,
          price: this.service.price
      };
      this.addProductService.addService(serviceData).subscribe({
        next: () => {
          alert('Service added successfully');
          this.router.navigate(['/vendordashboard/business-details', this.businessId]);
        },
        error: (error) => {
          console.error('Error adding service:', error);
        }
      });
    }
  }
}
