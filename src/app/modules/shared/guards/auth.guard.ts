import { firebaseEnvironment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/**
 * Services
 */
import { FirebaseAuthenticationService } from './../services/firebase/firebase-authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authentication: FirebaseAuthenticationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot, state: 
    RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean 
  {
    this.authentication.setUser()
    .catch(error => { console.log(24)
      this.router.navigate(['/login']);
    })
    .then(res => {
      if(!res['id']) {
        this.router.navigate(['/login']);
      }
    })

    return true;
  }
}
