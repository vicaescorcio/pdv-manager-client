import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { PosService } from './pos.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PossComponent } from './poss/poss.component';
import { NewPosComponent } from './new-pos/new-pos.component';

@NgModule({
  imports: [
    CommonModule,
    PosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[PosService],
  declarations: [PossComponent, NewPosComponent]
})
export class PosModule { }
