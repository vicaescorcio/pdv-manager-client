import { SharedModule } from './../shared/shared.module';
import { FiliaisService } from './filiais.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiliaisRoutingModule } from './filiais-routing.module';
import { FiliaisComponent } from './filiais.component';

@NgModule({
  imports: [
    CommonModule,
    FiliaisRoutingModule,
    SharedModule
  ],
  exports:[
    FiliaisComponent
  ],
  declarations: [FiliaisComponent],
  providers:[FiliaisService]
})
export class FiliaisModule { }
