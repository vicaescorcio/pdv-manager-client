import { FinalizadoraService } from './../../finalizadora/finalizadora.service';
import { Finalizadora} from './../../finalizadora/finalizadora';
import { Cc_FilValidator } from './../../shared/_validators/cc_fil';
import { Filial } from './../../filiais/filial';
import { Plano } from './../../plano/plano';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FiliaisService } from './../../filiais/filiais.service';
import { PlanoService } from './../plano.service';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-new-plano',
  templateUrl: './new-plano.component.html',
  styleUrls: ['./new-plano.component.scss']
})
export class NewPlanoComponent implements OnInit {
  sucesso: boolean = true;
  loading: boolean = false;
  server_error: string;
  planoForm: FormGroup;
  filiais: Filial[];
  prazos:any[];
  fins: Finalizadora[];
  cc_pla: any;
  edit: boolean = false;
  plano:Plano
  constructor(
    private fb: FormBuilder,
    private filiaisService: FiliaisService,
    private finalizadoraService:FinalizadoraService,
    private planoService: PlanoService,
    private route: ActivatedRoute
  ) {
    this.planoForm = this.fb.group({
      cc_fil: ["",Validators.compose([Validators.required, Cc_FilValidator.validate])],
      cc_plano: ["",Validators.compose([Validators.required])],
      cc_org:[],
      cc_fin:[],
      cc_prz: [],
      cc_pla: [],
      pc_cus_fin: [],
      cc_par_tip: []
  
    });
  }
  ngOnInit() {
    this.buildFil();
    this.buildFin();
    this.route.params.subscribe(params => {
      this.cc_pla = params["cc_pla"];
      if (this.cc_pla) {
        this.edit = true;
        console.log(this.cc_pla)
        this.setPlano();
      }
    });
  }

  enviar() {
    this.loading = true;
    if (this.planoForm.dirty && this.planoForm.valid) {
      this.planoService.createPlano(this.planoForm.value).subscribe(
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
    if (this.planoForm.dirty && this.planoForm.valid) {
        this.planoService
        .updatePlano(this.planoForm.value)
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
    return JSON.stringify(this.planoForm.value);
  }

  setPlano() {
      this.planoService.getPlano(this.cc_pla).subscribe(
        _page => {
          this.plano = _page.content[0];
          this.planoForm.patchValue(
            { cc_fil: this.plano.cc_fil },
            { onlySelf: true }
          );
          this.planoForm.patchValue(
            { cc_pla: this.plano.cc_pla },
            { onlySelf: true }
          );
          this.planoForm.patchValue(
            { cc_fin: this.plano.cc_fin },
            { onlySelf: true }
          );
          this.planoForm.patchValue(
            {cc_par_tip : this.plano.cc_par_tip },
            { onlySelf: true }
          );

          this.planoForm.patchValue(
            {cc_prz : this.plano.cc_prz },
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
  buildFin() {
    return this.finalizadoraService.getFinalizadoras(0, 50).subscribe(
      _page => {
        this.fins = _page.content;
      },
      error => {}
    );
  }
  
}
