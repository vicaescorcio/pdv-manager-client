import { Injectable } from '@angular/core';

@Injectable()
export class Masks {
    public  cnpj = [/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/]
    public  cpt  = [/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/]
    public  tel  = ['(',/\d/,/\d/,')',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/]
    public  ins_est = [/\d/]
    public  ins_mun = [/\d/]
    public  cnae    = [/\d/]   
}