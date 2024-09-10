import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorAddOffer } from '../../models/vendorAddOffer';
import { VendorOffersService } from '../../services/vendor-offers.service';

@Component({
  selector: 'app-vendor-add-offers',
  templateUrl: './vendor-add-offers.component.html',
  styleUrl: './vendor-add-offers.component.css'
})
export class VendorAddOffersComponent {

  offer: VendorAddOffer = {
    offerName : '',
    description: '',
    dateFrom : '',
    dateTo : '',
    businessId : 0,
  };

  constructor(
    private route: ActivatedRoute,
    private vendorOfferService: VendorOffersService
  ) {}

  ngOnInit(): void {
    this.offer.businessId = Number(this.route.snapshot.paramMap.get('businessId'));
  }

  addOffer(): void {
    const newOffer = {
      businessId: this.offer.businessId,
      offerName: this.offer.offerName,
      description: this.offer.description,
      dateFrom: this.offer.dateFrom,
      dateTo: this.offer.dateTo
    };

    this.vendorOfferService.addOffer(newOffer)
      .subscribe(
        (response:VendorAddOffer) => {
          console.log('Offer added successfully', response);
          // Optionally, redirect back to the offers page
        },
        (error:any) => {
          console.error('Error adding offer', error);
        }
      );
  }
}
