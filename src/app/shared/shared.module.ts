import { ProdutoForm } from './_directives/produto-form.directive';
import { FiliaisModule } from './../filiais/filiais.module';
import { FiliaisService } from './../filiais/filiais.service';
import { UpperCaseText } from './_directives/text-transformer.directive';
import { Masks } from './masks';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './../app.component';
import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
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
    DialogModule, CheckboxModule  ],

  declarations:[UpperCaseText, ProdutoForm],
  providers:[Masks],
  exports:[ 
    ButtonModule,TextMaskModule,
    SidebarModule, BrowserAnimationsModule, DataTableModule, DialogModule, UpperCaseText, ProdutoForm, CheckboxModule ]
})
export class SharedModule { }
