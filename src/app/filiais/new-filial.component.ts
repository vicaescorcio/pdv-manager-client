
import { FormsModule,FormGroup,FormBuilder, Validators,AbstractControl } from '@angular/forms';
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
  regs:any = {};
  filialForm:FormGroup;
  constructor(fb:FormBuilder) {
    this.regs = [{nome:'Normal', codigo:'N'}, {nome:'Simples Nacional', codigo:'SN'}]
    this.filial = new Filial();
    this.buildForm(fb);
  
  }
  buildForm(fb:FormBuilder): void{
    this.filialForm = fb.group({
      cc_org:['', Validators.required],
      cc_fil: ['', Validators.required],
      nm_fil:['', Validators.required],
      cc_ins_fed:['', Validators.required],
      st_fil:['', Validators.required],
      tx_end_log:['', Validators.required],
      tx_end_num:['', Validators.required],
      tx_end_cmp:['', Validators.required],
      tx_end_bai:['', Validators.required],
      cc_end_cpt:['', Validators.required],
      cc_end_est:['', Validators.required],
      cc_end_mun_cod:['', Validators.required],
      tx_end_mun_nom:['', Validators.required],
      cn_end_pai_cod:['', Validators.required],
      tx_end_pai_nom:['', Validators.required],
      tx_end_tel:['', Validators.required],
      cc_ins_est:['', Validators.required],
      cc_ins_mun:['', Validators.required],
      cc_cna_fis:['', Validators.required],
      cc_reg_tri:['', Validators.required]			
		});


  }

	hasErrors(): boolean {
		var hasErrors: boolean = false;
		for(var controlName in this.filialForm.controls) {
			var control: AbstractControl = this.filialForm.controls[controlName];
			if(!control.valid && !control.pristine) {
				hasErrors = true;
				break;
			}
		}
		return hasErrors;
	}

  enviar() {
    this.sucesso = true;
  }

  debug(): string {
    return JSON.stringify(this.filial);
  }
  ngOnInit() {}
}
