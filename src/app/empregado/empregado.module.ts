import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { EmpregadoService } from './empregado.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpregadosComponent } from './empregados/empregados.component';
import { EmpregadoRoutingModule } from './empregado-routing.module';
import { NewEmpregadoComponent } from './new-empregado/new-empregado.component';

@NgModule({
  imports: [
    CommonModule,
    EmpregadoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [EmpregadosComponent, NewEmpregadoComponent],
  providers:[EmpregadoService]
})
export class EmpregadoModule { }
