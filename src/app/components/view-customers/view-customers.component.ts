import { Component } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { CustomerDto } from '../../models/customerDto';
import { ViewCustomersService } from '../../services/view-customers.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrl: './view-customers.component.css'
})
export class ViewCustomersComponent {
  customers: CustomerDto[] = [];
  loading = true;
  error: string | null = null;

  constructor(private customerService: ViewCustomersService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }
  loadCustomers(): void {
    this.customerService.getAllCustomers().pipe(
      map((response: { customers: CustomerDto[] }) => {
        // Extract the vendors from the vdjendors key
        return response.customers;
      }),
      catchError((error) => {
        console.error('Error fetching vendors:', error);
        this.error = 'Failed to load vendors. Please try again later.';
        return of([]);
      })
    ).subscribe({
      next: (customers: CustomerDto[]) => {
        this.customers = customers;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    
  }
  deleteCustomer(customerId:string){
    this.customerService.deleteCustomerById(customerId).subscribe({
      next: () => {
        // Remove the deleted vendor from the list
        this.customers = this.customers.filter(customer => customer.id !== customerId.toString());
      },
      error: (error:any) => {
        console.error('Error deleting vendor:', error);
        this.error = 'Failed to delete vendor. Please try again later.';
      }
    });
  }
}
