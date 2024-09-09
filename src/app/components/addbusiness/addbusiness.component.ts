import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AddBusinessDto } from '../../models/addBusinessDto';
import { AddBusinessService } from '../../services/add-business.service';

@Component({
    selector:'app-addbusiness',
    templateUrl:'./addbusiness.component.html',
    styleUrl:'./addbusiness.component.css'
})

export class AddBusinessComponent {
    business: AddBusinessDto = {
      businessName: '',
      category: '',
      address: '',
      state: '',
      postalCode: '',
      email: '',
      dayFrom: '',
      dayTo: '',
      timeFrom: '',
      timeTo: ''
    };
    timeFrom: string='';
  timeTo: string='';
  formattedTimeFrom: string='';
  formattedTimeTo: string='';
    
  
    constructor(private businessService: AddBusinessService, private router: Router) { }
  
    onSubmit() {
        if (this.business.timeFrom && this.business.timeTo) {
          this.business.timeFrom = this.formatTime(this.business.timeFrom);
          this.business.timeTo = this.formatTime(this.business.timeTo);
        }
    
        this.businessService.addBusiness(this.business).subscribe({
          next: () => {
            alert('Business added successfully');
            // this.router.navigate(['/some-page']); // Redirect to another page after successful submission
          },
          error: (error) => {
            console.error('Error adding business:', error);
            alert('Error adding Business');
          }
        });
      }
    
      formatTime(time: string): string {
        if (!time) return '';
    
        const [hours, minutes] = time.split(':');
        const seconds = '00';
        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds}`;
      }
    }