import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursosComponent } from './recursos/recursos.component';

@NgModule({
  imports: [
    CommonModule,
    RecursoRoutingModule,
    SharedModule
  ],
  declarations: [RecursosComponent]
})
export class RecursoModule { }
