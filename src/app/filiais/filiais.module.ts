import { NewFilialComponent } from './new-filial.component';
import { SharedModule } from './../shared/shared.module';
import { FiliaisService } from './filiais.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiliaisRoutingModule } from './filiais-routing.module';
import { FiliaisComponent } from './filiais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  declarations: [FiliaisComponent, NewFilialComponent],
  providers:[FiliaisService]
})
export class FiliaisModule { }
