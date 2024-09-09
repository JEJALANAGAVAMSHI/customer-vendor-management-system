import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessByIdDto } from '../../models/businessByIdDto';
import { GetBusinessByIdService } from '../../services/get-business-by-id.service';

@Component({
  selector: 'app-get-business-by-id',
  templateUrl: './get-business-by-id.component.html',
  styleUrl: './get-business-by-id.component.css'
})
export class GetBusinessByIdComponent implements OnInit{
  businesses: BusinessByIdDto | undefined;

  constructor(private route: ActivatedRoute, private businessService: GetBusinessByIdService) {}

  ngOnInit(): void {
    const businessId = this.route.snapshot.paramMap.get('id');
    if (businessId) {
      this.loadBusinessDetails(Number(businessId));
    }
  }

  loadBusinessDetails(businessId: number): void {
    this.businessService.getBusinesses(businessId).subscribe({
      next: (data: BusinessByIdDto) => {
        this.businesses = data;
      },
      error: (error) => {
        console.error('Error fetching business details:', error);
      }
    });
  }
}
