import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorProduct } from '../../models/vendorProduct';
import { VendorAddProductService } from '../../services/vendor-add-product.service';

@Component({
  selector: 'app-vendor-add-product',
  templateUrl: './vendor-add-product.component.html',
  styleUrl: './vendor-add-product.component.css'
})
export class VendorAddProductComponent {
  product: VendorProduct = {
    productName: '',
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
      const productData = {
        businessId: this.businessId,
        productName: this.product.productName,
        description: this.product.description,
        price: this.product.price
      };

      this.addProductService.addProduct(productData).subscribe({
        next: () => {
          alert('Product added successfully');
          this.router.navigate(['/vendordashboard/business-details', this.businessId]);
        },
        error: (error) => {
          console.error('Error adding product:', error);
        }
      });
    }
  }
}
