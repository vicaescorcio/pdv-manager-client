import { Cc_EstValidator } from './../shared/_validators/cc_end_est';
import { Cc_FilValidator } from './../shared/_validators/cc_fil';
import { FiliaisService } from "./filiais.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Filial } from "./filial";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pdv-new-filial",
  templateUrl: "./new-filial.component.html",
  styleUrls: ["./new-filial.component.scss"]
})
export class NewFilialComponent implements OnInit {
  filial: Filial;
  sucesso: boolean = false;
  regs: any = {};
  filialForm: FormGroup;
  constructor(private fb: FormBuilder, private filialService: FiliaisService) {
    this.regs = [
      { nome: "Normal", codigo: "N" },
      { nome: "Simples Nacional", codigo: "SN" }
    ];
    this.filial = new Filial();
    this.filialForm = this.fb.group({
      cc_fil: ["", Validators.compose([Validators.required, Cc_FilValidator.validate])],
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
    if (this.filialForm.dirty && this.filialForm.valid) {
      this.filialService.createFilial(this.filialForm.value).subscribe(
        _authResult => {
          this.sucesso = true;
        },
        error => {
          console.log(error);
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
