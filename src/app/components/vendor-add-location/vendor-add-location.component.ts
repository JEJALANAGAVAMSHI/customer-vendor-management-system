import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as L from 'leaflet';
import { VendorBusinessByIdService } from '../../services/vendor-business-by-id.service';

@Component({
  selector: 'app-vendor-add-location',
  templateUrl: './vendor-add-location.component.html',
  styleUrl: './vendor-add-location.component.css'
})
export class VendorAddLocationComponent  {
  businessId!: number;
  map: L.Map | undefined;
  marker: L.Marker | undefined;
  latitude: number = 0;
  longitude: number = 0;
  businessAddress: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private businessService: VendorBusinessByIdService
  ) {}
  
  ngAfterViewInit() {
    console.log('hi')
    this.businessId = Number(this.route.snapshot.paramMap.get('businessId'));
    // Get coordinates and add marker after view is initialized
    // this.initializeMap();
    this.loadBusinessDetails(this.businessId);
  }
  

  loadBusinessDetails(businessId: number): void {
    this.businessService.getBusinessById(businessId).subscribe({
      next: (business) => {
        this.businessAddress = business.address;
        console.log(this.businessAddress)
        this.geocodeAddress();
        
      },
      error: (error) => {
        console.error('Error fetching business details:', error);
        this.initializeMap(8.536413, 76.883746);
      }
    });
  }
  geocodeAddress(): void {

    setTimeout(() => {
      this.latitude = 8.536413;
      this.longitude = 76.883746;
      this.initializeMap(this.latitude, this.longitude);
    }, 1000); 
  }
  initializeMap(lat: number, lng: number): void {
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map('map').setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.marker = L.marker([lat, lng], {
      draggable: true
    }).addTo(this.map);

    this.marker.on('dragend', () => {
      const position = this.marker!.getLatLng();
      this.latitude = position.lat;
      this.longitude = position.lng;
      console.log('New position:', this.latitude, this.longitude);
    });

    setTimeout(() => {
      this.map?.invalidateSize();
    }, 100);
  }


  saveLocation(): void {

    this.businessService.addLocation(this.businessId, this.latitude, this.longitude).subscribe({
      next: () => {
        alert('Location saved successfully!');
        this.router.navigate(['/vendordashboard/business-details', this.businessId]);
      },
      error: (error : any) => {
        console.error('Error saving location:', error);
      }
    });
  }
}
