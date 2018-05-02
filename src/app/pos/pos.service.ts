import { Observable } from 'rxjs/Observable';
import { Pos } from './pos';
import { Page } from './../shared/_models/page';
import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Configuration } from './../app.constants';
import { Injectable } from '@angular/core';

@Injectable()
export class PosService {
  constructor(
    private _config: Configuration,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  url: string = this._config.ServerWithApiUrl + "pos/";

  getPoss(page: number, size: number) {
    let paginacao: string = `?page=${page}&size=${size}`;
    return this.http.get<Page>(this.url + "pesquisa" + paginacao, {
      headers: this._config.headers
    });
  }
  getPos(cc_num_ser: any) {
    let pesquisa: string = `pesquisa?cc_num_ser=${cc_num_ser}`;
    return this.http.get<Page>(this.url + pesquisa, {
      headers: this._config.headers
    });
  }
  createPos(pos: Pos): Observable<Pos> {
    return this.http.post<Pos>(this.url, pos, {
      headers: this._config.headers
    });
  }
  updatePos(pos: Pos) {
    return this.http.put<Pos>(this.url+ pos.cc_num_ser, JSON.stringify(pos), {
      headers: this._config.headers
    });
  }
}
