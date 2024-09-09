import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBusinessService } from '../../services/get-business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrl: './business-list.component.css'
})
export class BusinessListComponent implements OnInit {
  businesses: any[] = []; // Define the type according to your data model

  constructor(private businessService: GetBusinessService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getBusinesses();
  }

  getBusinesses(): void {
    this.businessService.getAllBusinesses().subscribe(data => {
      this.businesses = data;
    });
  }

  viewBusinessDetails(businessId: number): void {
    this.router.navigate(['/customerdashboard/business', businessId]);
  }
}
