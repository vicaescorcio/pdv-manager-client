import { ButtonModule } from 'primeng/components/button/button';

import { AppShellModule } from './app-shell/app-shell.module';
import { FiliaisModule } from './filiais/filiais.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppShellModule,
    FiliaisModule       
    
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
