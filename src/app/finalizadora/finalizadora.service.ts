import { Observable } from 'rxjs/Observable';
import { Finalizadora } from './finalizadora';
import { Page } from './../shared/_models/page';
import { Configuration } from './../app.constants';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FinalizadoraService {

  constructor(
    private _config: Configuration,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }
  url: string = this._config.ServerWithApiUrl + "finalizadora/";
  url_rec: string = this._config.ServerWithApiUrl + "recurso/"



  getFinalizadoras(page: number, size: number) {
    let paginacao: string = `?page=${page}&size=${size}`;
    return this.http.get<Page>(this.url + "pesquisa" + paginacao, {
      headers: this._config.headers
    });
  }

  getFinalizadora(cc_fin: any) {
    let pesquisa: string = `pesquisa?cc_fin=${cc_fin}`;
    return this.http.get<Page>(this.url + pesquisa, {
      headers: this._config.headers
    });
  }
  createFinalizadora(finalizadora: Finalizadora): Observable<Finalizadora> {
    return this.http.post<Finalizadora>(this.url, finalizadora, {
      headers: this._config.headers
    });
  }
  updateFilial(finalizadora: Finalizadora) {
    return this.http.put<Finalizadora>(this.url+finalizadora.cc_fin, JSON.stringify(finalizadora), {
      headers: this._config.headers
    });
  }
  getRecursos(page: number, size: number){
    let paginacao: string = `?page=${page}&size=${size}`;
    return this.http.get<Page>(this.url_rec + "pesquisa" + paginacao, {
      headers: this._config.headers
    });
  }
}
