import { Component, OnInit } from '@angular/core';

/**
 * Services
 */
import { AuthenticationService } from './../shared/services/laravel/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  paramsToLogout: any;
  paramsToMenuSidenav: any;
  user: any;
  firstAndLastName: string;

  constructor(
    private authService: AuthenticationService
  ) {

  }

  ngOnInit() {
    this.authService
    .setUser()
    .then(res => {
      this.user = res;

      let count = this.user.name.split(" ");
      this.firstAndLastName = count[0] + " " + count.slice(-1)[0];

      this.paramsToMenuSidenav = {
        menuSettings: [{
          description: "Convite para usuário",
          route: ['/main/user-register']
        }, {
          description: "Eventos",
          route: ['/main/event']
        }, {
          description: "Itens",
          route: ['/main/item']
        }], paramsToLogout: {
          routeAfterLogout: ['/login']
        }, textToCloseArea: this.firstAndLastName
      };
    })
  }
}
