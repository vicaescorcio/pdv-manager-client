import { Masks } from './masks';
import { UpperDirective } from './_directives/upper.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './../app.component';
import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import {SidebarModule} from 'primeng/sidebar';
import {DataTableModule} from 'primeng/datatable';
import { TextMaskModule } from 'angular2-text-mask';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    SidebarModule,
    BrowserAnimationsModule,
    DataTableModule,
    TextMaskModule,
    DialogModule
    
    
   
  ],
  declarations:[UpperDirective],
  providers:[Masks],
  exports:[ 
    ButtonModule,TextMaskModule,
    SidebarModule, BrowserAnimationsModule, DataTableModule,UpperDirective, DialogModule ]
})
export class SharedModule { }
