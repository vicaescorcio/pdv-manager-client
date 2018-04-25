
import { ActivatedRoute } from '@angular/router';
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
  filial:any
  cc_fil: any;
  edit: boolean = false;
  mask_tel:any;
  mask_cep:any;
  mask_cnpj:any;
  mask_est:any;
  mask_mun:any;
  mask_cnae:any;
  mask_cod:any;
  constructor(
    private fb: FormBuilder,
    private filialService: FiliaisService,
    private _mask: Masks,
    private route: ActivatedRoute
  ) {
    this.mask_cep   = _mask.cpt; 
    this.mask_tel   = _mask.tel;
    this.mask_cnpj  = _mask.cnpj;
    this.mask_est   = _mask.ins_est;
    this.mask_cnae  = _mask.cnae;
    this.mask_cod   = _mask.mun_cod;
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
      tx_end_num: ["",  Validators.required],
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
      cc_reg_tri: ["", Validators.required],
      st_fil:['AT', null]
    });
  }
  enviar() {
    console.log("enviar!")
    this.formatFilial()
    if (this.filialForm.dirty && this.filialForm.valid) {
      this.sub = this.filialService.createFilial(this.filialForm.value).subscribe(
        _authResult => {
          this.loading = false;
          this.sucesso = false
        },
        error => {
          console.log(error);
          console.log(this.debug())
          this.server_error=error.error.message
          this.loading = false;
        }
      );
    }
  }
  update() {
    this.formatFilial()
    console.log("UPDATE!")
    if (this.filialForm.dirty && this.filialForm.valid) {
      this.sub = this.filialService
        .updateFilial(this.filialForm.value)
        .subscribe(
          _authResult => {
            this.loading = false;
          },
          error => {
            console.log(error);
            console.log(this.debug());
            this.server_error = error.error.message;
            this.loading = false;
          }
        );
    }
  }
  setFilial() {
    this.sub = this.route.params.subscribe(params => {
      this.filialService.getFilial(params['cc_fil']).subscribe(
        _page => {
         this.filial = _page.content[0] 
         console.log(this.filial.nm_fil)
         this.filialForm.patchValue({cc_fil: this.filial.cc_fil },{ onlySelf: true });
         this.filialForm.patchValue({nm_fil:this.filial.nm_fil.toUpperCase() },{ onlySelf: true });
         this.filialForm.patchValue({cc_ins_fed:this.filial.cc_ins_fed },{ onlySelf: true }); 
         this.filialForm.patchValue({tx_end_log:this.filial.tx_end_log.toUpperCase() },{ onlySelf: true }); 
         this.filialForm.patchValue({tx_end_num:this.filial.tx_end_num.toUpperCase() },{ onlySelf: true }); 
         this.filialForm.patchValue({tx_end_bai:this.filial.tx_end_bai.toUpperCase() },{ onlySelf: true }); 
         this.filialForm.patchValue({cc_end_cpt:this.filial.cc_end_cpt },{ onlySelf: true }); 
         this.filialForm.patchValue({tx_end_cmp:this.filial.tx_end_cmp.toUpperCase() },{ onlySelf: true }); 
         this.filialForm.patchValue({cc_end_est:this.filial.cc_end_est },{ onlySelf: true }); 
         this.filialForm.patchValue({cc_end_mun_cod:this.filial.cc_end_mun_cod },{ onlySelf: true }); 
         this.filialForm.patchValue({tx_end_mun_nom:this.filial.tx_end_mun_nom.toUpperCase() },{ onlySelf: true });  
         this.filialForm.patchValue({tx_end_tel:this.filial.tx_end_tel },{ onlySelf: true }); 
         this.filialForm.patchValue({cc_ins_est:this.filial.cc_ins_est },{ onlySelf: true }); 
         this.filialForm.patchValue({cc_ins_mun:this.filial.cc_ins_mun },{ onlySelf: true }); 
         this.filialForm.patchValue({cc_cna_fis:this.filial.cc_cna_fis },{ onlySelf: true }); 
         this.filialForm.patchValue({cc_reg_tri:this.filial.cc_reg_tri },{ onlySelf: true }); 
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  setAddress(){
    let cpt = this.filialForm.value['cc_end_cpt'].replace(/\D+/g, '')
    cepPromise(cpt).then( _json =>{
      console.log(_json)
      this.filialForm.patchValue({'tx_end_log':_json["street"].toUpperCase()},{onlySelf: true})  
      this.filialForm.patchValue({'tx_end_bai': _json["neighborhood"].toUpperCase()},{onlySelf:true})
      this.filialForm.patchValue({'cc_end_est':_json["state"].toUpperCase()},{onlySelf:true})
      this.filialForm.patchValue({'tx_end_mun_nom': _json["city"].toUpperCase()},{onlySelf:true})
    }).catch(console.log)
  }
  
  formatFilial(){
    this.loading = true;
    this.filialForm.value["cc_ins_fed"] = this.filialForm.value["cc_ins_fed"].replace(/\D+/g, "");
    this.filialForm.value["cc_end_cpt"] = this.filialForm.value["cc_end_cpt"].replace(/\D+/g, "");
    this.filialForm.value["cc_ins_est"] = this.filialForm.value["cc_ins_est"].replace(/\D+/g, "");
    this.filialForm.value["cc_ins_mun"] = this.filialForm.value["cc_ins_mun"].replace(/\D+/g, "");
    this.filialForm.value["cc_cna_fis"] = this.filialForm.value["cc_cna_fis"].replace(/\D+/g, "");
  }
  debug(): string {
    return JSON.stringify(this.filialForm.value);
  }
  ngOnInit() {
      this.route.params.subscribe(params => {
      this.cc_fil = params["cc_fil"];
      if (this.cc_fil) {
        this.edit = true;
        console.log(this.edit)
        this.setFilial();
      }
    });
  }
  ngOnDestroy() {
    
  }
}
