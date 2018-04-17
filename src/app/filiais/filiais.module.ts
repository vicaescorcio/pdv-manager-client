import { NewFilialComponent } from './new/new-filial.component';
import { SharedModule } from './../shared/shared.module';
import { FiliaisService } from './filiais.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiliaisRoutingModule } from './filiais-routing.module';
import { FiliaisComponent } from './filiais/filiais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFilialComponent } from './edit/edit-fiilial.component';

@NgModule({
  imports: [
    CommonModule,
    FiliaisRoutingModule,
    SharedModule,
    FormsModule,ReactiveFormsModule
  ],
  exports:[
    FiliaisComponent
  ],
  declarations: [FiliaisComponent, NewFilialComponent, EditFilialComponent],
  providers:[FiliaisService]
})
export class FiliaisModule { }
