import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/**
 * Services
 */
import { AuthenticationService } from './../services/laravel/authentication.service';
import { CrudService } from '../services/laravel/crud.service';


@Injectable()
export class ProfileGuard implements CanActivate {
  userType: boolean = false;
  constructor(
    private authentication: AuthenticationService,
    private crud: CrudService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    /*fbAuth.onAuthStateChanged(user => {
      this.crud.read({route: 'animals', order: 'userKey', equalTo: user.uid})
      .then(res => {
        if(!res['cod'] || res['cod'] != "ra-03") {
          this.userType = true;
        }
      })

      this.crud.read({route: 'businesses', order: 'userKey', equalTo: user.uid})
      .then(res => {
        if(!res['cod'] || res['cod'] != "ra-03") {
          this.userType = true;
        }
      })

      this.crud.read({route: 'governmentEntities', order: 'userKey', equalTo: user.uid})
      .then(res => {
        if(!res['cod'] || res['cod'] != "ra-03") {
          this.userType = true;
        }
      })

      this.crud.read({route: 'person', order: 'userKey', equalTo: user.uid})
      .then(res => {
        if(!res['cod'] || res['cod'] != "ra-03") {
          this.userType = true;
        }
      })
    })

    this.router.events.subscribe(data => {
      if(data['url'] != "/main/profile-choice") {
        if(!this.userType) {
          this.router.navigate(['/main/profile-choice'])
        }
      }
    })*/

    return true;
  }
}
