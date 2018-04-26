import { Injectable } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

@Injectable()
export class Masks {
    public  cnpj = [/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/]
    public  cpt  = [/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/]
    public  tel  = ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/]
    public  ins_est = [/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/]
    public  cnae    = [/\d/,/\d/,/\d/,/\d/,'-',/\d/,'/',/\d/,/\d/]   
    public  mun_cod =  [/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]
    public  valor   =  createNumberMask({
        prefix: 'R$ ',
        suffix: '',
        decimalLimit:2,
        allowDecimal:true,
        requireDecimal:true,
        includeThousandsSeparator: false,
        decimalSymbol:',',

         // This will put the dollar sign at the end, with a space.
      })
}

