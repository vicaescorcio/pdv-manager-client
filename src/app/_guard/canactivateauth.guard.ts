import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private router:Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn()){
      console.log("logged!")
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
    
  }
}

