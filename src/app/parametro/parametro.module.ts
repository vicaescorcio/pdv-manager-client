import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametroRoutingModule } from './parametro-routing.module';
import { ParametrosComponent } from './parametros/parametros.component';

@NgModule({
  imports: [
    CommonModule,
    ParametroRoutingModule,
    SharedModule
  ],
  declarations: [ParametrosComponent]
})
export class ParametroModule { }
