import { Router } from "@angular/router";
import { TokenApi } from "./token-api";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import { Configuration } from "../../app/app.constants";
@Injectable()
export class AuthService {
  status:boolean
  statusChange: Subject<boolean> = new Subject<boolean>();
  constructor(
    private http: HttpClient,
    private _config: Configuration,
    private router: Router
  ) {
    this.status = false;
  }

  getAuth(username: string, password: string): Observable<TokenApi> {
    let credencias = {
      username: username,
      password: password
    };

    let headerOptions = {
      "Content-Type": "application-json"
    };

    return this.http.post<TokenApi>(
      this._config.ServerWithAuthUrl,
      JSON.stringify(credencias),
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }

  setSession(authResult: TokenApi) {
    const expiresAt = moment().add(authResult.expires_in, "seconds");
    
    localStorage.setItem("access_token", authResult.access_token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    this.changeStatus();
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    this.router.navigate(["login"]);
    this.changeStatus();
  }

  public isLoggedIn() {
    console.log(this.getExpiration().toString());
    console.log(moment().toString())
   
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  changeStatus() {
    this.status = this.isLoggedIn();
    this.statusChange.next(this.status);
  }
}
