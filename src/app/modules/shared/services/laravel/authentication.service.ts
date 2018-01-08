import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Settings
 */
import { environment } from './../../../../../environments/environment';

/**
 * Others libraries
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthenticationService {
  headersToAuth: Headers;
  optionsToAuth: RequestOptions;
  url = environment.urlToOauthToken;
  urlToApi = environment.urlToApi;

  constructor(
    private http: Http
  ) { }

  login = (params) => new Promise((resolve, reject) => {
    let temp;

    this.headersToAuth = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    this.optionsToAuth = new RequestOptions({
      'headers': this.headersToAuth
    })
    console.log(params.login)
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
      console.log("Nada")
    })
  })

  checkIfLoggedInAndReturnUser = () => {
    return true;
  }
}
