import { Masks } from './../../shared/masks';
import { Cc_FilValidator } from './../../shared/_validators/cc_fil';
import { Validators } from '@angular/forms';
import { FinalizadoraService } from './../finalizadora.service';
import { ActivatedRoute } from '@angular/router';
import { FiliaisService } from './../../filiais/filiais.service';
import { Finalizadora } from './../finalizadora';
import { Filial } from './../../filiais/filial';
import { FormBuilder } from "@angular/forms";
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UpperDirective } from './../../shared/_directives/upper.directive';

@Component({
  selector: 'pdv-new-finalizadora',
  templateUrl: './new-finalizadora.component.html',
  styleUrls: ['./new-finalizadora.component.scss']
})
export class NewFinalizadoraComponent implements OnInit {
  sucesso: boolean = true;
  loading: boolean = false;
  server_error: string;
  finalizadoraForm: FormGroup;
  filiais: Filial[];
  fits: any ;
  fin_con: any; 
  recursos:any;
  cc_finalizadora: any;
  edit: boolean = false;
  finalizadora:Finalizadora;
  constructor(
    private fb: FormBuilder,
    private finalizadoraService: FinalizadoraService,
    private filiaisService: FiliaisService,
    private route: ActivatedRoute,
    private masks:Masks) { 
      this.finalizadoraForm = this.fb.group({
        cc_fil: [
          "",
          Validators.compose([Validators.required, Cc_FilValidator.validate])
        ],
        cc_fin: [
          "",
          Validators.compose([Validators.required, Cc_FilValidator.validate])
        ],
        bl_rec: ["", Validators.compose([Validators.required])],
        cc_rec: ["1", Validators.compose([])],
        ds_fin:["", Validators.compose([Validators.required])],
        cn_fin:["", Validators.compose([Validators.required])],
        cc_fit:["", Validators.compose([Validators.required])],
        cc_ger_tef:["", Validators.compose([Validators.required])],
        cc_fin_con:["", Validators.compose([Validators.required])],
        tx_cha_adq:["", Validators.compose([Validators.required])],
      });  
    }
  ngOnInit() {
    this.buildFil();
    this.buildRec();
    this.fits = this.buildFit()
    this.fin_con = this.buildFinCon()
  }
  buildFil() {
    return this.filiaisService.getFiliais(0, 50).subscribe(
      _page => {
        this.filiais = _page.content;
      },
      error => {}
    );
  }
  buildFit() {
    return [
      { 'codigo':'O','desc': 'Outros'},
      {'codigo':'T','desc': "TEF"},
      {'codigo':'P','desc': "POS"},
      {'codigo':'C','desc': "Cheque"}
  ]
  }
  buildFinCon() {
    return [
      {'codigo':'V','desc': "A vista"},
      {'codigo':'P','desc': "A Prazo"}
    ]
  }

  buildRec(){
    return this.finalizadoraService.getRecursos(0, 50).subscribe(
      _page => {
        this.recursos = _page.content;
        console.log(this.recursos)
      },
      error => {}
    );
  }
  enviar(){
    this.loading = true;
    return this.finalizadoraService.createFinalizadora(this.finalizadoraForm.value)
    .subscribe(_result=>{
      this.loading = false
      this.sucesso = false
    },
      _error=>{
        console.log(_error);
        this.server_error=_error.error.message;
        this.loading = false;
      });
  }
}
