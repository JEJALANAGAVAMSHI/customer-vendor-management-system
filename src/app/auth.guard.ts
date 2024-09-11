import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUserService } from './services/login-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: LoginUserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getUserRoleFromToken();
      const requiredRole = route.data['role'] as string;
      console.log(userRole)
      if (userRole === requiredRole) {
        
        return true;
      } else {
        this.authService.redirectBasedOnRole(userRole);
        
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
