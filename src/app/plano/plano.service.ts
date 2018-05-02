import { Plano } from './plano';
import { Observable } from 'rxjs/Observable';
import { Page } from './../shared/_models/page';
import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Configuration } from './../app.constants';
import { Injectable } from '@angular/core';

@Injectable()
export class PlanoService {
  constructor(
    private _config: Configuration,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  url: string = this._config.ServerWithApiUrl + "plano/";

  getPlanos(page: number, size: number) {
    let paginacao: string = `?page=${page}&size=${size}`;
    return this.http.get<Page>(this.url + "pesquisa" + paginacao, {
      headers: this._config.headers
    });
  }
  getPlano(cc_pla: any) {
    let pesquisa: string = `pesquisa?cc_plan=${cc_pla}`;
    return this.http.get<Page>(this.url + pesquisa, {
      headers: this._config.headers
    });
  }
  createPlano(plano: Plano): Observable<Plano> {
    return this.http.post<Plano>(this.url, plano, {
      headers: this._config.headers
    });
  }
  updatePlano(plano: Plano) {
    return this.http.put<Plano>(this.url + plano.cc_pla, JSON.stringify(plano), {
      headers: this._config.headers
    });
  }
}
