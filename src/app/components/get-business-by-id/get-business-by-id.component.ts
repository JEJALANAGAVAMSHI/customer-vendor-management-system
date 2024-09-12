import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessByIdDto } from '../../models/businessByIdDto';
import { GetBusinessByIdService } from '../../services/get-business-by-id.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-get-business-by-id',
  templateUrl: './get-business-by-id.component.html',
  styleUrl: './get-business-by-id.component.css'
})
export class GetBusinessByIdComponent implements OnInit{
  businesses: BusinessByIdDto | undefined;
  map: L.Map | undefined;
  marker: L.Marker | undefined;

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
        if (this.businesses && this.businesses.location) {
          this.initializeMap(this.businesses.location.latitude, this.businesses.location.longitude);
        }
      },
      error: (error) => {
        console.error('Error fetching business details:', error);
      }
    });
  }
  initializeMap(lat: number, lng: number): void {
    setTimeout(() => {
      const mapContainer = document.getElementById('map');
      
      if (mapContainer) {
        // Proceed with map initialization if mapContainer exists
        this.map = L.map(mapContainer).setView([lat, lng], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(this.map);
  
        this.marker = L.marker([lat, lng]).addTo(this.map)
        .bindPopup('Business Location')
        .openPopup();
      } else {
        console.error('Map container not found!');
      }
    }, 1000); // This will defer the execution just enough for the DOM to be ready
  }
  
}


