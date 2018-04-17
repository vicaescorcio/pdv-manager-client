import { Masks } from './../../shared/masks';
import { Cc_EstValidator } from "./../../shared/_validators/cc_end_est";
import { Cc_FilValidator } from "./../../shared/_validators/cc_fil";
import { FiliaisService } from "./../filiais.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Filial } from "./../filial";
import { Component, OnInit } from "@angular/core";
import { Injectable } from '@angular/core';
import * as cepPromise from 'cep-promise/dist/cep-promise-browser'
@Component({
  selector: "pdv-new-filial",
  templateUrl: "./new-filial.component.html",
  styleUrls: ["./new-filial.component.scss"]
})
@Injectable()
export class NewFilialComponent implements OnInit {
  private sub:any
  sucesso: boolean = true;
  loading:boolean = false;
  server_error:string;
  regs: any = {};
  filialForm: FormGroup;
  mask_tel:any;
  mask_cep:any;
  mask_cnpj:any;
  mask_est:any;
  mask_mun:any;
  mask_cnae:any;
  titleAlert:string = 'This field is required';
  constructor(
    private fb: FormBuilder,
    private filialService: FiliaisService,
    private _mask: Masks
  ) {
    this.mask_cep   = _mask.cpt; 
    this.mask_tel   = _mask.tel;
    this.mask_cnpj  = _mask.cnpj;
    this.mask_est   = _mask.ins_est;
    this.mask_mun   = _mask.ins_mun;
    this.mask_cnae  = _mask.cnae;
    this.regs = [
      { nome: "Normal", codigo: "NORMAL" },
      { nome: "Simples Nacional", codigo: "SIMPLES_NACIONAL" }
    ];
    this.filialForm = this.fb.group({
      cc_fil: [
        "",
        Validators.compose([Validators.required, Cc_FilValidator.validate])
      ],
      nm_fil: ["", Validators.required],
      cc_ins_fed: ["", Validators.required],
      tx_end_log: ["", Validators.required],
      tx_end_num: ["", Validators.required],
      tx_end_bai: ["", Validators.required],
      cc_end_cpt: ["", Validators.required],
      tx_end_cmp: ["",],
      cc_end_est: ["", Validators.compose([Validators.required, Cc_EstValidator.validate])],
      cc_end_mun_cod: ["", Validators.required],
      tx_end_mun_nom: ["", Validators.required],
      cn_end_pai_cod: [1058, Validators.required],
      tx_end_pai_nom: ["BRASIL", Validators.required],
      tx_end_tel: ["", Validators.required],
      cc_ins_est: ["", Validators.required],
      cc_ins_mun: ["", Validators.required],
      cc_cna_fis: ["", Validators.required],
      cc_reg_tri: ["", Validators.required]
    });
  }
  enviar() {
    this.loading = true;
    this.filialForm.value['cc_ins_fed'] = this.filialForm.value['cc_ins_fed'].replace(/\D+/g, '')
   //this.filialForm.value['tx_end_tel']  = this.filialForm.value['tx_end_tel'].replace(/\D+/g, '')
    this.filialForm.value['cc_end_cpt'] = this.filialForm.value['cc_end_cpt'].replace(/\D+/g, '')
    this.filialForm.value['cc_ins_est'] = this.filialForm.value['cc_ins_est'].replace(/\D+/g, '')
    this.filialForm.value['cc_ins_mun'] = this.filialForm.value['cc_ins_mun'].replace(/\D+/g, '')
    this.filialForm.value['cc_cna_fis'] = this.filialForm.value['cc_cna_fis'].replace(/\D+/g, '')
    
    if (this.filialForm.dirty && this.filialForm.valid) {
      this.sub = this.filialService.createFilial(this.filialForm.value).subscribe(
        _authResult => {
          this.loading = false;
        },
        error => {
          console.log(error);
          console.log(this.debug())
          this.server_error=error.error.message
          this.sucesso = false;
          this.loading = false;
        }
      );
    }
  }

  setAddress(){
    let cpt = this.filialForm.value['cc_end_cpt'].replace(/\D+/g, '')
    cepPromise(cpt).then( _json =>{
      console.log(_json)
      this.filialForm.patchValue({'tx_end_log':_json["street"]},{onlySelf: true})  
      this.filialForm.patchValue({'tx_end_bai': _json["neighborhood"]},{onlySelf:true})
      this.filialForm.patchValue({'cc_end_est':_json["state"]},{onlySelf:true})
      this.filialForm.patchValue({'tx_end_mun_nom': _json["city"]},{onlySelf:true})
    }).catch(console.log)
  }
  debug(): string {
    return JSON.stringify(this.filialForm.value);
  }
  ngOnInit() {}
  ngOnDestroy() {
    
  }
}
