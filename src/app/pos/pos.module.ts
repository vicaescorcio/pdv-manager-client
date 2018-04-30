import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PossComponent } from './poss/poss.component';

@NgModule({
  imports: [
    CommonModule,
    PosRoutingModule,
    SharedModule
  ],
  declarations: [PossComponent]
})
export class PosModule { }
