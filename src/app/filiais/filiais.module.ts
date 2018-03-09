import { FiliaisService } from './filiais.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiliaisRoutingModule } from './filiais-routing.module';
import { FiliaisComponent } from './filiais.component';

@NgModule({
  imports: [
    CommonModule,
    FiliaisRoutingModule
  ],
  declarations: [FiliaisComponent],
  providers:[FiliaisService]
})
export class FiliaisModule { }
