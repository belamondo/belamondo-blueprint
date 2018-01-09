import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Settings
 */
import { environment } from './../../../../../environments/environment';

/**
 * RxJs
 */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthenticationService {
  headersToAuth: Headers;
  optionsToAuth: RequestOptions;
  url = environment.urlToOauthToken;
  urlToApi = environment.urlToApi;
  user: any;

  constructor(
    private http: Http
  ) { }
  
  setUser = () => new Promise((resolve, reject) => {
    this.headersToAuth = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': sessionStorage.getItem('access_token')
    });

    this.optionsToAuth = new RequestOptions({
      'headers': this.headersToAuth
    })

    this.http
    .get(
      this.urlToApi+'user',
      this.optionsToAuth
    )
    .subscribe(res => {
      this.user = JSON.parse(res['_body']);

      if(this.user.id) {
        resolve(this.user);
      } else {
        resolve(false);
      }
    }, error => {
      resolve(false);
    }, () => {

    })
  })

  getUser = () => {
    return this.user;
  }

  login = (params) => new Promise((resolve, reject) => {
    let temp;

    this.headersToAuth = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    this.optionsToAuth = new RequestOptions({
      'headers': this.headersToAuth
    })

    this.http
    .post(
      this.url,
      {
        "client_secret": "uGUNmd2yK3ux31tulaMhaDWIjbeHlur6f94a387J",
        "client_id": 2,
        "grant_type": "password",
        "username": params.login.value,
        "password": params.password.value
      },
      this.optionsToAuth
    ).subscribe(res => {
      if(res.ok) {
        temp = JSON.parse(res['_body']);
        
        sessionStorage.setItem('access_token', 'Bearer ' + temp.access_token);

        resolve({
          cod: "l-01",
          message: "Login feito com sucesso"
        });
      }
    }, err => {
      if(err.statusText == "Unauthorized") {
        resolve({
          cod:"le-01",
          message: "O e-mail ou senha informado(s) não foi(ram) encontrado(s). Dica: Caso seja do DN, basta informar o login e senha da rede interna. Caso contrário, devem ser informados E-mail e Senha cadastrados através do convite recebido."
        })
      }
    }, () => {
      
    })
  })
}
