import { Filial } from "./../../filiais/filial";
import { FiliaisService } from "./../../filiais/filiais.service";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { PdvService } from "./../pdv.service";
import { Component, OnInit } from "@angular/core";
import { Cc_FilValidator } from "./../../shared/_validators/cc_fil";

@Component({
  selector: "pdv-new-pdv",
  templateUrl: "./new-pdv.component.html",
  styleUrls: ["./new-pdv.component.scss"]
})
export class NewPdvComponent implements OnInit {
  sucesso: boolean = true;
  loading: boolean = false;
  server_error: string;
  fit: any = this.buildFit();
  fin_con: any = this.buildFinCon();
  pdvForm: FormGroup;
  filiais: Filial[];
  constructor(
    private fb: FormBuilder,
    private pdvService: PdvService,
    private filiaisService: FiliaisService
  ) {
    this.pdvForm = this.fb.group({
      cc_fil: [
        "",
        Validators.compose([Validators.required, Cc_FilValidator.validate])
      ],
      cc_pdv: [
        "",
        Validators.compose([Validators.required, Cc_FilValidator.validate])
      ],
      bl_tkn_atv: [false, Validators.compose([Validators.required])],
      st_pdv: ["PD", Validators.compose([Validators.required])]
    });
    this.buildFil();
    this.buildFinCon();
    this.buildFit();
  }
  ngOnInit() {}

  enviar() {
    this.loading=true
    if (this.pdvForm.dirty && this.pdvForm.valid) {
      this.pdvService.createPdv(this.pdvForm.value).subscribe(
        _authResult => {
          this.loading = false;
          this.sucesso = false
        },
        error => {
          console.log(error);
          console.log(this.debug())
          this.server_error = error.error.message;
          this.loading = false;
        }
      );
    }
  }
  debug(): string {
    return JSON.stringify(this.pdvForm.value);
  }
  buildFit() {
    return {
      O: "Outros",
      T: "TEF",
      P: "POS",
      C: "Cheque"
    };
  }
  buildFinCon() {
    return {
      V: "A vista",
      P: "A Prazo"
    };
  }
  buildFil() {
    return this.filiaisService.getFiliais(0, 50).subscribe(
      _page => {
        this.filiais = _page.content;
      },
      error => {}
    );
  }
}
