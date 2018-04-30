import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandeiraRoutingModule } from './bandeira-routing.module';
import { BandeirasComponent } from './bandeiras/bandeiras.component';

@NgModule({
  imports: [
    CommonModule,
    BandeiraRoutingModule,
    SharedModule
  ],
  declarations: [BandeirasComponent]
})
export class BandeiraModule { }
