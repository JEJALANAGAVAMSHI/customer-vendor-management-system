import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorOfferDto } from '../../models/vendorOfferDto';
import { VendorOffersService } from '../../services/vendor-offers.service';

@Component({
  selector: 'app-vendor-offers',
  templateUrl: './vendor-offers.component.html',
  styleUrl: './vendor-offers.component.css',
  providers: [DatePipe]
})
export class VendorOffersComponent {
  offers: VendorOfferDto[] = [];
  businessId: number | undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendorOffersService: VendorOffersService,
    private datepipe : DatePipe
  ) {}

  ngOnInit(): void {
    this.businessId = Number(this.route.snapshot.paramMap.get('businessId'));

    if (this.businessId) {
      this.vendorOffersService.getOffersByBusinessId(this.businessId)
        .subscribe(
          (response:VendorOfferDto[]) => {
            console.log(response)
            this.offers = response; // Assign the response to offers
            this.isLoading = false;
          },
          (error) => {
            console.error('Error fetching offers', error);
            this.isLoading = false;
          }
        );
    }
  }
  addOffer(): void {
    this.router.navigate(['/vendor/add-offer', this.businessId]);
  }
  deleteOffer(offerId: number): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this offer?');

    if (isConfirmed) {
      this.vendorOffersService.deleteOffer(offerId).subscribe(
        () => {
          alert('Offer deleted successfully.');
          this.offers = this.offers.filter(offer => offer.offerId !== offerId); // Remove deleted offer from the list
        },
        (error:any) => {
          console.error('Error deleting offer', error);
        }
      );
    }
  }
}
