import { EmpregadoService } from './empregado.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpregadoRoutingModule } from './empregado-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmpregadoRoutingModule
  ],
  declarations: [],
  providers:[EmpregadoService]
})
export class EmpregadoModule { }
