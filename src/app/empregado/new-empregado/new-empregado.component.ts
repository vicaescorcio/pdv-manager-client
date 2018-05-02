import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Masks } from './../../shared/masks';
import { EmpregadoService } from './../empregado.service';
import { FiliaisService } from './../../filiais/filiais.service';
import { FormBuilder } from '@angular/forms';
import { Empregado } from './../empregado';
import { Filial } from './../../filiais/filial';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-new-empregado',
  templateUrl: './new-empregado.component.html',
  styleUrls: ['./new-empregado.component.scss']
})
export class NewEmpregadoComponent implements OnInit {

  sucesso: boolean = true;
  loading: boolean = false;
  server_error: string;
  empregadoForm: FormGroup;
  filiais: Filial[];
  fits: any;
  fin_con: any;
  recursos: any;
  cc_emp: any;
  edit: boolean = false;
  empregado: Empregado;
  cstIcms: any;
  cstPis: any;
  cstCof: any;
  origens: any;
  tipo: any;
  valor: any = this._mask.valor;
  constructor(
    private fb: FormBuilder,
    private filialService: FiliaisService,
    private empregadoService: EmpregadoService,
    private _mask: Masks,
    private route: ActivatedRoute
  ) {
    this.empregadoForm = this.fb.group({
      cc_fil: ["", Validators.required],
      cc_emp: ["", Validators.required],
      cc_per: ["", Validators.required],
      nm_emp: ["", Validators.required],
      pw_emp_log: ["", Validators.required],
      bl_emp_log: ["", Validators.compose([Validators.required])],
      dt_ini: ["", Validators.required],
      dt_fim: ["", Validators.required],
 
    
    });
  }
  ngOnInit(){
    this.buildFil()
    this.route.params.subscribe(params => {
      this.cc_emp = params["cc_emp"];
      if (this.cc_emp) {
        this.edit = true;
        console.log(this.edit)
        this.setEmpregado();
      }
    });
  }
  enviar() {
    this.loading = true;
    if (this.empregadoForm.dirty && this.empregadoForm.valid) {
      this.empregadoService.createEmpregado(this.empregadoForm.value).subscribe(
        _authResult => {
          this.loading = false;
          this.sucesso = false;
        },
        error => {
          console.log(error);
          this.server_error = error.error.message;
          this.loading = false;
        }
      );
    }
  }
  update() {
    this.loading = true
    console.log("UPDATE!");
    if (this.empregadoForm.dirty && this.empregadoForm.valid) {
      this.empregadoService
        .updateEmpregado(this.empregadoForm.value)
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
  setEmpregado(){
    this.empregadoService.getEmpregado(this.cc_emp).subscribe(_page=>{
      console.log(_page.content[0])
      this.empregado = _page.content[0] 
      this.empregadoForm.patchValue({cc_fil: this.empregado.cc_fil },{ onlySelf: true });
      this.empregadoForm.patchValue({cc_emp:this.empregado.cc_emp.toUpperCase() },{ onlySelf: true });
      this.empregadoForm.patchValue({cc_per:this.empregado.cc_per },{ onlySelf: true }); 
      this.empregadoForm.patchValue({nm_emp:this.empregado.nm_emp.toUpperCase() },{ onlySelf: true }); 
      this.empregadoForm.patchValue({pw_emp_log:this.empregado.pw_emp_log.toUpperCase() },{ onlySelf: true }); 
      this.empregadoForm.patchValue({bl_emp_log:this.empregado.bl_emp_log },{ onlySelf: true }); 
      this.empregadoForm.patchValue({dt_ini:this.empregado.dt_ini },{ onlySelf: true }); 
      this.empregadoForm.patchValue({dt_fim:this.empregado.dt_fim.toUpperCase() },{ onlySelf: true }); 
    },_error=>{})
  }

  buildFil() {
    return this.filialService.getFiliais(0, 50).subscribe(
      _page => {
        this.filiais = _page.content;
      },
      error => {}
    );
  }
}
