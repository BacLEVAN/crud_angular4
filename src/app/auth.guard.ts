import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import the auth service here
import { AuthService } from './auth/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {

    // add the service we need
    constructor(
      private auth: AuthService,
      private router: Router
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log(this.auth.isLoggedIn);
        // handle any redirects if a user isn't authenticated
        if (!this.auth.isLoggedIn) {
          // redirect the user
          this.router.navigate(['/login']);
          return false;
        }

    return true;
  }
}
