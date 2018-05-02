import { Pdv } from './pdv';
import { Observable } from 'rxjs/Observable';
import { Page } from './../shared/_models/page';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from "./../app.constants";
import { Router } from "@angular/router";
@Injectable()
export class PdvService {

  constructor(
    private _config: Configuration,
    private router: Router,
    private http: HttpClient,
  ) { }
  url:string = this._config.ServerWithApiUrl +"pdv/"

  getPdvs(page:number, size:number){
    let paginacao:string = `?page=${page}&size=${size}`;
    return this.http.get<Page>(this.url + "pesquisa" + paginacao, {headers:this._config.headers});
  }

  createPdv(pdv:Pdv):Observable<Pdv>{
    return this.http.post<Pdv>(this.url,pdv,{headers:this._config.headers});
  }

  updatePdv(pdv: Pdv) {
    return this.http.put<Pdv>(this.url + pdv.cc_pdv, JSON.stringify(pdv), {
      headers: this._config.headers
    });
  }

  getPdv(cc_pdv: any) {
    let pesquisa: string = `pesquisa?cc_pdv=${cc_pdv}`;
    return this.http.get<Page>(this.url + pesquisa, {
      headers: this._config.headers
    });
  }
}
