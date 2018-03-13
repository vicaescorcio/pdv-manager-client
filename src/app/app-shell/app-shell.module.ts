import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellRoutingModule } from './app-shell-routing.module';
import { AppShellComponent } from './app-shell.component';

@NgModule({
  imports: [
    CommonModule,
    AppShellRoutingModule,
    SharedModule
  ],
  exports:[
    AppShellComponent
  ],
  declarations: [AppShellComponent]
})
export class AppShellModule { }
