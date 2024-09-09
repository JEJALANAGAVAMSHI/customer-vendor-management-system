import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessDto } from '../models/businessDto';

@Injectable({
  providedIn: 'root'
})
export class GetBusinessService {

  private apiUrl = 'http://localhost:8080'; // Adjust the API URL to match your backend

  constructor(private http: HttpClient) {}

  getAllBusinesses(): Observable<BusinessDto[]> {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<BusinessDto[]>(`${this.apiUrl}/customer/get-businesses`, { headers }); // Assuming `/all` is the endpoint to get all businesses
  }
}
