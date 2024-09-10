import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorAddOffer } from '../models/vendorAddOffer';
import { VendorOfferDto } from '../models/vendorOfferDto';

@Injectable({
  providedIn: 'root'
})
export class VendorOffersService {

  private baseUrl = 'http://localhost:8080'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to get all offers by business ID
  getOffersByBusinessId(businessId: number): Observable<VendorOfferDto[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const url = `${this.baseUrl}/businesses/${businessId}/offers`;
    return this.http.get<VendorOfferDto[]>(url, {headers});
  }
  addOffer(offer: VendorAddOffer): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.baseUrl}/vendor/offers/add`, offer, {headers});
  }
  deleteOffer(offerId: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete(`${this.baseUrl}/vendor/offers/${offerId}`, {headers});
  }
}
