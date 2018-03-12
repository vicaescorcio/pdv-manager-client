
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {MegaMenuModule} from 'primeng/megamenu';

import {TieredMenuModule} from 'primeng/tieredmenu';
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    AccordionModule,  
    MenubarModule,
    SidebarModule,
    PanelModule,
      
  ],
  exports:[ButtonModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    AccordionModule, SidebarModule, MenubarModule,TabMenuModule, MegaMenuModule, TieredMenuModule ]
})
export class SharedModule { }
