import { Observable } from "rxjs/Observable";
import { Page } from "./../shared/_models/page";
import { AuthService } from "./../auth/auth.service";
import { Filial } from "./filial";
import { Router } from "@angular/router";
import { Configuration } from "./../app.constants";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FiliaisService {
  buscaCep: string = "http://apps.widenet.com.br/busca-cep/api/cep/";
  constructor(
    private _config: Configuration,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  url: string = this._config.ServerWithApiUrl + "filial/";

  getFiliais(page: number, size: number) {
    let paginacao: string = `?page=${page}&size=${size}`;
    return this.http.get<Page>(this.url + "pesquisa" + paginacao, {
      headers: this._config.headers
    });
  }
  getFilial(cc_fil: any) {
    let pesquisa: string = `pesquisa?cc_fil=${cc_fil}`;
    return this.http.get<Page>(this.url + pesquisa, {
      headers: this._config.headers
    });
  }
  createFilial(filial: Filial): Observable<Filial> {
    return this.http.post<Filial>(this.url, filial, {
      headers: this._config.headers
    });
  }

  getAddress(cep: any) {
    return this.http.get(this.buscaCep + cep + ".json", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
  }
  updateFilial(filial: Filial) {
    return this.http.put<Filial>(this.url+ JSON.stringify(filial), {
      headers: this._config.headers
    });
  }
}
