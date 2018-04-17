import { SharedModule } from './../shared/shared.module';
import { PdvService } from './pdv.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdvRoutingModule } from './pdv-routing.module';
import { PdvsComponent } from './pdvs/pdvs.component';
import { NewPdvComponent } from './new-pdv/new-pdv.component';
import { EditPdvComponent } from './edit-pdv/edit-pdv.component';

@NgModule({
  imports: [
    CommonModule,
    PdvRoutingModule,
    SharedModule
  ],
  exports:[],
  providers:[PdvService],
  declarations: [PdvsComponent, NewPdvComponent, EditPdvComponent]
})
export class PdvModule { }
