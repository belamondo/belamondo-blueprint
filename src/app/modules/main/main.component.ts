import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  paramsToLogout: any;
  paramsToMenuSidenav: any;

  constructor() { }

  ngOnInit() {
    this.paramsToMenuSidenav = {
      menuSettings: [{
        description: "Convite para usuário",
        route: ['/main/user-register']
      }, {
        description: "Documento",
        route: ['/main/document']
      }, {
        description: "Atividade econômica",
        route: ['/main/economic-activity']
      }], paramsToLogout: {
        routeAfterLogout: ['/login']
      }
    };
  }

}
