import { Masks } from "./../masks";

import { Cc_EstValidator } from "./../shared/_validators/cc_end_est";
import { Cc_FilValidator } from "./../shared/_validators/cc_fil";
import { FiliaisService } from "./filiais.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Filial } from "./filial";
import { Component, OnInit } from "@angular/core";
import { Injectable } from '@angular/core';
@Component({
  selector: "pdv-new-filial",
  templateUrl: "./new-filial.component.html",
  styleUrls: ["./new-filial.component.scss"]
})
@Injectable()
export class NewFilialComponent implements OnInit {
  filial: Filial;
  sucesso: boolean = false;
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
      { nome: "Normal", codigo: "N" },
      { nome: "Simples Nacional", codigo: "SN" }
    ];
    this.filial = new Filial();
    this.filialForm = this.fb.group({
      cc_fil: [
        "",
        Validators.compose([Validators.required, Cc_FilValidator.validate])
      ],
      nm_fil: ["", Validators.required],
      cc_ins_fed: ["", Validators.required],
      st_fil: ["", Validators.required],
      tx_end_log: ["", Validators.required],
      tx_end_num: ["", Validators.required],
      tx_end_cmp: ["", Validators.required],
      tx_end_bai: ["", Validators.required],
      cc_end_cpt: ["", Validators.required],
      cc_end_est: ["", Validators.compose([Validators.required])],
      cc_end_mun_cod: ["", Validators.required],
      tx_end_mun_nom: ["", Validators.required],
      cc_end_pai_cod: ["", Validators.required],
      tx_end_pai_nom: ["", Validators.required],
      tx_end_tel: ["", Validators.required],
      cc_ins_est: ["", Validators.compose([Validators.required])],
      cc_ins_mun: ["", Validators.required],
      cc_cna_fis: ["", Validators.required],
      cc_reg_tri: ["", Validators.required]
    });
  }
  enviar() {
    this.filialForm.value['cc_ins_fed'] =this.filialForm.value['cc_ins_fed'].replace(/\D+/g, '')
    this.filialForm.value['tx_end_te'] =this.filialForm.value['tx_end_tel'].replace(/\D+/g, '')
    this.filialForm.value['cc_end_cpt'] =this.filialForm.value['cc_end_cpt'].replace(/\D+/g, '')
    if (this.filialForm.dirty && this.filialForm.valid) {
      this.filialService.createFilial(this.filialForm.value).subscribe(
        _authResult => {
          this.sucesso = true;
        },
        error => {
          console.log(error);
          console.log(this.debug())
          this.sucesso = false;
        }
      );
    }
  }
  debug(): string {
    return JSON.stringify(this.filial);
  }
  ngOnInit() {}
}
