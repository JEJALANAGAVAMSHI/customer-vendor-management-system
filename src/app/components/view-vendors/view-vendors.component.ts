import { Component, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { VendorDto } from '../../models/vendorDto';
import { ViewVendorsService } from '../../services/view-vendors.service';

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrl: './view-vendors.component.css'
})
export class ViewVendorsComponent implements OnInit {
  vendors: VendorDto[] = [];
  loading = true;
  error: string | null = null;

  constructor(private vendorsService: ViewVendorsService) {}

  ngOnInit(): void {
    this.loadVendors();
  }
  loadVendors(): void {
    this.vendorsService.getAllVendors().pipe(
      map((response: { vendors: VendorDto[] }) => {
        // Extract the vendors from the vdjendors key
        return response.vendors;
      }),
      catchError((error) => {
        console.error('Error fetching vendors:', error);
        this.error = 'Failed to load vendors. Please try again later.';
        return of([]);
      })
    ).subscribe({
      next: (vendors: VendorDto[]) => {
        this.vendors = vendors;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    
  }
  deleteVendor(vendorId: string): void {
    this.vendorsService.deleteVendorById(vendorId).subscribe({
      next: () => {
        // Remove the deleted vendor from the list
        this.vendors = this.vendors.filter(vendor => vendor.id !== vendorId.toString());
      },
      error: (error:any) => {
        console.error('Error deleting vendor:', error);
        this.error = 'Failed to delete vendor. Please try again later.';
      }
    });
  }

}
