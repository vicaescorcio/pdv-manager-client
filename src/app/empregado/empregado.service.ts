import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Configuration } from './../app.constants';
import { Page } from './../shared/_models/page';
import { Observable } from 'rxjs/Observable';
import { Empregado } from './empregado';
import { Injectable } from '@angular/core';

@Injectable()
export class EmpregadoService {

  constructor(private _config: Configuration,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  url: string = this._config.ServerWithApiUrl + "empregado/";

  getProdutos(page: number, size: number) {
    let paginacao: string = `?page=${page}&size=${size}`;
    return this.http.get<Page>(this.url + "pesquisa" + paginacao, {
      headers: this._config.headers
    });
  }
  getProduto(cc_emp: any) {
    let pesquisa: string = `pesquisa?cc_fil=${cc_emp}`;
    return this.http.get<Page>(this.url + pesquisa, {
      headers: this._config.headers
    });
  }
  createProduto(empregado: Empregado): Observable<Empregado> {
    return this.http.post<Empregado>(this.url, empregado, {
      headers: this._config.headers
    });
  }
  updateProduto(empregado: Empregado) {
    return this.http.put<Empregado>(this.url+ JSON.stringify(empregado), {
      headers: this._config.headers
    });
  }
}
