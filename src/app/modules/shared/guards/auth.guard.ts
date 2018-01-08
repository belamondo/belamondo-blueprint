import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/**
 * Services
 */
import { AuthenticationService } from './../services/laravel/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot, state: 
    RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean 
  {
    if(!this.authentication.checkIfLoggedInAndReturnUser()) {
      this.router.navigate(['/login']);
    }

    return true;
  }
}
