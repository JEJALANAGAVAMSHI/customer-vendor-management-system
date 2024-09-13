import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from '../../services/login-user.service';
import { SidebarStateService } from '../../services/sidebar-state.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isExpanded = false;
  userRole: string | null = '';
  menuItems: { label: string, routerLink: string, icon: string }[] = [];

  constructor(private router: Router, 
    private authService : LoginUserService, 
    private sidebarStateService:SidebarStateService) {}

  ngOnInit() {
    this.getUserRole();
    this.setMenuItems();

    
  }

  getUserRole() {
    const token = localStorage.getItem('token');
    if (token) {
      
      this.userRole = this.authService.getUserRoleFromToken();
      console.log(this.userRole)
    }
  }

  setMenuItems() {
    

    switch (this.userRole) {
      case 'Admin':
        this.menuItems = [
          { label: 'Dashboard', routerLink : '/admindashboard', icon: 'fas fa-store'},
          { label: 'Vendors', routerLink: '/admindashboard/vendors', icon: 'fas fa-store' },
          { label: 'Customers', routerLink: '/admindashboard/customers', icon: 'fas fa-users' },
          { label: 'Add Vendor', routerLink: '/admindashboard/add-vendor', icon: 'fas fa-user-plus' },
          { label: 'Add Customer', routerLink: '/admindashboard/add-customer', icon: 'fas fa-user-plus' },
          { label: 'Settings', routerLink: '/admindashboard', icon: 'fas fa-user-plus' }
        ];
        break;
      case 'Customer':
        
        this.menuItems = [
          { label: 'Dashboard', routerLink : '/customerdashboard', icon: 'fas fa-store'},
          { label: 'Offers', routerLink: '/customer/offers', icon: 'fas fa-gift' },
          { label: 'Shops', routerLink: '/business-list', icon: 'fas fa-shopping-bag' },
          { label: 'Settings', routerLink: '/customerdashboard', icon: 'fas fa-shopping-bag' }
        ];
        console.log(this.menuItems)
        break;
      case 'Vendor':
        this.menuItems = [
          { label: 'Dashboard', routerLink : '/vendorrdashboard', icon: 'fas fa-store'},
          { label: 'Add Business', routerLink: '/addbusiness', icon: 'fas fa-plus-circle' },
          { label: 'Settings', routerLink: '/vendordashboard', icon: 'fas fa-plus-circle' },
        ];
        break;
      default:
        this.menuItems = [];
    }
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  
}