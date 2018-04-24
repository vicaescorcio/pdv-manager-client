import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalizadoraRoutingModule } from './finalizadora-routing.module';
import { FinalizadoraService } from './finalizadora.service';
import { FinalizadorasComponent } from './finalizadoras/finalizadoras.component';
import { NewFinalizadoraComponent } from './new-finalizadora/new-finalizadora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FinalizadoraRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule
  ],
  providers:[FinalizadoraService],
  declarations: [FinalizadorasComponent, NewFinalizadoraComponent]
})
export class FinalizadoraModule { }
