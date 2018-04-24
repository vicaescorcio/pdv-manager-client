import { Injectable } from '@angular/core';

@Injectable()
export class Masks {
    public  cnpj = [/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/]
    public  cpt  = [/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/]
    public  tel  = ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/]
    public  ins_est = [/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/]
    public  cnae    = [/\d/,/\d/,/\d/,/\d/,'-',/\d/,'/',/\d/,/\d/]   
    public  mun_cod =  [/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]
}

