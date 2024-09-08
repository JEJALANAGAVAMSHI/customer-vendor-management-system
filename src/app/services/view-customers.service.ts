import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDto } from '../models/customerDto';

@Injectable({
  providedIn: 'root'
})
export class ViewCustomersService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  
  getAllCustomers(): Observable<{ customers: CustomerDto[] }> {
    const token = localStorage.getItem('token'); // Assuming the token is stored with key 'authToken'
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{ customers: CustomerDto[] }>(`${this.baseUrl}/customers`, {headers});
  }
  deleteCustomerById(id: string): Observable<void> {
    const token = localStorage.getItem('token'); // Assuming the token is stored with key 'authToken'
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.baseUrl}/customer/${id}`, {headers});
  }
}
