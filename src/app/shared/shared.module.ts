
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';



@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    AccordionModule    
  ],
  exports:[ButtonModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    AccordionModule]
})
export class SharedModule { }
