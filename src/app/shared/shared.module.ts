import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    SidebarModule,
    BrowserAnimationsModule
   
   
  ],
  exports:[ 
    ButtonModule,
    SidebarModule, BrowserAnimationsModule ]
})
export class SharedModule { }
