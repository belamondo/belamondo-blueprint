import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public paramsToLogin: any;

  constructor() { }

  ngOnInit() {
    this.paramsToLogin = {
      loginMode: 'emailAndPassword',
      routeAfterLoggedIn: ['/main'],
      imageTitle: './../assets/img/logo.png',
      textTitle: 'Acesso ao <span class="title-title-mini">SISBIA</span>',
      helpUrlAndIcon: {
        googleIcon: 'help',
        url:'http://www.google.com'
      },
      forgotPassword: true
    }
  }

}
