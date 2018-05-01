import { BandeiraService } from './bandeira.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandeiraRoutingModule } from './bandeira-routing.module';
import { BandeirasComponent } from './bandeiras/bandeiras.component';
import { NewBandeiraComponent } from './new-bandeira/new-bandeira.component';

@NgModule({
  imports: [
    CommonModule,
    BandeiraRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[BandeiraService],
  declarations: [BandeirasComponent, NewBandeiraComponent]
})
export class BandeiraModule { }
