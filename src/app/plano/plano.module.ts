import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanoService } from './plano.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoRoutingModule } from './plano-routing.module';
import { PlanosComponent } from './planos/planos.component';
import { NewPlanoComponent } from './new-plano/new-plano.component';

@NgModule({
  imports: [
    CommonModule,
    PlanoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PlanosComponent, NewPlanoComponent],
  providers:[PlanoService]
})
export class PlanoModule { }
