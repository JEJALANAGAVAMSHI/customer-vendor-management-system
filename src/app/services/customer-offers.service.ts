import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OffersforCustomer } from '../models/OffersforCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerOffersService {

  private apiUrl = 'http://localhost:8080/customer/offers'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllOffers(): Observable<OffersforCustomer[]> {
    const token = localStorage.getItem('token'); // Assuming the token is stored in local storage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<OffersforCustomer[]>(this.apiUrl, {headers});
  }
}
