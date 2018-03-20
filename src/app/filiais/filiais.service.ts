import { Page } from './../shared/_models/page';
import { AuthService } from "./../auth/auth.service";
import { Filial } from "./filial";
import { Router } from "@angular/router";
import { Configuration } from "./../app.constants";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FiliaisService {
  constructor(
    private _config: Configuration,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  url: string = this._config.ServerWithApiUrl + "filial/";

  getFiliais(page:number, size:number) {
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>TODO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    let paginacao: string = `?page=${page}&size=${size}`
    return this.http.get<Page>(this.url+"pesquisa", { headers: this._config.headers });
  }
  createFilial() {}
  updateFilial() {}
  removeFilial() {}
}
