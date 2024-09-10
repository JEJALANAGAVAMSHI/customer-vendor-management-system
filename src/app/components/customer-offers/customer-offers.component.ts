import { Component } from '@angular/core';
import { OffersforCustomer } from '../../models/OffersforCustomer';
import { CustomerOffersService } from '../../services/customer-offers.service';

@Component({
  selector: 'app-customer-offers',
  templateUrl: './customer-offers.component.html',
  styleUrl: './customer-offers.component.css'
})
export class CustomerOffersComponent {
  offers: OffersforCustomer[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private offerService: CustomerOffersService) {}

  ngOnInit(): void {
    this.offerService.getAllOffers().subscribe(
      (data:OffersforCustomer[]) => {
        this.offers = data;
        this.isLoading = false;
      },
      (err:any) => {
        this.error = 'Failed to load offers';
        this.isLoading = false;
      }
    );
  }
}
