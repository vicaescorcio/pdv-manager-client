import { Observable } from 'rxjs/Observable';
import { Bandeira } from './bandeira';
import { Page } from './../shared/_models/page';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Configuration } from './../app.constants';
import { Injectable } from '@angular/core';

@Injectable()
export class BandeiraService {

  constructor(
    private _config: Configuration,
    private router: Router,
    private http: HttpClient,
  ) { }
  url:string = this._config.ServerWithApiUrl +"bandeira/"

  getBandeiras(page:number, size:number){
    let paginacao:string = `?page=${page}&size=${size}`;
    return this.http.get<Page>(this.url + "pesquisa" + paginacao, {headers:this._config.headers});
  }

  createBandeira(bandeira:Bandeira):Observable<Bandeira>{
    return this.http.post<Bandeira>(this.url,bandeira,{headers:this._config.headers});
  }

  updateBandeira(bandeira: Bandeira) {
    return this.http.put<Bandeira>(this.url+ JSON.stringify(bandeira), {
      headers: this._config.headers
    });
  }

  getBandeira(cc_ban: any) {
    let pesquisa: string = `pesquisa?cc_ban=${cc_ban}`;
    return this.http.get<Page>(this.url + pesquisa, {
      headers: this._config.headers
    });
  }
}
