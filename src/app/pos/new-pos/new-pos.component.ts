import { Cc_FilValidator } from './../../shared/_validators/cc_fil';
import { Validators } from '@angular/forms';
import { FiliaisService } from './../../filiais/filiais.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PosService } from './../pos.service';
import { Pos } from './../pos';
import { Filial } from './../../filiais/filial';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-new-pos',
  templateUrl: './new-pos.component.html',
  styleUrls: ['./new-pos.component.scss']
})
export class NewPosComponent implements OnInit {
  sucesso: boolean = true;
  loading: boolean = false;
  server_error: string;
  posForm: FormGroup;
  filiais: Filial[];
  cc_num_ser: any;
  edit: boolean = false;
  pos:Pos
  constructor(
    private fb: FormBuilder,
    private posService: PosService,
    private filiaisService: FiliaisService,
    private route: ActivatedRoute
  ) {
    this.posForm = this.fb.group({
      cc_fil:["",Validators.compose([Validators.required, Cc_FilValidator.validate])],
      ds_pos:[],
      cc_num_ser:[],
      tx_cha_adq:[]
    });
  }
  ngOnInit() {
    this.buildFil();
    this.route.params.subscribe(params => {
      this.cc_num_ser = params["cc_num_ser"];
      if (this.cc_num_ser) {
        this.edit = true;
        console.log(this.cc_num_ser)
        this.setPos();
      }
    });
  }

  enviar() {
    this.loading = true;
    if (this.posForm.dirty && this.posForm.valid) {
      this.posService.createPos(this.posForm.value).subscribe(
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
    if (this.posForm.dirty && this.posForm.valid) {
        this.posService.updatePos(this.posForm.value)
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
  debug(): string {
    return JSON.stringify(this.posForm.value);
  }
  setPos() {
      this.posService.getPos(this.cc_num_ser).subscribe(
        _page => {
          this.pos = _page.content[0];
          this.posForm.patchValue(
            { cc_fil: this.pos.cc_fil },
            { onlySelf: true }
          );
          this.posForm.patchValue(
            { cc_num_ser: this.pos.cc_num_ser },
            { onlySelf: true }
          );
          this.posForm.patchValue(
            { ds_pos: this.pos.ds_pos },
            { onlySelf: true }
          );
          this.posForm.patchValue(
            { tx_cha_adq: this.pos.tx_cha_adq },
            { onlySelf: true }
          );
        },
        error => {
          console.log(error);
        }
      );
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
