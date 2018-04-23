import { ActivatedRoute } from "@angular/router";
import { Filial } from "./../../filiais/filial";
import { FiliaisService } from "./../../filiais/filiais.service";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { PdvService } from "./../pdv.service";
import { Component, OnInit } from "@angular/core";
import { Cc_FilValidator } from "./../../shared/_validators/cc_fil";
import {Pdv} from "./../pdv";
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
  cc_pdv: any;
  edit: boolean = false;
  pdv:Pdv
  constructor(
    private fb: FormBuilder,
    private pdvService: PdvService,
    private filiaisService: FiliaisService,
    private route: ActivatedRoute
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
  }
  ngOnInit() {
    this.buildFil();
    this.fin_con = this.buildFinCon();
    this.fit = this.buildFit();
    this.route.params.subscribe(params => {
      this.cc_pdv = params["cc_pdv"];
      if (this.cc_pdv) {
        this.edit = true;
        console.log(this.cc_pdv)
        this.setPdv();
      }
    });
  }

  enviar() {
    this.loading = true;
    if (this.pdvForm.dirty && this.pdvForm.valid) {
      this.pdvService.createPdv(this.pdvForm.value).subscribe(
        _authResult => {
          this.loading = false;
          this.sucesso = false;
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
  update() {
    this.loading = true;
    if (this.pdvForm.dirty && this.pdvForm.valid) {
        this.pdvService
        .updatePdv(this.pdvForm.value)
        .subscribe(
          _authResult => {
            this.loading = false;
          },
          error => {
            console.log(error);
            console.log(this.debug());
            this.server_error = error.error.message;
            this.sucesso = false;
            this.loading = false;
          }
        );
    }
  }

  debug(): string {
    return JSON.stringify(this.pdvForm.value);
  }

  setPdv() {
      this.pdvService.getPdv(this.cc_pdv).subscribe(
        _page => {
          this.pdv = _page.content[0];
          this.pdvForm.patchValue(
            { cc_fil: this.pdv.cc_fil },
            { onlySelf: true }
          );
          this.pdvForm.patchValue(
            { cc_pdv: this.pdv.cc_pdv },
            { onlySelf: true }
          );
        },
        error => {
          console.log(error);
        }
      );

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
