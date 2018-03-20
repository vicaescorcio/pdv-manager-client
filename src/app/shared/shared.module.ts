
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import {SidebarModule} from 'primeng/sidebar';
import {DataTableModule} from 'primeng/datatable';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    SidebarModule,
    BrowserAnimationsModule,
    DataTableModule
      
   
  ],
  exports:[ 
    ButtonModule,
    SidebarModule, BrowserAnimationsModule, DataTableModule]
})
export class SharedModule { }
