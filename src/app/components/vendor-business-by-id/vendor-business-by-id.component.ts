import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessByIdDto } from '../../models/businessByIdDto';
import { VendorBusinessByIdService } from '../../services/vendor-business-by-id.service';

@Component({
  selector: 'app-vendor-business-by-id',
  templateUrl: './vendor-business-by-id.component.html',
  styleUrl: './vendor-business-by-id.component.css'
})
export class VendorBusinessByIdComponent implements OnInit {
  business: BusinessByIdDto | undefined;

  constructor(private route: ActivatedRoute, private businessService: VendorBusinessByIdService) {}

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
}
