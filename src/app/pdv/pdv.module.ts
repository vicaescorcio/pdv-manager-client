import { FiliaisService } from './../filiais/filiais.service';
import { SharedModule } from './../shared/shared.module';
import { PdvService } from './pdv.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdvRoutingModule } from './pdv-routing.module';
import { PdvsComponent } from './pdvs/pdvs.component';
import { NewPdvComponent } from './new-pdv/new-pdv.component';
import { EditPdvComponent } from './edit-pdv/edit-pdv.component';

@NgModule({
  imports: [
    CommonModule,
    PdvRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[],
  providers:[PdvService],
  declarations: [PdvsComponent, NewPdvComponent, EditPdvComponent]
})
export class PdvModule { }
