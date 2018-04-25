import { Produto } from './produto';
import { Observable } from "rxjs/Observable";
import { Page } from "./../shared/_models/page";
import { AuthService } from "./../auth/auth.service";
import { Router } from "@angular/router";
import { Configuration } from "./../app.constants";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProdutoService {
  constructor(
    private _config: Configuration,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  url: string = this._config.ServerWithApiUrl + "produto/";

  getProdutos(page: number, size: number) {
    let paginacao: string = `?page=${page}&size=${size}`;
    return this.http.get<Page>(this.url + "pesquisa" + paginacao, {
      headers: this._config.headers
    });
  }
  getProduto(cc_psr: any) {
    let pesquisa: string = `pesquisa?cc_fil=${cc_psr}`;
    return this.http.get<Page>(this.url + pesquisa, {
      headers: this._config.headers
    });
  }
  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto, {
      headers: this._config.headers
    });
  }
  updateProduto(produto: Produto) {
    return this.http.put<Produto>(this.url+ JSON.stringify(produto), {
      headers: this._config.headers
    });
  }
  /*recursos auxiliares*/ 
  getTipos(){
    return this.http.get<Page>(this.url+'tipo',{
      headers: this._config.headers
    });
  }
  getOri(){
    return this.http.get<Page>(this.url+'origem',{
      headers: this._config.headers
    });
  }
  getIcms(){
    return this.http.get<Page>(this.url+'csticms',{
      headers: this._config.headers
    });
  }
  getCofins(){
    return this.http.get<Page>(this.url+'cstcofins',{
      headers: this._config.headers
    });
  }
  getPis(){
    return this.http.get<Page>(this.url+'cstpis',{
      headers: this._config.headers
    });
  }
}
