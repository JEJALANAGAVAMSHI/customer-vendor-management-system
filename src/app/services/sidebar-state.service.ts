import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarStateService {

  private currentPage = new BehaviorSubject<string>('default');  // Store current page
  currentPage$ = this.currentPage.asObservable();  // Observable for components to subscribe

  setCurrentPage(page: string) {
    this.currentPage.next(page);  // Update the current page
  }
}
