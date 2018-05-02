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
  cc_fin: any;
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
    this.route.params.subscribe(params => {
      this.cc_fin = params["cc_fin"];
      if (this.cc_fin) {
        this.edit = true;
        console.log(this.edit)
        this.setFilial();
      }
    });
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

  update() {
    this.loading = true
    if (this.finalizadoraForm.dirty && this.finalizadoraForm.valid) {
      this.finalizadoraService
        .updateFilial(this.finalizadoraForm.value)
        .subscribe(
          _authResult => {
            this.loading = false;
          },
          error => {
            console.log(error);
            this.server_error = error.error.message;
            this.loading = false;
          }
        );
    }
  }
  setFilial() {
      this.route.params.subscribe(params => {
      this.finalizadoraService.getFinalizadora(params['cc_fin']).subscribe(
        _page => {
         this.finalizadora = _page.content[0] 
         this.finalizadoraForm.patchValue({cc_fil: this.finalizadora.cc_fil },{ onlySelf: true });
         this.finalizadoraForm.patchValue({cc_fin:this.finalizadora.cc_fin.toUpperCase() },{ onlySelf: true });
         this.finalizadoraForm.patchValue({ds_fin:this.finalizadora.ds_fin.toUpperCase() },{ onlySelf: true }); 
         this.finalizadoraForm.patchValue({cn_fin:this.finalizadora.cn_fin },{ onlySelf: true }); 
         this.finalizadoraForm.patchValue({cc_fit:this.finalizadora.cc_fit.toUpperCase() },{ onlySelf: true }); 
         this.finalizadoraForm.patchValue({cc_ger_tef:this.finalizadora.cc_ger_tef.toUpperCase() },{ onlySelf: true }); 
         this.finalizadoraForm.patchValue({tx_cha_adq:this.finalizadora.tx_cha_adq.toUpperCase() },{ onlySelf: true }); 
         this.finalizadoraForm.patchValue({cc_rec:this.finalizadora.cc_rec.toUpperCase() },{ onlySelf: true }); 
         this.finalizadoraForm.patchValue({bl_rec:this.finalizadora.bl_rec},{ onlySelf: true }); 
         this.finalizadoraForm.patchValue({cc_fin_con:this.finalizadora.cc_fin_con.toUpperCase()},{ onlySelf: true }); 
        },
        error => {
          console.log(error);
        }
      );
    });
  }
}
